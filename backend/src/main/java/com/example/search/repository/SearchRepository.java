package com.example.search.repository;

import com.example.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SearchRepository extends JpaRepository<User,Long>{

    @Query("select u from User u where u.nickname like %:query%")
    List<User> findAllByNicknameContains(@Param(value="query")String query);
    @Query("select u from User u where u.category like %:query%")
    List<User> findAllByCategoryContains(String query);
    @Query("select u from User u where u.subject like %:query%")
    List<User> findAllBySubjectContains(String query);

}
