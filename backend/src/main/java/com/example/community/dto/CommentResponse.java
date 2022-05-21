package com.example.community.dto;

import com.example.common.dto.UserResponse;
import com.example.community.domain.Comment;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class CommentResponse {
    private Long commentId;

    private LocalDateTime commentWriteTime;


    private UserResponse user;
    private String content;

    public CommentResponse(Comment comment) {
        this.commentId = comment.getCommentId();
        this.commentWriteTime = comment.getCommentWriteTime();
        this.user=new UserResponse(comment.getCommentor());

        this.content = comment.getContent();
    }
    public static List<CommentResponse> ofList(List<Comment>comment){
        return comment.stream().map(CommentResponse::new).collect(Collectors.toList());
    }
}
