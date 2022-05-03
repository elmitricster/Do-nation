package com.example.user.dto;

import com.example.follow.domain.Follow;
import com.example.user.domain.User;
import lombok.Getter;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class CreatorResponse {
    private String profileImage;
    private String nickname;

    private String introMessage;
    private String category;

    public CreatorResponse(String profileImage, String nickname, String introMessage, String category) {
        this.profileImage = profileImage;
        this.nickname = nickname;
        this.introMessage = introMessage;
        this.category = category;
    }
    public  CreatorResponse(User user){
        this(user.getProfileImage(),user.getNickname(),user.getIntroMessage(),user.getCategory());
    }


    public static List<CreatorResponse> userToList(Collection<User> userList){
        return userList.stream().map(CreatorResponse::new).collect(Collectors.toList());
    }
    public static List<CreatorResponse> followToList(Collection<Follow> userList){
        return userList.stream().map(Follow::getCreator).map(CreatorResponse::new).collect(Collectors.toList());
    }
}
