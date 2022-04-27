package com.example.common.exception;

public class UnauthorizedRequestException extends BaseException{
    private static final String MSG ="허락 되지 않은 요청입니다.";

    public UnauthorizedRequestException() {
        super(MSG);
    }
}
