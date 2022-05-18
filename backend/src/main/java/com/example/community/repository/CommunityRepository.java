package com.example.community.repository;

import com.example.community.domain.Community;
import com.example.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommunityRepository extends JpaRepository<Community, Long> {
    List<Community> findAllByCreatorOrderByWriteTimeDesc(User user);
    @Query("select c from Community c where c.creator=:user")
    List<Community> findAllByCreator(@Param(value="user")User user);


}
