package com.example.community.service;

import com.example.community.domain.Comment;
import com.example.community.domain.Community;
import com.example.community.dto.UpdateCommunityRequest;
import com.example.community.dto.WriteCommunityRequest;
import com.example.community.repository.CommentRepository;
import com.example.community.repository.CommunityRepository;
import com.example.user.domain.User;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityService {
    private final FileStore fileStore;
    private final CommunityQueryService communityQueryService;
    private final CommentQueryService commentQueryService;
    private final UserService userService;
    private final CommentRepository commentRepository;
    private final CommunityRepository communityRepository;

    //게시글 등록
    @Transactional
    public void writeContent(Long id, WriteCommunityRequest request) {
        User creator = userService.findMember(id);

        communityRepository.save(Community.builder()
                .creator(creator)
                .writeTime(LocalDateTime.now())
                .content(request.getContent())
                .imageFiles(fileStore.storeFiles(request.getImages()))
                .build());
    }

    //게시물 보기
    @Transactional(readOnly = true)
    public List<Community> fetchContents(long id) {
        // 여기 findAll 말고 글쓴 시간순으로 정렬 되도록
        return communityRepository.findAllByCreatorOrderByWriteTimeDesc(userService.findMember(id));
    }


    //게시물 수정
    @Transactional
    public void updateContent(Long userId, Long community_id, UpdateCommunityRequest request) {
        Community community = communityQueryService.getCommunity(userId, community_id);

        community.updateContent(request.getContent(),LocalDateTime.now(),fileStore.storeFiles(request.getImages()));
    }



    //게시글 삭제
    @Transactional
    public void deleteContent(Long userId, long community_id) {
        Community community = communityQueryService.getCommunity(userId, community_id);

        communityRepository.delete(community);
    }

    //댓글 등록
    @Transactional
    public void writeComment(long id, @PathVariable Long community_id, String comment) {
        Community community = communityQueryService.getCommunity(community_id);
        User commentor = userService.findMember(id);

        commentRepository.save(Comment.builder()
                .community(community)
                .commentWriteTime(LocalDateTime.now())
                .commentor(commentor)
                .content(comment)
                .build());
    }


    //댓글 삭제
    @Transactional
    public void deleteComment(long id, @PathVariable Long community_comment_id) {
        Comment comment = commentQueryService.getComment(community_comment_id, id);
        commentRepository.delete(comment);

    }
    //댓글 보기
    @Transactional(readOnly = true)
    public List<Comment> fetchComments(Long community_id) {
        return commentQueryService.fetchComments(community_id);
    }

    public void updateComment(long id, Long community_comment_id,String newComment) {
        Comment comment = commentQueryService.getComment(community_comment_id, id);
        comment.updateComment(newComment,LocalDateTime.now());
    }
}
