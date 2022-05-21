package com.example.community.exception;

import com.example.common.exception.BaseException;

public class NotValidCommunityException extends BaseException {
    private static final String MSG ="커뮤니티가 유효성에 어긋난 경우 입니다.\n 글이나 이미지 하나라도 올려주세요.";
    public NotValidCommunityException() {
        super(MSG);
    }
}

