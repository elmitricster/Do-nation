package com.example.undefined.domain;

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
            throw new RuntimeException("잘못된 접근입니다.");
        this.id = id;
        this.nickname = nickname;
        this.point = point;
    }

    public void chargePoint(int point){
        long chargePoint = this.point+point;
        if(point<=0||chargePoint>=Integer.MAX_VALUE)
            throw new RuntimeException("충전되지 않는 경우입니다.");
        this.point+=point;
    }
    
}
