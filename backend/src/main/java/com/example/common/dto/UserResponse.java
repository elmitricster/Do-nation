package com.example.common.dto;

import com.example.user.domain.User;
import lombok.Getter;

@Getter
public class UserResponse {
    private String profileImage;
    private String profileNickName;


    public UserResponse(User user) {
        this.profileImage = user.getProfileImage();
        this.profileNickName = user.getNickname();
    }
}
