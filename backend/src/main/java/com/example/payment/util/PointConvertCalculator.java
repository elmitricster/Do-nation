package com.example.payment.util;

import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.dto.PaymentRecordResponse;

import java.math.BigDecimal;

public class PointConvertCalculator {
    private final static double EXCHANGE_RATE = 1;

    public static long moneyToPoint(long money) {
        BigDecimal priceBD = BigDecimal.valueOf(money);
        BigDecimal taxBD = BigDecimal.valueOf(EXCHANGE_RATE);

        long point=(priceBD.multiply(taxBD)).longValue();
        if(point>Integer.MAX_VALUE)
            throw new RuntimeException("충전할수 있는 한도 초과");

        return (int)point;
    }
    public static boolean isEqualExchangeRate(PaymentPointRequest request){
        return EXCHANGE_RATE==request.getExchangeRate();
    }
}
