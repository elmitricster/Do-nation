package com.example.payment.util;

import java.math.BigDecimal;

public class TaxCalculator {
    final static double TAX  = 1.1;

    public static long excludedTaxPrice(long price) {
        BigDecimal priceBD = BigDecimal.valueOf(price);
        BigDecimal taxBD = BigDecimal.valueOf(TAX);
        return (long) priceBD.divide(taxBD,0,BigDecimal.ROUND_FLOOR).doubleValue();
    }


}
