package com.example.auth.exception;

import com.example.common.exception.BaseException;

public class UserNotFoundException extends BaseException {
    private static final String MESSAGE = "사용자를 찾지 못했습니다";

    public UserNotFoundException() {
        super(MESSAGE);
    }
}