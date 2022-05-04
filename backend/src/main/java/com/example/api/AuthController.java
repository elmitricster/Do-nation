package com.example.api;

import com.example.auth.dto.SessionUser;
import com.example.auth.dto.TokenResponse;
import com.example.auth.dto.UpdateUserRequest;
import com.example.auth.exception.InvalidUpdateUserException;
import com.example.auth.service.AuthService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@Api("인증 관련 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @ApiOperation(value = "로그인", notes = "카카오 token을 사용하여 로그인을 시도합니다. 처음 로그인할 경우 회원가입이 자동으로 진행됩니다.", response = TokenResponse.class)
    @GetMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestParam(value = "code", required = false) String code) {
        TokenResponse response = authService.login(code);
        return ResponseEntity.ok(
                response
        );
    }

//    @ApiOperation(value = "값이름", notes = "값에 대한 설명", response = String.class)
//    @GetMapping("/")
//    public String registerUser() {
//        return "index";
//    }

    @ApiOperation(value = "유저 정보 업데이트", notes = "DB의 category, intro_message, user_nickname, profile_image, profile_name, subject, User_url - List{user_url, url_name} 을 업데이트 합니다.")
    @PutMapping("")
    public ResponseEntity<Void> updateUser(SessionUser sessionUser, @Valid @RequestBody UpdateUserRequest updateUserRequest, BindingResult result) {
        if(result.hasErrors()){
            throw new InvalidUpdateUserException();
        }

        authService.updateUser(sessionUser, updateUserRequest);
        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "유저 닉네임 중복 확인", notes = "닉네임 중복 여부를 체크합니다.")
    @GetMapping("/duplicate/{userNickname}")
    public ResponseEntity<Void> duplicateNickname(@PathVariable String userNickname) {
        authService.validateNickname(userNickname);
        return ResponseEntity.ok().build();
    }

}
