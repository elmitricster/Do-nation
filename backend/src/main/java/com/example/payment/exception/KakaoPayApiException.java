package com.example.payment.exception;

public class KakaoPayApiException extends RuntimeException {
    private static final String MSG ="결제 API 연동 실패";
    public KakaoPayApiException() {
        super(MSG);
    }
}
