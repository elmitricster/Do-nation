package com.example.follow.repository;

import com.example.follow.domain.Follow;
import com.example.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FollowRepository extends JpaRepository<Follow,Long> {
    boolean existsByUserAndCreator(User user,User creator);
    List<Follow> findAllByUser(User user);
}
