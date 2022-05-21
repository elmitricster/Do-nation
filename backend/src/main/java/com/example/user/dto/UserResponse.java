package com.example.user.dto;

import com.example.auth.dto.UserUrlDto;
import com.example.user.domain.User;
import com.example.user.domain.UserUrl;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserResponse {
    private Long id;
    private String platformType;
    private String kakaoId;
    private String profileImage;
    private String profileName;
    private String introMessage;
    private String category;
    private String birthday;
    private String nickname;
    private boolean isCertified;
    private int point;
    private String subject;

    private List<UserUrlDto> userUrls;
    public UserResponse(User user, List<UserUrl> url) {
        makeUser(user);
        this.userUrls =  url.stream().map(x->new UserUrlDto(x.getUserUrl(),x.getUrlName())).collect(Collectors.toList());
    }
    private void makeUser(User user){
        this.id = user.getId();
        this.platformType = user.getPlatformType();
        this.kakaoId = user.getKakaoId();
        this.profileImage = user.getProfileImage();
        this.profileName = user.getProfileName();
        this.introMessage = user.getIntroMessage();
        this.category = user.getCategory();
        this.birthday = user.getBirthday();
        this.nickname = user.getNickname();
        this.isCertified = user.isCertified();
        this.point = user.getPoint();
        this.subject = user.getSubject();
    }
}
