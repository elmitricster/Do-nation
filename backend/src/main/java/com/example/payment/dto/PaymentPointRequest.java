package com.example.payment.dto;

import com.example.common.exception.UnauthorizedRequestException;
import com.example.payment.util.TaxCalculator;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class PaymentPointRequest {
    //검증용
    private int point;
    private int money;

    //카카오 쪽
    private String cid;
    private String tid;
    private String partnerOrderId;
    private String partnerUserId;
    private String pgToken;

    public PaymentPointRequest(int point, int money, String cid, String tid, String partner_order_id, String partner_user_id, String pgToken) {
        if(point==0||money==0)
            throw new UnauthorizedRequestException();

        this.point = point;
        this.money = money;
        this.cid = cid;
        this.tid = tid;
        this.partnerOrderId = partner_order_id;
        this.partnerUserId = partner_user_id;
        this.pgToken = pgToken;
    }
    public double getExchangeRate() {

        BigDecimal moneyBD = BigDecimal.valueOf(TaxCalculator.excludedTaxPrice(money));
        BigDecimal pointBD = BigDecimal.valueOf(point);
        return moneyBD.divide(pointBD).doubleValue();
    }
}
