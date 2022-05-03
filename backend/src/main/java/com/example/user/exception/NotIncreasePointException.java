package com.example.user.exception;

import com.example.common.exception.BaseException;

public class NotIncreasePointException extends BaseException {
    private static final String MSG ="포인트가 증가되지않는 경우입니다.";
    public NotIncreasePointException() {
        super(MSG);
    }
}
