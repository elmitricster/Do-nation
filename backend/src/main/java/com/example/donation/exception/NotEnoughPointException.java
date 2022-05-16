package com.example.donation.exception;

import com.example.common.exception.BaseException;

public class NotEnoughPointException extends BaseException {
    private static final String MSG = "포인트가 부족합니다.";
    public NotEnoughPointException() {
        super(MSG);
    }
}
