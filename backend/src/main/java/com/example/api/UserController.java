package com.example.api;

import com.example.auth.dto.SessionUser;
import com.example.user.domain.User;
import com.example.user.dto.CreatorResponse;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    @GetMapping("/random")
    public List<CreatorResponse> fetchRandomCreators(){
        return userService.fetchRandomCreators();
    }

    @GetMapping("/nickname")
    public User getUser(String nickname){
        return userService.findMember(nickname);
    }

    @GetMapping("/me")
    public User getUser(SessionUser user){
        return userService.findMember(user.getId());
    }
    @GetMapping("/point")
    public ResponseEntity<Integer> checkPoint(SessionUser sessionUser){
        return ResponseEntity.ok(userService.checkPoint(sessionUser.getId()));
    }

}
