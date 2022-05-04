package com.example.auth.service;


import com.example.auth.dto.*;
import com.example.auth.exception.DuplicateNicknameException;
import com.example.auth.exception.UserNotFoundException;
import com.example.auth.util.JwtUtil;
import com.example.user.domain.User;
import com.example.user.domain.UserUrl;
import com.example.user.repository.UserRepository;
import com.example.user.repository.UserUrlRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {

    private final KakaoOAuth2Service kakaoOAuth2Service;
    private final UserRepository userRepository;
    private final UserUrlRepository userUrlRepository;

    public TokenResponse login(final String code) {
        KakaoUserInfo userInfo = kakaoOAuth2Service.getUserInfo(code);

        // 정보 없을 경우 회원가입
        if (!userRepository.existsByKakaoId(userInfo.getKakao_id())) {
            System.out.println("no user");
            userRepository.save(User.BasicBuilder()
                                    .birthday(userInfo.getBirthday())
                                    .kakaoId(userInfo.getKakao_id())
                                    .nickname(userInfo.getUser_nickname())
                                    .profileImage(userInfo.getProfile_image_url())
                                    .build());
        }

        // 로그인
        User loginUser = userRepository.findByKakaoId(userInfo.getKakao_id());
        return new TokenResponse(JwtUtil.makeJwtTokenByPrimaryKey(loginUser.getId()));
    }

    public void updateUser(SessionUser sessionUser, UpdateUserRequest updateUserRequest) {
        User user = userRepository.findById(sessionUser.getId())
                                  .orElseThrow(UserNotFoundException::new);
        user.setCategory(updateUserRequest.getCategory());
        user.setIntroMessage(updateUserRequest.getIntro_message());
        user.setNickname(updateUserRequest.getUser_nickname());
        user.setProfileImage(updateUserRequest.getProfile_image());
        user.setProfileName(updateUserRequest.getProfile_name());
        user.setSubject(updateUserRequest.getSubject());

        userUrlRepository.deleteAllByUser(user);
        List<UserUrlDto> userUrls = updateUserRequest.getUserUrls();
        for (UserUrlDto url : userUrls) {
            userUrlRepository.save(UserUrl.BasicBuilder()
                                          .user(user)
                                          .userUrl(url.getUser_url())
                                          .colorHash("-")
                                          .urlName(url.getUrl_name())
                                          .build());
        }
    }

    public void validateNickname(String userNickname) {
        if (userRepository.existsByNickname(userNickname)) {
            throw new DuplicateNicknameException();
        }
    }

    public Object createSessionUserByToken(String token) {
        Long id = JwtUtil.findIdFromToken(token);
        return new SessionUser(id);
    }

    public void validateToken(String token) {
        JwtUtil.validateToken(token);
    }
}
