package com.example.withdraw.dto;

import com.example.withdraw.domain.WithdrawRecord;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class WithdrawRecordResponse {
    private int point;
    private int money;
    private LocalDateTime withdrawTime;

    public WithdrawRecordResponse(int point, int money, LocalDateTime withdrawTime) {
        this.point = point;
        this.money = money;
        this.withdrawTime = withdrawTime;
    }
    public WithdrawRecordResponse(WithdrawRecord withdrawRecord){
        this(withdrawRecord.getPoint(),withdrawRecord.getMoney(), withdrawRecord.getWithdrawTime());
    }

    public static List<WithdrawRecordResponse> convertList(List<WithdrawRecord> withdrawRecordList) {
        return withdrawRecordList.stream().map(WithdrawRecordResponse::new).collect(Collectors.toList());
    }
}
