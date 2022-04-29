package com.example.payment.exception;

import com.example.common.exception.BaseException;

public class OverflowMoneyException  extends BaseException {
    private static final String MSG ="한번 정산할 수 있는 한도 초과";
    public OverflowMoneyException() {
        super(MSG);
    }
}

