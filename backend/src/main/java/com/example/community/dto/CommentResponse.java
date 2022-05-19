package com.example.community.dto;

import com.example.community.domain.Comment;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class CommentResponse {
    private Long commentId;

    private LocalDateTime commentWriteTime;


    private String profileImage;

    private String nickname;

    private String content;

    public CommentResponse(Comment comment) {
        this.commentId = comment.getCommentId();
        this.commentWriteTime = comment.getCommentWriteTime();
        this.profileImage=comment.getCommentor().getProfileImage();
        this.nickname=comment.getCommentor().getNickname();

        this.content = comment.getContent();
    }
    public static List<CommentResponse> ofList(List<Comment>comment){
        return comment.stream().map(CommentResponse::new).collect(Collectors.toList());
    }
}
