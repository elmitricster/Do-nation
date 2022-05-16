package com.example.community.service;

import com.example.community.domain.Comment;
import com.example.community.domain.Community;
import com.example.community.domain.UploadFile;
import com.example.community.exception.NotFoundContentException;
import com.example.community.repository.CommentRepository;
import com.example.community.repository.CommunityRepository;
import com.example.user.domain.User;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityService {
    private final CommunityRepository communityRepository;
    private final CommentRepository commentRepository;
    private final UserService userService;

    //게시글 등록
    @Transactional
    public void writeContent(long id, String content, List<UploadFile> imageFiles) {
        User creator = userService.findMember(id);

        communityRepository.save(Community.builder()
                .creator(creator)
                .writeTime(LocalDateTime.now())
                .content(content)
                .imageFiles(imageFiles)
                .build());
    }

    //게시물 보기
    @Transactional(readOnly = true)
    public List<Community> fetchContents(long id) {
        List<Community> communityList = communityRepository.findAllByCreatorOrderByWriteTimeDesc(userService.findMember(id)); // 여기 findAll 말고 글쓴 시간순으로 정렬 되도록
        return communityList;
    }

    //게시물 수정
    @Transactional
    public ResponseEntity<Community> updateContent(long id, @PathVariable Long community_id, String content, List<UploadFile> imageFiles) {
        Community community = communityRepository.findById(community_id)
                .orElseThrow(NotFoundContentException::new);
        community.setContent(content);
        community.setWriteTime(LocalDateTime.now());
        community.setImageFiles(imageFiles);

        Community updateContent = communityRepository.save(community);
        return ResponseEntity.ok(updateContent);
    }

    //게시글 삭제
    @Transactional
    public ResponseEntity<Map<String, Boolean>> deleteContent(long id, @PathVariable Long community_id) {
        Community community = communityRepository.findById(community_id)
                .orElseThrow(NotFoundContentException::new);

        communityRepository.delete(community);
        Map <String, Boolean> response = new HashMap<>();
        response.put("삭제완료", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //댓글 등록
    @Transactional
    public void writeComment(long id, @PathVariable Long community_id, String commentor, String comment) {
        Community community = communityRepository.findById(community_id)
                        .orElseThrow(NotFoundContentException::new);

        commentRepository.save(Comment.builder()
                .communityId(community)
                .commentWriteTime(LocalDateTime.now())
                .commentor(commentor)
                .comment(comment)
                .build());
    }

    //댓글 보기
    @Transactional(readOnly = true)
    public List<Comment> fetchComments(long id, Long community_id) {
        List<Comment> commentList = commentRepository.findAllByCommentorOrderByCommentWriteTimeDesc(); // 여기 findAll 말고 댓글쓴 시간순으로 정렬 되도록, 파라미터 어떻게 넣어야될지 모르겠음
        return commentList;
    }

    //댓글 삭제
    @Transactional
    public ResponseEntity<Map<String, Boolean>> deleteComment(long id, @PathVariable Long community_comment_id) {
        Comment comment = commentRepository.findById(community_comment_id)
                .orElseThrow(NotFoundContentException::new);

        commentRepository.delete(comment);
        Map <String, Boolean> response = new HashMap<>();
        response.put("삭제완료", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
