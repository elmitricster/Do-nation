package com.example.community.domain;

import com.example.community.exception.NotValidCommunityException;
import com.example.user.domain.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

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

    @ElementCollection
    @CollectionTable(
            name = "content_file",
            joinColumns = @JoinColumn(name = "community_id")
    )
    private List<UploadFile> imageFiles;

    @Builder
    public Community(User creator, LocalDateTime writeTime, String content, Collection<UploadFile> imageFiles) {
        this.creator = creator;
        this.content = content;
        updateContent(content,writeTime,imageFiles);
    }


    public void updateContent(String content, LocalDateTime writeTime, Collection<UploadFile> imageFiles) {
        if (content.trim().isEmpty() && imageFiles.size() == 0)
            throw new NotValidCommunityException();
        this.content = content;
        this.writeTime = writeTime;
        this.imageFiles = imageFiles.stream().collect(Collectors.toList());
    }
}
