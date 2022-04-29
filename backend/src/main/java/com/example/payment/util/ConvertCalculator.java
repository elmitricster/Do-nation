package com.example.payment.util;

import com.example.common.util.BaseUtil;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.exception.OverflowPointException;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
public class ConvertCalculator extends BaseUtil{
    //Money/Point
    private static final double EXCHANGE_RATE = 1;

    public static int moneyToPoint(long money) {
        long point=exchange(money,EXCHANGE_RATE);
        if(point >Integer.MAX_VALUE)
            throw new OverflowPointException();
        return (int)point;
    }

    //우선은 포인트랑  똑같이 int 범위 넘으면 안되게 해둠.

    public static int pointToMoney(long point) {
        BigDecimal exchangeBD = BigDecimal.valueOf(EXCHANGE_RATE);
        long money=exchange(point,BigDecimal.ONE.divide(exchangeBD).doubleValue());
        if(money>Integer.MAX_VALUE)
            throw new OverflowPointException();
        return (int)money;

    }

    private static long exchange(long beforeValue,double exchangeRate) {
        BigDecimal priceBD = BigDecimal.valueOf(beforeValue);
        BigDecimal taxBD = BigDecimal.valueOf(exchangeRate);
        return (priceBD.multiply(taxBD)).longValue();
    }

    public static boolean isEqualExchangeRate(PaymentPointRequest request){
        return EXCHANGE_RATE==request.getExchangeRate();
    }
}
