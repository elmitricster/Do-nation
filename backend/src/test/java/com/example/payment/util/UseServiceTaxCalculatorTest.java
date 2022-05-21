package com.example.payment.util;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UseServiceTaxCalculatorTest {


    @Test
    @DisplayName("세후 가격 계산 test")
    public void excludedTaxPriceTest(){
        assertEquals(        UseServiceTaxCalculator.excludedTaxPrice(1100),1000);
        assertEquals(        UseServiceTaxCalculator.excludedTaxPrice(110),100);

        assertEquals(        UseServiceTaxCalculator.excludedTaxPrice(2),1);

    }
}