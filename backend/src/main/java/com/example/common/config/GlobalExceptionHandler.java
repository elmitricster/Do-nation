package com.example.common.config;


import com.example.common.dto.ErrorResponse;
import com.example.common.exception.BaseException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(BaseException.class)
    public ResponseEntity<ErrorResponse> exceptedError(BaseException baseException){
        log.info("exception",baseException);
        return ResponseEntity.badRequest().body(baseException.toResponse());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> error(Exception exception){
        log.info("new Exception, not expected Exception",exception);
        return ResponseEntity.badRequest().body(new ErrorResponse("예상치 못한 에러입니다."));
    }

}
