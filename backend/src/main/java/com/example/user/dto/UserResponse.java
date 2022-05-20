package com.example.user.dto;

import com.example.auth.dto.UserUrlDto;
import com.example.user.domain.User;
import com.example.user.domain.UserUrl;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserResponse {
    private User user;
    private List<UserUrlDto> userUrls;
    public UserResponse(User user, List<UserUrl> url) {
        this.user = user;
        this.userUrls =  url.stream().map(x->new UserUrlDto(x.getUserUrl(),x.getUrlName())).collect(Collectors.toList());
    }
}
