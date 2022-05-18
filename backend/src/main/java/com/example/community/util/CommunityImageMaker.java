package com.example.community.util;

import com.example.common.util.BaseUtil;
import com.example.community.domain.Community;
import com.example.community.domain.CommunityImage;
import com.example.community.domain.UploadFile;

import java.util.List;
import java.util.stream.Collectors;

public class CommunityImageMaker extends BaseUtil {
    public static List<CommunityImage> ofList(List<UploadFile> uploadList, Community community){
        return uploadList.stream().map(x->new CommunityImage(x,community)).collect(Collectors.toList());
    }
}
