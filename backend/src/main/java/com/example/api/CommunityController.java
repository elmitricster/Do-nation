package com.example.api;


import com.example.auth.dto.SessionUser;
import com.example.community.domain.Comment;
import com.example.community.domain.Community;
import com.example.community.domain.CommunityImage;
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
    @GetMapping("/read/{creatorId}")
    public List<Community> fetchContents(@PathVariable long creatorId) {
        return communityService.fetchContents(creatorId);
    }

    @ApiOperation(value = "게시글 내용 수정")
    @PutMapping("/{communityId}")
    public ResponseEntity<Void> updateContent(SessionUser sessionUser, @PathVariable long communityId, UpdateCommunityRequest request) {
        communityService.updateContent(sessionUser.getId(),communityId, request);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "게시글 삭제")
    @DeleteMapping("/{communityId}")
    public ResponseEntity<Void> deleteContent(SessionUser sessionUser, @PathVariable long communityId) {
        communityService.deleteContent(sessionUser.getId(), communityId);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "커뮤니티 게시글에 댓글 등록")
    @PostMapping("/comment/{communityId}")
    public ResponseEntity<Void> writeComment(SessionUser sessionUser, @PathVariable long communityId,  String comment) {
        communityService.writeComment(sessionUser.getId(), communityId, comment);
        return ResponseEntity.ok().build();
    }
    @ApiOperation(value = "커뮤니티 게시글에 댓글 수정")
    @PutMapping("/comment/{commentId}")
    public ResponseEntity<Void> updateComment(SessionUser sessionUser, @PathVariable long commentId,String comment) {
        communityService.updateComment(sessionUser.getId(),commentId, comment);
        return ResponseEntity.ok().build();
    }
    @ApiOperation(value = "댓글 전체 보기")
    @GetMapping("/comment/read/{commentId}")
    public List<Comment> fetchComments(@PathVariable long commentId) {
        return communityService.fetchComments(commentId);
    }

    @ApiOperation(value = "댓글 삭제")
    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<Void> deleteComment(SessionUser sessionUser,@PathVariable long commentId) {
        communityService.deleteComment(sessionUser.getId(), commentId);
        return ResponseEntity.ok().build();
    }
    @ApiOperation(value = "커뮤니티 이미지 조회")
    @GetMapping("/image/read/{communityId}")
    public List<CommunityImage> fetchCommunityImages(@PathVariable long communityId) {
        return communityService.fetchCommunityImages(communityId);
    }


}
