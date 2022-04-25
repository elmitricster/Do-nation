package com.example.payment.dto;

import com.example.payment.domain.PaymentRecord;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class PaymentRecordResponse {
    private LocalDateTime paymentTime;
    private int paymentMoney;
    private int paymentPoint;

    public PaymentRecordResponse(LocalDateTime paymentTime, int paymentMoney, int paymentPoint) {
        this.paymentTime = paymentTime;
        this.paymentMoney = paymentMoney;
        this.paymentPoint = paymentPoint;
    }

    public PaymentRecordResponse(PaymentRecord paymentRecord) {
        this(paymentRecord.getPaymentTime(),paymentRecord.getPaymentMoney(), paymentRecord.getPaymentPoint());
    }
    public static List<PaymentRecordResponse> convertList(List<PaymentRecord> list){
        return list.stream()
                .map(x->new PaymentRecordResponse(x))
                .collect(Collectors.toList());
    }
}
