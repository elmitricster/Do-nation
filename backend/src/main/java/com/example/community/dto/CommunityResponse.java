package com.example.community.dto;

import com.example.common.dto.UserResponse;
import com.example.community.domain.Community;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class CommunityResponse {
    private UserResponse user;
    private LocalDateTime writeTime;
    private String content;

    public CommunityResponse(Community community) {
        this.user = new UserResponse(community.getCreator());
        this.writeTime = community.getWriteTime();
        this.content = community.getContent();
    }

}
