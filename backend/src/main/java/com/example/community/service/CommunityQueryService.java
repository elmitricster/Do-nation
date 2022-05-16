package com.example.community.service;

import com.example.community.domain.Community;
import com.example.community.exception.DiffUserException;
import com.example.community.exception.NotFoundContentException;
import com.example.community.repository.CommunityRepository;
import com.example.user.domain.User;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly =true)
public class CommunityQueryService {
    private final UserService userService;
    private final CommunityRepository communityRepository;

    public Community getCommunity(Long userId, Long community_id) {
        User user = userService.findMember(userId);
        Community community = getCommunity(community_id);
        if(!community.getCreator().equals(user))
            throw new DiffUserException();
        return community;
    }

    public Community getCommunity(Long community_id) {
        Community community = communityRepository.findById(community_id)
                .orElseThrow(NotFoundContentException::new);
        return community;
    }
}
