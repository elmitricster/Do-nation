package com.example.community.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Community_comment")
@NoArgsConstructor
@Getter @Setter
public class Comment {
    @Id
    @Column(name = "community_comment_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long community_comment_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_id")
    private Community communityId;

    @Column(name = "comment_time", nullable = false)
    private LocalDateTime commentWriteTime;

    @Column(name = "commentor_id", nullable = false)
    private String commentor;

    @Column(name = "comment_contents", nullable = false)
    private String comment;

    @Builder
    public Comment(Community communityId, LocalDateTime commentWriteTime, String commentor, String comment) {
        this.communityId = communityId;
        this.commentWriteTime = commentWriteTime;
        this.commentor = commentor;
        this.comment = comment;
    }


}
