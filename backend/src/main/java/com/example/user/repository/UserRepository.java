package com.example.user.repository;

import com.example.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    boolean existsByKakaoId(String kakao_id);
    User findByKakaoId(String kakao_id);
    boolean existsByNickname(String userNickname);
    Optional<User> findByNickname(String userNickname);
}
