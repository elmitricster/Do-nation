package com.example.community.service;

import com.example.community.domain.Comment;
import com.example.community.domain.Community;
import com.example.community.exception.DiffUserException;
import com.example.community.exception.NotFoundContentException;
import com.example.community.repository.CommentRepository;
import com.example.user.domain.User;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CommentQueryService {
    private final CommunityQueryService communityQueryService;
    private final CommentRepository commentRepository;
    private final UserService userService;


    @Transactional(readOnly = true)
    public List<Comment> fetchComments(Long community_id) {
        Community community = communityQueryService.getCommunity(community_id);
        List<Comment> commentList = commentRepository.findAllByCommunityOrderByCommentWriteTimeDesc(community); // 여기 findAll 말고 댓글쓴 시간순으로 정렬 되도록, 파라미터 어떻게 넣어야될지 모르겠음
        return commentList;
    }

    Comment getComment(Long community_comment_id, long id) {
        Comment comment = commentRepository.findById(community_comment_id)
                .orElseThrow(NotFoundContentException::new);
        User user = userService.findMember(id);
        if (!comment.getComment().equals(user))
            throw new DiffUserException();
        return comment;
    }
}