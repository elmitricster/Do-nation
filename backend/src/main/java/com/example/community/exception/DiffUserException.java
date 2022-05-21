package com.example.community.exception;

import com.example.common.exception.BaseException;

public class DiffUserException extends BaseException {
    private static final String MSG ="같은 유저로 접근해야 합니다.";
    public DiffUserException() {
        super(MSG);
    }
}

