package com.example.withdraw.util;

import com.example.common.util.BaseUtil;
import com.example.payment.util.ConvertCalculator;
import com.example.payment.util.UseServiceTaxCalculator;

import java.math.BigDecimal;

public class CreatorTaxCalculator extends BaseUtil {
   static final double INCOME_TAX =0.033;
   static final double PAYMENT_TAX =0.0;
   static final double SERVICE_TAX =0.0;

   public static long creatorPointToMoney(int point){
      long money=ConvertCalculator.pointToMoney(point);
      money=UseServiceTaxCalculator.excludedTaxPrice(money);
      double tax = INCOME_TAX+PAYMENT_TAX+SERVICE_TAX;
      return BigDecimal.valueOf(money).divide(BigDecimal.ONE.min(BigDecimal.valueOf(tax))).longValue();
   }

}
