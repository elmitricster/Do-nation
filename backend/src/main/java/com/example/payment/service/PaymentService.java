package com.example.payment.service;

import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.dto.PaymentPointResponse;
import com.example.payment.dto.PaymentRecordResponse;

import java.util.List;

public interface PaymentService {
    PaymentPointResponse paymentPoint(long id, PaymentPointRequest request);

    List<PaymentRecordResponse> fetchPayments(long id);
}
