package com.example.api;


import com.example.auth.dto.SessionUser;
import com.example.community.domain.Comment;
import com.example.community.domain.Community;
import com.example.community.dto.UpdateCommunityRequest;
import com.example.community.dto.WriteCommunityRequest;
import com.example.community.service.CommunityService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api("커뮤니티 게시판 관련 컨트롤러")
@RequiredArgsConstructor
@RestController
@Transactional
@RequestMapping("/community")
public class CommunityController {
    final private CommunityService communityService;

    @ApiOperation(value = "커뮤니티에 게시글 등록")
    @PostMapping("")
    public ResponseEntity<Void> writeContent(SessionUser sessionUser, WriteCommunityRequest request) {
        communityService.writeContent(sessionUser.getId(), request);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "게시글 전체 보기")
    @GetMapping("")
    public List<Community> fetchContents(SessionUser sessionUser) {
        return communityService.fetchContents(sessionUser.getId());
    }

    @ApiOperation(value = "게시글 내용 수정")
    @PutMapping("")
    public ResponseEntity<Void> updateContent(SessionUser sessionUser, @PathVariable Long community_id, UpdateCommunityRequest request) {
        communityService.updateContent(sessionUser.getId(),community_id, request);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "게시글 삭제")
    @DeleteMapping("")
    public ResponseEntity<Void> deleteContent(SessionUser sessionUser, @PathVariable Long community_id) {
        communityService.deleteContent(sessionUser.getId(), community_id);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "커뮤니티 게시글에 댓글 등록")
    @PostMapping("/comment")
    public ResponseEntity<Void> writeComment(SessionUser sessionUser, @PathVariable Long community_id,  String comment) {
        communityService.writeComment(sessionUser.getId(), community_id, comment);
        return ResponseEntity.ok().build();
    }
    @ApiOperation(value = "커뮤니티 게시글에 댓글 수정")
    @PutMapping("/comment")
    public ResponseEntity<Void> updateComment(SessionUser sessionUser, @PathVariable Long community_id,  String comment) {
        communityService.updateComment(sessionUser.getId(), community_id, comment);
        return ResponseEntity.ok().build();
    }
    @ApiOperation(value = "댓글 전체 보기")
    @GetMapping("/comment")
    public List<Comment> fetchComments(@PathVariable Long community_id) {
        return communityService.fetchComments(community_id);
    }

    @ApiOperation(value = "댓글 삭제")
    @DeleteMapping("/comment")
    public ResponseEntity<Void> deleteComment(SessionUser sessionUser, @PathVariable Long community_comment_id) {
        communityService.deleteComment(sessionUser.getId(), community_comment_id);
        return ResponseEntity.ok().build();
    }

}
