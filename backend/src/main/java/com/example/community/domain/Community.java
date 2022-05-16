package com.example.community.domain;

import com.example.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "Community")
@NoArgsConstructor
@Getter @Setter
public class Community {
    @Id
    @Column(name = "community_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long community_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    private User creator;

    @Column(name = "write_time", nullable = false)
    private LocalDateTime writeTime;

    @Column(name = "contents", nullable = false)
    private String content;

    @Column(name = "content_file")
    private UploadFile attachFile;

    private List<UploadFile> imageFiles;

    @Builder
    public Community(User creator, LocalDateTime writeTime, String content, List<UploadFile> imageFiles) {
        this.creator = creator;
        this.writeTime = writeTime;
        this.content = content;
        this.imageFiles = imageFiles;
    }


}
