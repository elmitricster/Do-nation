package com.example.payment.util;

import com.example.payment.dto.PaymentPointRequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class ConvertCalculatorTest {

    @Test
    @DisplayName("moneyToPoint test")
    void moneyToPointTest(){
        assertThrows(RuntimeException.class,()-> ConvertCalculator.moneyToPoint(Integer.MAX_VALUE+1L));
        assertEquals(ConvertCalculator.moneyToPoint(100),100);
    }
    @Test
    @DisplayName("pointToMoney test")
    void pointToMoneyTest()  {


        assertThrows(RuntimeException.class,()-> ConvertCalculator.pointToMoney(Integer.MAX_VALUE+1L));
        assertEquals(ConvertCalculator.pointToMoney(100),100);
    }

    @Test
    @DisplayName("exchangeRate Test")
    void exchangeRateTest(){
        assertThrows(RuntimeException.class,()-> ConvertCalculator.isEqualExchangeRate(        new PaymentPointRequest(1,0 ,  "cid","tid", "partner_order_id", "partner_user_id", "pg_token")));
        assertEquals(false, ConvertCalculator.isEqualExchangeRate(        new PaymentPointRequest(1,1 ,  "cid","tid", "partner_order_id", "partner_user_id", "pg_token")));
        assertEquals(true, ConvertCalculator.isEqualExchangeRate(        new PaymentPointRequest(1,2 ,  "cid","tid", "partner_order_id", "partner_user_id", "pg_token")));
    }
    
}