package com.example.api;


import com.example.auth.dto.SessionUser;
import com.example.follow.service.FollowService;
import com.example.user.dto.CreatorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("follow")
public class FollowController {
    private final FollowService followService;
    @PostMapping("")
    public ResponseEntity<Void> followCreators(SessionUser user, String nickname){
        followService.followCreator(user,nickname);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("")
    public ResponseEntity<Void> unfollowCreators(SessionUser user,String nickname){
        followService.unfollowCreator(user,nickname);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/following")
    public List<CreatorResponse> fetchFollowingCreators(SessionUser user){
        return followService.fetchFollowingCreators(user.getId());
    }
}
