package com.example.payment.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
@Getter
@RequiredArgsConstructor
public class KakaoPayApiResponse {
    private LocalDateTime approveAt;
    private String tid;

    public KakaoPayApiResponse(LocalDateTime approveAt, String tid) {
        this.approveAt = approveAt;
        this.tid = tid;
    }

    public boolean isEmptyTid() {
        return tid==null||tid.trim().isEmpty();
    }
}
