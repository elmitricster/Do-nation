package com.example.community.dto;

import com.example.community.domain.Comment;
import com.example.user.domain.User;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class CommentResponse {
    private Long commentId;

    private LocalDateTime commentWriteTime;

    private User commentor;

    private String content;

    public CommentResponse(Comment comment) {
        this.commentId = comment.getCommentId();
        this.commentWriteTime = comment.getCommentWriteTime();
        this.commentor = comment.getCommentor();
        this.content = comment.getContent();
    }
    public static List<CommentResponse> ofList(List<Comment>comment){
        return comment.stream().map(CommentResponse::new).collect(Collectors.toList());
    }
}
