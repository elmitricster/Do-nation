package com.example.payment.dto;

import com.example.payment.domain.PaymentRecord;
import com.example.payment.domain.User;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class PaymentRecordResponseTest {

    @Test
    @DisplayName("convertList")
    public void convertListTest() {
        User user = new User();
        List<PaymentRecord> records = Arrays.asList(new PaymentRecord(user, LocalDateTime.now(),1100,1000));
        assertEquals(PaymentRecordResponse.convertList(records).size(),1);

    }

}