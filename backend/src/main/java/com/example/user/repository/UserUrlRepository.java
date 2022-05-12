package com.example.user.repository;

import com.example.user.domain.User;
import com.example.user.domain.UserUrl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface UserUrlRepository extends JpaRepository<UserUrl, Long> {

    @Transactional
    @Modifying
    @Query("delete from UserUrl u where u.user = :user")
    void deleteAllByIdInQuery(User user);

}
