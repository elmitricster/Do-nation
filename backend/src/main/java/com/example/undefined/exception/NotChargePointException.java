package com.example.undefined.exception;

import com.example.common.exception.BaseException;

public class NotChargePointException extends BaseException {
    private static final String MSG ="충전되지 않는 경우입니다.";
    public NotChargePointException() {
        super(MSG);
    }
}
