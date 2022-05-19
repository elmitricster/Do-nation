package com.example.community.dto;

import com.example.community.domain.Community;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommunityResponse {
    private String nickname;
    private String profileImage;
    private LocalDateTime writeTime;
    private String content;

    public CommunityResponse(Community community) {
        this.nickname = community.getCreator().getNickname();
        this.profileImage = community.getCreator().getProfileImage();
        this.writeTime = community.getWriteTime();
        this.content = community.getContent();
    }

}
