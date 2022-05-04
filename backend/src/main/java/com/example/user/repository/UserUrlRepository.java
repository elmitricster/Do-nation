package com.example.user.repository;

import com.example.user.domain.User;
import com.example.user.domain.UserUrl;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserUrlRepository extends JpaRepository<UserUrl, Long> {
    void deleteAllByUser(User user);
}
