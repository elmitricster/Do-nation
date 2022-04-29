package com.example.withdraw.exception;

import com.example.common.exception.BaseException;

public class NotWithdrawPointException  extends BaseException {
    private static final String MSG ="정산 할수 없는 포인트입니다.";
    public NotWithdrawPointException() {
        super(MSG);
    }
}
