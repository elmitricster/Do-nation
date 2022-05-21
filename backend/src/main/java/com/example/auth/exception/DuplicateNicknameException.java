package com.example.auth.exception;

import com.example.common.exception.BaseException;

public class DuplicateNicknameException extends BaseException {
    private static final String MESSAGE = "중복된 닉네임입니다.";

    public DuplicateNicknameException() {
        super(MESSAGE);
    }
}