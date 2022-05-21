package com.example.payment.exception;

import com.example.common.exception.BaseException;

public class OverflowPointException extends BaseException {
    private static final String MSG ="충전할 수 있는 한도 초과";
    public OverflowPointException() {
        super(MSG);
    }
}
