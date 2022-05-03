package com.example.search.repository;

import com.example.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SearchRepository extends JpaRepository<User,Long>{
    List<User> findAllByNicknameContains(String query);
    List<User> findAllByCategoryContains(String query);
    List<User> findAllBySubjectContains(String query);
}
