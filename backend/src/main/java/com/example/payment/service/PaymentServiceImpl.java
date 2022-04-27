package com.example.payment.service;


import com.example.common.exception.UnauthorizedRequestException;
import com.example.payment.domain.PaymentRecord;
import com.example.undefined.domain.User;
import com.example.payment.dto.KakaoPayApiResponse;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.dto.PaymentPointResponse;
import com.example.payment.dto.PaymentRecordResponse;
import com.example.undefined.exception.NotFoundUserException;
import com.example.payment.repository.PaymentRecordRepository;
import com.example.undefined.repository.UserRepository;
import com.example.payment.util.PointConvertCalculator;
import com.example.undefined.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class PaymentServiceImpl implements PaymentService{
    private final PaymentRecordRepository paymentRecordRepository;
    private final UserService userService;
    private final KakaoPayService kakaoPayService;
    //TODO jwt 관련 인증을 해야할거임. 우선 작업은 햇다고 가정하고 함.
    //TODO userRepository 익셉셥 한곳으로 모으기.

    @Override
    public PaymentPointResponse paymentPoint(long id, PaymentPointRequest request) {
        User user = userService.findMember(id);
        if(!PointConvertCalculator.isEqualExchangeRate(request))
            throw new UnauthorizedRequestException();

        KakaoPayApiResponse kakaoPayApiResponse =kakaoPayService.approveKakaoPay(request);
        user.chargePoint(request.getPoint());
        PaymentRecord paymentRecord =paymentRecordRepository.save(
                PaymentRecord.builder()
                        .paymentMoney(request.getMoney())
                        .paymentPoint(request.getPoint())
                        .tid(kakaoPayApiResponse.getTid())
                        .paymentTime(kakaoPayApiResponse.getApproveAt())
                        .user(user)
                        .build()
        );
        return new PaymentPointResponse(paymentRecord);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaymentRecordResponse> fetchPayments(long id) {
        User user = userService.findMember(id);
        return PaymentRecordResponse.convertList(paymentRecordRepository.findAllByUserOrderByPaymentTimeDesc(user));
    }
}


