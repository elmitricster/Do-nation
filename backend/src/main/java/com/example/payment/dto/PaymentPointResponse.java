package com.example.payment.dto;

import com.example.payment.domain.PaymentRecord;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Getter
public class PaymentPointResponse {
    private int currentPoint;
    private LocalDateTime approve_at;


    public PaymentPointResponse(PaymentRecord paymentRecord) {
        this.currentPoint =paymentRecord.getUser().getPoint();
        this.approve_at = paymentRecord.getPaymentTime();
    }
}
