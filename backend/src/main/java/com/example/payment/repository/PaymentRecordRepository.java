package com.example.payment.repository;


import com.example.payment.domain.PaymentRecord;
import com.example.payment.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRecordRepository extends JpaRepository<PaymentRecord,Long>{
    List<PaymentRecord> findAllByUserOrderByPaymentTimeDesc(User user);
}