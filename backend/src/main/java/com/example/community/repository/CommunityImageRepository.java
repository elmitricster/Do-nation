package com.example.community.repository;

import com.example.community.domain.Community;
import com.example.community.domain.CommunityImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityImageRepository extends JpaRepository<CommunityImage,Long> {
    List<CommunityImage> findAllByCommunity(Community community);
}
