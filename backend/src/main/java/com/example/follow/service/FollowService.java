package com.example.follow.service;

import com.example.auth.dto.SessionUser;
import com.example.follow.domain.Follow;
import com.example.follow.exception.AlreadyFollowException;
import com.example.follow.exception.AlreadyRemoveFollowException;
import com.example.follow.repository.FollowRepository;
import com.example.user.domain.User;
import com.example.user.dto.CreatorResponse;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class FollowService {
    private final UserService userService;
    private final FollowRepository followRepository;

    public void followCreator(SessionUser user, String nickname) {
        User me =userService.findMember(user.getId());
        User follower =userService.findMember(nickname);
        if(followRepository.existsByUserAndCreator(me,follower))
            throw new AlreadyFollowException();

        followRepository.save(new Follow(me,follower));
    }

    public void unfollowCreator(SessionUser user, String nickname) {
        User me =userService.findMember(user.getId());
        User follower = userService.findMember(nickname);
        if(followRepository.existsByUserAndCreator(me,follower))
            throw new AlreadyRemoveFollowException();

        followRepository.delete(new Follow(me,follower));
    }
    @Transactional(readOnly = true)
    public List<CreatorResponse> fetchFollowingCreators(Long id) {
        return CreatorResponse.followToList(followRepository.findAllByUser(userService.findMember(id)));
    }

}

