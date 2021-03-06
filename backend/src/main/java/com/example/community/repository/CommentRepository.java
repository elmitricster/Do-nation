package com.example.community.repository;

import com.example.community.domain.Comment;
import com.example.community.domain.Community;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByCommunityOrderByCommentWriteTimeDesc(Community community);


}
