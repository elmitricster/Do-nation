package com.example.payment.dto;

import com.example.payment.util.TaxCalculator;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;

@Getter
public class PaymentPointRequest {
    //검증용
    private int point;
    private int money;

    //카카오 쪽
    private String cid;
    private String tid;
    private String partner_order_id;
    private String partner_user_id;
    private String pg_token;

    public PaymentPointRequest(int point, int money, String cid, String tid, String partner_order_id, String partner_user_id, String pg_token) {
        if(point==0||money==0)
            throw new RuntimeException("잘못된 접근임.");

        this.point = point;
        this.money = money;
        this.cid = cid;
        this.tid = tid;
        this.partner_order_id = partner_order_id;
        this.partner_user_id = partner_user_id;
        this.pg_token = pg_token;
    }
    public double getExchangeRate() {

        BigDecimal moneyBD = BigDecimal.valueOf(TaxCalculator.excludedTaxPrice(money));
        BigDecimal pointBD = BigDecimal.valueOf(point);
        return moneyBD.divide(pointBD).doubleValue();
    }
}
