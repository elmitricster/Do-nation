package com.example.community.service;

import com.example.community.domain.Comment;
import com.example.community.domain.Community;
import com.example.community.domain.CommunityImage;
import com.example.community.dto.CommunityImageResponse;
import com.example.community.dto.UpdateCommunityRequest;
import com.example.community.dto.WriteCommunityRequest;
import com.example.community.repository.CommentRepository;
import com.example.community.repository.CommunityImageRepository;
import com.example.community.repository.CommunityRepository;
import com.example.community.util.CommunityImageMaker;
import com.example.user.domain.User;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    private final CommunityImageQueryService communityImageQueryService;
    private final CommentRepository commentRepository;
    private final CommunityRepository communityRepository;
    private final CommunityImageRepository communityImageRepository;


    //게시글 등록
    @Transactional
    public void writeContent(Long id, WriteCommunityRequest request) {
        User creator = userService.findMember(id);
        Community community=communityRepository.save(Community.builder()
                .creator(creator)
                .writeTime(LocalDateTime.now())
                .content(request.getContent())
                .build());
        communityImageRepository.saveAll(CommunityImageMaker.ofList(fileStore.storeFiles(request.getImages()), community));
    }

    //게시물 보기
    @Transactional(readOnly = true)
    public List<Community> fetchContents(long id) {
        // 여기 findAll 말고 글쓴 시간순으로 정렬 되도록
        return communityQueryService.fetchContents(id);
    }


    //게시물 수정
    @Transactional
    public void updateContent(Long userId, Long community_id, UpdateCommunityRequest request) {
        Community community = communityQueryService.getCommunity(userId, community_id);
        communityImageRepository.deleteAll(communityImageRepository.findAllByCommunity(community));
        communityImageRepository.saveAll(CommunityImageMaker.ofList(fileStore.storeFiles(request.getImages()), community));

        community.updateContent(request.getContent(),LocalDateTime.now());
    }



    //게시글 삭제
    @Transactional
    public void deleteContent(Long userId, long community_id) {
        Community community = communityQueryService.getCommunity(userId, community_id);
        communityImageRepository.deleteAll(communityImageRepository.findAllByCommunity(community));
        commentRepository.deleteAll(commentQueryService.fetchComments(community_id));
        communityRepository.delete(community);

    }

    //댓글 등록
    @Transactional
    public void writeComment(long id,  Long community_id, String comment) {
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
    public void deleteComment(long id, long commentId) {
        Comment comment = commentQueryService.getComment(commentId, id);
        commentRepository.delete(comment);

    }
    //댓글 보기
    @Transactional(readOnly = true)
    public List<Comment> fetchComments(Long communityId) {
        return commentQueryService.fetchComments(communityId);
    }

    public void updateComment(long userId, Long commentId,String newComment) {
        Comment comment = commentQueryService.getComment(commentId, userId);
        comment.updateComment(newComment,LocalDateTime.now());
    }
    @Transactional(readOnly = true)
    public List<CommunityImageResponse> fetchCommunityImages(Long community_id) {
        List<CommunityImage> communityImages = communityImageQueryService.getCommunityImages(communityQueryService.getCommunity(community_id));
        return CommunityImageResponse.ofList(communityImages);
    }

}
