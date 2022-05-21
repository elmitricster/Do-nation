package com.example.follow.exception;

import com.example.common.exception.BaseException;

public class AlreadyRemoveFollowException extends BaseException {
    private static final String MSG ="이미 없는 구독 관계입니다.";
    public AlreadyRemoveFollowException() {
        super(MSG);
    }
}
