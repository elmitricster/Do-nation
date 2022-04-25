package com.example.payment.service;

import com.example.payment.domain.PaymentRecord;
import com.example.undefined.domain.User;
import com.example.payment.dto.KakaoPayApiResponse;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.dto.PaymentPointResponse;
import com.example.payment.dto.PaymentRecordResponse;
import com.example.payment.repository.PaymentRecordRepository;
import com.example.payment.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PaymentServiceTest {

    @Mock
    PaymentRecordRepository paymentRecordRepository;
    @Mock
    UserRepository userRepository;
    @Mock
    KakaoPayService kakaoPayService;
    @InjectMocks
    PaymentServiceImpl payment;


    private long id = 1;

    User user;
    @BeforeEach
    public void setUp() {
        user = new User();
        when(userRepository.findById(Mockito.anyLong())).thenReturn(Optional.of(user));

    }

    @Test
    @DisplayName("비어있는 조회 목록")
    void emptyFetchPayments() {
        assertEquals(payment.fetchPayments(id).size(), 0);
    }
    @Test
    @DisplayName("하나있는 조회 목록")
    void notEmptyFetchPayments() {
        when(paymentRecordRepository.findAllByUserOrderByPaymentTimeDesc(Mockito.any(User.class))).thenReturn(Arrays.asList(new PaymentRecord(user, LocalDateTime.now(),1100,1000)));
        List <PaymentRecordResponse>list = payment.fetchPayments(id);
        assertEquals(list.size(),1);
    }

    @Test
    @DisplayName("결제 완료 api")
    void chargePoint() {
        KakaoPayApiResponse kakaoPayApiResponse = new KakaoPayApiResponse(LocalDateTime.now(), "");
        PaymentRecord record=PaymentRecord.builder()
                .paymentMoney(2)
                .paymentPoint(1)
                .tid(kakaoPayApiResponse.getTid())
                .paymentTime(kakaoPayApiResponse.getApprove_at())
                .user(user)
                .build();
        when(kakaoPayService.approveKakaoPay(Mockito.any())).thenReturn(kakaoPayApiResponse);
        when(paymentRecordRepository.save(Mockito.any())).thenReturn(record);
       PaymentPointResponse response = payment.paymentPoint(1, new PaymentPointRequest(1, 2, "cid", "tid", "partner_order_id", "partner_user_id", "pg_token"));

       assertEquals(true,record.getPaymentTime().isEqual(response.getApprove_at()));
    }
}