package com.example.follow.exception;

import com.example.common.exception.BaseException;

public class NotValidFollowException extends BaseException {
    private static final String MSG ="자기 자신은 팔로우 할수없습니다.";
    public NotValidFollowException() {
        super(MSG);
    }
}
