package com.example.follow.exception;

import com.example.common.exception.BaseException;

public class AlreadyFollowException extends BaseException {
    private static final String MSG = "이미 있는 구독 관계입니다.";
    public AlreadyFollowException() {
        super(MSG);
    }
}
