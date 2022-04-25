package com.example.payment.exception;

import com.example.common.exception.BaseException;

public class DiffExchangeRateException extends BaseException {
    private static final String msg ="환율이 다릅니다. 같은 환율로 작성해주세요.";
    public DiffExchangeRateException() {
        super(msg);
    }
}
