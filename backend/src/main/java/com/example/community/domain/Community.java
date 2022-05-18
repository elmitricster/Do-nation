package com.example.community.domain;

import com.example.community.exception.NotValidCommunityException;
import com.example.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Community")
@NoArgsConstructor
@Getter
public class Community {
    @Id
    @Column(name = "community_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long communityId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    private User creator;

    @Column(name = "write_time", nullable = false)
    private LocalDateTime writeTime;

    @Column(name = "contents", nullable = false)
    private String content;


    @Builder
    public Community(User creator, LocalDateTime writeTime, String content) {
        this.creator = creator;
        updateContent(content,writeTime);
    }


    public void updateContent(String content, LocalDateTime writeTime) {
        if (content==null||content.trim().isEmpty())
            throw new NotValidCommunityException();
        this.content = content;
        this.writeTime = writeTime;

    }
}
