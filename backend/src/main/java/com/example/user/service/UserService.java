package com.example.user.service;

import com.example.user.domain.User;
import com.example.user.dto.CreatorResponse;
import com.example.user.exception.NotFoundUserException;
import com.example.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {
    private final UserRepository userRepository;

    public User findMember(long id){
     return  userRepository.findById(id).orElseThrow(NotFoundUserException::new);
    }
    public User findMember(String nickname){
        return  userRepository.findByNickname(nickname).orElseThrow(NotFoundUserException::new);
    }

    public List<CreatorResponse> fetchRandomCreators() {
        List<User>list =userRepository.findAll();
        Collections.shuffle(list);
        return CreatorResponse.userToList(list);
    }
    public Integer checkPoint(long id) {
        return findMember(id).getPoint();
    }


}
