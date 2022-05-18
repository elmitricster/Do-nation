package com.example.community.domain;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "community_images")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CommunityImage {
    @Id
    @Column(name = "community_images_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="upload_file_name")
    private String uploadFileName;
    @Column(name="store_file_name")
    private String storeFileName;
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "community_id")
    Community community;


    public CommunityImage(UploadFile uploadFile, Community community) {
        this.uploadFileName = uploadFile.getUploadFileName();
        this.storeFileName = uploadFile.getStoreFileName();
        this.community=community;
    }



}

