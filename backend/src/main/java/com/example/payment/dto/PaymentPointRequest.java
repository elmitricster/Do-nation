package com.example.payment.dto;

import com.example.common.exception.UnauthorizedRequestException;
import com.example.payment.util.UseServiceTaxCalculator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.math.BigDecimal;
@ApiModel(value = "결제요청")
@Getter
public class PaymentPointRequest {
    //검증용
    @ApiModelProperty(value = "결제한 포인트")
    private int point;
    @ApiModelProperty(value = "부가세 포함한 결제금액")
    private int money;

    //카카오 쪽
    @ApiModelProperty(value = "카카오 가맹점 코드")
    private String cid;
    @ApiModelProperty(value = "카카오 결제고유번호")
    private String tid;
    @ApiModelProperty(value = "카카오 가맹점주문번호")
    private String partnerOrderId;
    @ApiModelProperty(value = "카카오 가맹점회원 id")
    private String partnerUserId;
    @ApiModelProperty(value = "카카오 결제승인 요청 인증토큰")
    private String pgToken;

    public PaymentPointRequest(int point, int money, String cid, String tid, String partnerOrderId, String partnerUserId, String pgToken) {
        if(point==0||money==0)
            throw new UnauthorizedRequestException();
        
        this.point = point;
        this.money = money;
        this.cid = cid;
        this.tid = tid;
        this.partnerOrderId = partnerOrderId;
        this.partnerUserId = partnerUserId;
        this.pgToken = pgToken;
    }

    public double getExchangeRate() {

        BigDecimal moneyBD = BigDecimal.valueOf(UseServiceTaxCalculator.excludedTaxPrice(money));
        BigDecimal pointBD = BigDecimal.valueOf(point);
        return moneyBD.divide(pointBD).doubleValue();
    }
}
