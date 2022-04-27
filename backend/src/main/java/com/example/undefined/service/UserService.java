package com.example.undefined.service;

import com.example.undefined.domain.User;
import com.example.undefined.exception.NotFoundUserException;
import com.example.undefined.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public User findMember(long id){
     return  userRepository.findById(id).orElseThrow(NotFoundUserException::new);
    }
}
