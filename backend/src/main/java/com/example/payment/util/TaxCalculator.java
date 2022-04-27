package com.example.payment.util;

import com.example.common.util.BaseUtil;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
public class TaxCalculator extends BaseUtil {
    static final double TAX  = 1.1;

    public static long excludedTaxPrice(long price) {
        BigDecimal priceBD = BigDecimal.valueOf(price);
        BigDecimal taxBD = BigDecimal.valueOf(TAX);
        return (long) priceBD.divide(taxBD,0,BigDecimal.ROUND_FLOOR).doubleValue();
    }


}
