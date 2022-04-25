package com.example.common.exception;

import com.example.common.dto.ErrorResponse;
import lombok.Getter;

@Getter
public class BaseException extends Exception {

    public BaseException(String message) {
        super(message);
    }
    public ErrorResponse toResponse() {
        return new ErrorResponse(getMessage());
    }
}
