package com.example.auth.exception;

import com.example.common.exception.BaseException;

public class InvalidUpdateUserException extends BaseException {
    private static final String MESSAGE = "유효하지 않은 유저 정보입니다.";

    public InvalidUpdateUserException() {
        super(MESSAGE);
    }
}
