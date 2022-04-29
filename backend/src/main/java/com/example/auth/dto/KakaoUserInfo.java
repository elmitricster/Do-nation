package com.example.auth.dto;

import lombok.Getter;

@Getter
public class KakaoUserInfo {

    private String kakao_id;
    private String profile_image_url;
    private String user_nickname;
    private String birthday;

    public KakaoUserInfo(String kakao_id, String profile_image_url, String user_nickname, String birthday) {
        this.kakao_id = kakao_id;
        this.profile_image_url = profile_image_url;
        this.user_nickname = user_nickname;
        this.birthday = birthday;
    }

    @Override
    public String toString() {
        return "KakaoUserInfo{" +
                "kakao_id=" + kakao_id +
                ", profile_image_url='" + profile_image_url + '\'' +
                ", user_nickname='" + user_nickname + '\'' +
                ", birthday='" + birthday + '\'' +
                '}';
    }
}
