package com.example.payment.service;


import com.example.common.exception.UnauthorizedRequestException;
import com.example.payment.domain.PaymentRecord;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.dto.PaymentPointResponse;
import com.example.payment.dto.PaymentRecordResponse;
import com.example.payment.repository.PaymentRecordRepository;
import com.example.payment.util.ConvertCalculator;
import com.example.user.domain.User;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class PaymentServiceImpl implements PaymentService{
    private final PaymentRecordRepository paymentRecordRepository;
    private final UserService userService;
    private final KakaoPayService kakaoPayService;
    //TODO 우선 카카오페이 상관없이

    @Override
    public PaymentPointResponse paymentPoint(long id, PaymentPointRequest request) {
        User user = userService.findMember(id);
        if(!ConvertCalculator.isEqualExchangeRate(request))
            throw new UnauthorizedRequestException();


        //KakaoPayApiResponse kakaoPayApiResponse =kakaoPayService.approveKakaoPay(request);

        user.increasePoint(request.getPoint());
        PaymentRecord paymentRecord =paymentRecordRepository.save(
                PaymentRecord.builder()
                        .paymentMoney(request.getMoney())
                        .paymentPoint(request.getPoint())
                        .tid("practice")
                        .paymentTime(LocalDateTime.now())
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


