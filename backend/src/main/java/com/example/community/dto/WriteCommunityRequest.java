package com.example.community.dto;

import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
public class WriteCommunityRequest {
    private String content;
    private List<MultipartFile> images;

    public WriteCommunityRequest(String content, List<MultipartFile> images) {
        this.content = content;
        this.images = images;
    }
}
