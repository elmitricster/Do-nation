package com.example.payment.util;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TaxCalculatorTest {


    @Test
    @DisplayName("세후 가격 계산 test")
    public void excludedTaxPriceTest(){
        assertEquals(        TaxCalculator.excludedTaxPrice(1100),1000);
        assertEquals(        TaxCalculator.excludedTaxPrice(110),100);

        assertEquals(        TaxCalculator.excludedTaxPrice(2),1);

    }
}