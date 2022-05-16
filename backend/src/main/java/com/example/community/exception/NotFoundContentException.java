package com.example.community.exception;

import com.example.common.exception.BaseException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class NotFoundContentException extends BaseException {
    private static final String MSG = "존재하지 않는 게시글의 조회입니다.";
    public NotFoundContentException() {
        super(MSG);
    }
}
