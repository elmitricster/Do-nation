package com.example.payment.service;


import com.example.payment.domain.PaymentRecord;
import com.example.undefined.domain.User;
import com.example.payment.dto.KakaoPayApiResponse;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.dto.PaymentPointResponse;
import com.example.payment.dto.PaymentRecordResponse;
import com.example.undefined.exception.NotFoundUserException;
import com.example.payment.repository.PaymentRecordRepository;
import com.example.payment.repository.UserRepository;
import com.example.payment.util.PointConvertCalculator;
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
    private final UserRepository userRepository;
    private final KakaoPayService kakaoPayService;
    //TODO jwt 관련 인증을 해야할거임. 우선 작업은 햇다고 가정하고 함.
    //TODO userRepository 익셉셥 한곳으로 모으기.

    @Override
    public PaymentPointResponse paymentPoint(long id, PaymentPointRequest request) {
        User user =  userRepository.findById(id).orElseThrow(()->new NotFoundUserException());
        if(!PointConvertCalculator.isEqualExchangeRate(request))
            throw new RuntimeException("잘못된 접근입니다.");

        KakaoPayApiResponse kakaoPayApiResponse =kakaoPayService.approveKakaoPay(request);
        user.chargePoint(request.getPoint());
        PaymentRecord record =paymentRecordRepository.save(
                PaymentRecord.builder()
                        .paymentMoney(request.getMoney())
                        .paymentPoint(request.getPoint())
                        .tid(kakaoPayApiResponse.getTid())
                        .paymentTime(kakaoPayApiResponse.getApprove_at())
                        .user(user)
                        .build()
        );
        userRepository.save(user);
        return new PaymentPointResponse(record);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaymentRecordResponse> fetchPayments(long id) {
        User user =  userRepository.findById(id).orElseThrow(()->new NotFoundUserException());
        return PaymentRecordResponse.convertList(paymentRecordRepository.findAllByUserOrderByPaymentTimeDesc(user));
    }
}


