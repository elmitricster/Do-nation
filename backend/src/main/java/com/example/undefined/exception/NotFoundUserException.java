package com.example.undefined.exception;

import com.example.common.exception.BaseException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class NotFoundUserException extends BaseException{
    private static final String MSG ="없는 유저의 조회입니다.";
    public NotFoundUserException() {
        super(msg);
    }
}
