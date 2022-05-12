package com.example.auth.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UpdateUserRequest {

    @Length(max = 255)
    private String category;

    @Length(max = 255)
    private String introMessage;

    @Length(max = 255)
    private String userNickname;

    @Length(max = 255)
    private String profileImage;

    @Length(max = 255)
    private String profileName;

    @Length(max = 255)
    private String subject;

    private List<UserUrlDto> userUrls;

    public UpdateUserRequest(String category, String introMessage, String userNickname, String profileImage, String profileName, String subject, List<UserUrlDto> userUrls) {
        this.category = category;
        this.introMessage = introMessage;
        this.userNickname = userNickname;
        this.profileImage = profileImage;
        this.profileName = profileName;
        this.subject = subject;
        this.userUrls = userUrls;
    }
}
