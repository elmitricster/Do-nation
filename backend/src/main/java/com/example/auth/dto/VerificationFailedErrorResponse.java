package com.example.auth.dto;

import com.example.common.dto.ErrorResponse;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class VerificationFailedErrorResponse extends ErrorResponse {
    private int remainTryCount;

    public VerificationFailedErrorResponse(String errorCode, String message, int remainTryCount) {
        super(message);
        this.remainTryCount = remainTryCount;
    }
}
