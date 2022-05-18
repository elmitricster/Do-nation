package com.example.community.repository;

import com.example.community.domain.Community;
import com.example.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    List<Community> findAllByCreatorOrderByWriteTimeDesc(User user);
}
