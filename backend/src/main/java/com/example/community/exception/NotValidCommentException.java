package com.example.community.exception;

import com.example.common.exception.BaseException;

public class NotValidCommentException extends BaseException {
    private static final String MSG ="댓글 유효성에 어긋난 경우 입니다.\n 글을 써주세요.";
    public NotValidCommentException() {
        super(MSG);
    }
}

