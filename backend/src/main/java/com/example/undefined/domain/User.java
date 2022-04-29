package com.example.undefined.domain;

import com.example.common.exception.UnauthorizedRequestException;
import com.example.undefined.exception.NotChargePointException;
import com.example.withdraw.exception.NotWithdrawPointException;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@RequiredArgsConstructor
@Getter
@EqualsAndHashCode
public class User {
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_nickname", nullable = false)
    private String nickname;

    @Column(name = "point", nullable = false)
    private int point;

    @Builder()
    public User(long id, String nickname, int point) {
        if(point<0)
            throw new UnauthorizedRequestException();
        this.id = id;
        this.nickname = nickname;
        this.point = point;
    }


    public void chargePoint(int point){
        long chargePoint = this.point+(long)point;
        if(point<=0||chargePoint>=Integer.MAX_VALUE)
            throw new NotChargePointException();
        this.point+=point;
    }
    public void withdrawPoint(int point){
        long remainedPoint = this.point-(long)point;
        if(point<=0||remainedPoint<0)
            throw new NotWithdrawPointException();
        this.point-=point;
    }
    
}
