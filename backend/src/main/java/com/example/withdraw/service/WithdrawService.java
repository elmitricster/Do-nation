package com.example.withdraw.service;

import com.example.payment.util.ConvertCalculator;
import com.example.undefined.domain.User;
import com.example.undefined.service.UserService;
import com.example.withdraw.domain.WithdrawRecord;
import com.example.withdraw.dto.WithdrawRecordResponse;
import com.example.withdraw.repository.WithdrawRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class WithdrawService {
    private final UserService userService;
    private final WithdrawRepository withdrawRepository;

    public List<WithdrawRecordResponse> fetchWithdraws(long id) {
        User user = userService.findMember(id);
        return WithdrawRecordResponse.convertList(withdrawRepository.findByUserOrderByWithdrawTimeDesc(user));
    }

    public void withdraw(long id, int point) {
        User user = userService.findMember(id);
        withdrawRepository.save(WithdrawRecord.builder()
                .user(user)
                .withdrawTime(LocalDateTime.now())
                .money(ConvertCalculator.pointToMoney(point))
                .point(point)
                .build());
        user.withdrawPoint(point);
    }
}
