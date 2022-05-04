package com.example.auth.dto;

import lombok.Getter;

@Getter
public class UserUrlDto {
    String user_url;
    String url_name;

    public UserUrlDto(String user_url, String url_name) {
        this.user_url = user_url;
        this.url_name = url_name;
    }
}
