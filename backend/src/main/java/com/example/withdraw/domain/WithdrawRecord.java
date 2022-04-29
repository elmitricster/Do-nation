package com.example.withdraw.domain;

import com.example.undefined.domain.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class WithdrawRecord {
    @Id
    @Column(name = "withdraw_record_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "withdraw_point", nullable = false)
    private int point;

    @Column(name = "withdraw_money", nullable = false)
    private int money;
    @Column(name = "withdraw_time", nullable = false)
    private LocalDateTime withdrawTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder()
    public WithdrawRecord(int point, int money, LocalDateTime withdrawTime, User user) {
        this.point = point;
        this.money = money;
        this.withdrawTime = withdrawTime;
        this.user = user;
    }
}
