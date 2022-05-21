package com.example.withdraw.repository;

import com.example.user.domain.User;
import com.example.withdraw.domain.WithdrawRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WithdrawRepository extends JpaRepository<WithdrawRecord,Long> {
    List<WithdrawRecord> findByUserOrderByWithdrawTimeDesc(User user);
}
