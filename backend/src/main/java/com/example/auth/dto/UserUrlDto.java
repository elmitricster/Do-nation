package com.example.auth.dto;

import lombok.Getter;

@Getter
public class UserUrlDto {
    String userUrl;
    String urlName;

    public UserUrlDto(String userUrl, String urlName) {
        this.userUrl = userUrl;
        this.urlName = urlName;
    }
}
