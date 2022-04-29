package com.example.auth.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UpdateUserRequest {

    @NotBlank
    @Length(max = 255)
    private String category;

    @NotBlank
    @Length(max = 255)
    private String intro_message;

    @Length(max = 255)
    private String user_nickname;

    @Length(max = 255)
    private String profile_image;

    @NotBlank
    @Length(max = 255)
    private String profile_name;

    public UpdateUserRequest(String category, String intro_message, String user_nickname, String profile_image, String profile_name) {
        this.category = category;
        this.intro_message = intro_message;
        this.user_nickname = user_nickname;
        this.profile_image = profile_image;
        this.profile_name = profile_name;
    }
}
