package com.example.undefined.repository;

import com.example.undefined.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    boolean existsByKakaoId(String kakao_id);
    User findByKakaoId(String kakao_id);
    boolean existsByNickname(String userNickname);
}
