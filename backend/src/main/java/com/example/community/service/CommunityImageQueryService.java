package com.example.community.service;

import com.example.community.domain.Community;
import com.example.community.domain.CommunityImage;
import com.example.community.repository.CommunityImageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CommunityImageQueryService {
    private final CommunityImageRepository communityImageRepository;

    public List<CommunityImage> getCommunityImages(Community community){
        return communityImageRepository.findAllByCommunity(community);
    }

}
