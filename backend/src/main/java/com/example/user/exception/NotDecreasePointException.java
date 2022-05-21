package com.example.user.exception;

import com.example.common.exception.BaseException;

public class NotDecreasePointException extends BaseException {
    private static final String MSG ="줄지않은 포인트에러입니다.";
    public NotDecreasePointException() {
        super(MSG);
    }
}
