package com.example.community.domain;

import com.example.community.exception.NotValidCommunityException;
import com.example.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Community_comment")
@NoArgsConstructor
@Getter
public class Comment {
    @Id
    @Column(name = "community_comment_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community")
    private Community community;

    @Column(name = "comment_time", nullable = false)
    private LocalDateTime commentWriteTime;

    @ManyToOne
    @JoinColumn(name = "commentor_id", nullable = false)
    private User commentor;

    @Column(name = "comment_contents", nullable = false)
    private String content;

    @Builder
    public Comment(Community community, LocalDateTime commentWriteTime, User commentor, String content) {
        this.community = community;
        updateComment(content,commentWriteTime);
        this.commentor = commentor;
    }
    public void updateComment(String comment, LocalDateTime writeTime) {
        if (comment.trim().isEmpty())
            throw new NotValidCommunityException();
        this.commentWriteTime = writeTime;
    }

}
