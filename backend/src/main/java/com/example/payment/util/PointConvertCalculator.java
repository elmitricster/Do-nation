package com.example.payment.util;

import com.example.common.util.BaseUtil;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.exception.OverflowPointException;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
public class PointConvertCalculator extends BaseUtil{
    private static final double EXCHANGE_RATE = 1;

    public static long moneyToPoint(long money) {
        BigDecimal priceBD = BigDecimal.valueOf(money);
        BigDecimal taxBD = BigDecimal.valueOf(EXCHANGE_RATE);

        long point=(priceBD.multiply(taxBD)).longValue();
        if(point>Integer.MAX_VALUE)
            throw new OverflowPointException();

        return (int)point;
    }
    public static boolean isEqualExchangeRate(PaymentPointRequest request){
        return EXCHANGE_RATE==request.getExchangeRate();
    }
}
