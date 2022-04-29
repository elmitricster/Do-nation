package com.example.payment.domain;

import com.example.common.exception.UnauthorizedRequestException;
import com.example.payment.util.UseServiceTaxCalculator;
import com.example.undefined.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Payment_record")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class PaymentRecord {
    @Id
    @Column(name = "payment_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "payment_tid", nullable = false)
    private String tid;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name="payment_time")
    private LocalDateTime paymentTime;

    @Column(name="payment_amount")
    private int paymentMoney;

    @Column(name="payment_point")
    private int paymentPoint;

    //심화 사항: 조금더 심화적으로 짠다면, 목록을 만들어서, 이 목록이 아닐때는 익셉션 처리를 해도 됫을듯 함.
    public PaymentRecord(User user, LocalDateTime paymentTime, int paymentMoney, int paymentPoint) {
        if(UseServiceTaxCalculator.excludedTaxPrice(paymentMoney)!=paymentPoint)
            throw new UnauthorizedRequestException();
        this.user = user;
        this.paymentTime = paymentTime;
        this.paymentMoney = paymentMoney;
        this.paymentPoint = paymentPoint;
    }


    @Builder
    public PaymentRecord(String tid, User user, LocalDateTime paymentTime, int paymentMoney, int paymentPoint) {
        this(user,paymentTime,paymentMoney,paymentPoint);
        this.tid = tid;
    }
    public PaymentRecord(long id,String tid, User user, LocalDateTime paymentTime, int paymentMoney, int paymentPoint) {
        this(tid,user,paymentTime,paymentMoney,paymentPoint);
        this.id = id;
    }


}
