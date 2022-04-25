package com.example.payment.util;

import com.example.payment.dto.PaymentPointRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PointConvertCalculatorTest {

    @Test
    @DisplayName("moneyToPoint test")
    void moneyToPointTest(){
        assertThrows(RuntimeException.class,()->PointConvertCalculator.moneyToPoint(Integer.MAX_VALUE+1L));
        assertEquals(PointConvertCalculator.moneyToPoint(100),100);
    }
    @Test
    @DisplayName("exchangeRate Test")
    void exchangeRateTest(){
        assertThrows(RuntimeException.class,()->PointConvertCalculator.isEqualExchangeRate(        new PaymentPointRequest(1,0 ,  "cid","tid", "partner_order_id", "partner_user_id", "pg_token")));
        assertEquals(false,PointConvertCalculator.isEqualExchangeRate(        new PaymentPointRequest(1,1 ,  "cid","tid", "partner_order_id", "partner_user_id", "pg_token")));
        assertEquals(true,PointConvertCalculator.isEqualExchangeRate(        new PaymentPointRequest(1,2 ,  "cid","tid", "partner_order_id", "partner_user_id", "pg_token")));
    }
    
}