package com.example.payment.exception;

import com.example.common.exception.BaseException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class NotFoundUserException extends BaseException{
    private static final String msg ="없는 유저의 조회입니다.";
    public NotFoundUserException() {
        super(msg);
    }
}
