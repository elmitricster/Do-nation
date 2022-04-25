package com.example.payment.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
@Getter
@RequiredArgsConstructor
public class KakaoPayApiResponse {
    private LocalDateTime approve_at;
    private String tid;

    public KakaoPayApiResponse(LocalDateTime approve_at, String tid) {
        this.approve_at = approve_at;
        this.tid = tid;
    }
}
