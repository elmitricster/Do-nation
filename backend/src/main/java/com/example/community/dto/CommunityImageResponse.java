package com.example.community.dto;

import com.example.community.domain.CommunityImage;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class CommunityImageResponse {
    private String uploadFileName;
    private String storeFileName;
    public CommunityImageResponse(CommunityImage image){
        uploadFileName=image.getUploadFileName();
        storeFileName=image.getStoreFileName();
    }
    public static List<CommunityImageResponse> ofList(List<CommunityImage>images){
        return images.stream().map(CommunityImageResponse::new).collect(Collectors.toList());
    }
}
