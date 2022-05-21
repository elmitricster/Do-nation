package com.example.payment.dto;

import com.example.payment.domain.PaymentRecord;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PaymentPointResponse {
    private int currentPoint;
    private LocalDateTime approveAt;


    public PaymentPointResponse(PaymentRecord paymentRecord) {
        this.currentPoint =paymentRecord.getUser().getPoint();
        this.approveAt = paymentRecord.getPaymentTime();
    }
}
