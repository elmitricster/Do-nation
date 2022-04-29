package com.example.undefined.domain;

import com.example.common.exception.UnauthorizedRequestException;
import com.example.undefined.exception.NotChargePointException;
import io.jsonwebtoken.lang.Assert;
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

    @Column(name = "platform_type")
    private String platformType;

    @Column(name = "kakao_id")
    private String kakaoId;

    @Column(name = "profile_image")
    private String profileImage;

    @Column(name = "profile_name")
    private String profileName;

    @Column(name = "intro_message")
    private String introMessage;

    @Column(name = "category")
    private String category;

    @Column(name = "birthday")
    private String birthday;

    @Column(name = "user_nickname", nullable = false)
    private String nickname;

    @Column(columnDefinition = "bool default false", name = "is_certified")
    private boolean isCertified;

    @Column(name = "point", nullable = false)
    private int point;

    @Builder(builderClassName = "BasicBuilder", builderMethodName = "BasicBuilder")
    public User(String kakaoId, String profileImage, String nickname, String birthday){
        Assert.notNull(kakaoId, "kakaoId must not be null");
        Assert.notNull(profileImage, "profileImage must not be null");
        Assert.notNull(nickname, "nickname must not be null");
        Assert.notNull(birthday, "birthday must not be null");

        this.kakaoId = kakaoId;
        this.profileImage = profileImage;
        this.nickname = nickname;
        this.birthday = birthday;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }

    public void setIntroMessage(String introMessage) {
        this.introMessage = introMessage;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setCertified(boolean certified) {
        isCertified = certified;
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
