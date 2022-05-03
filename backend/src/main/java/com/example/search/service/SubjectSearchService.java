package com.example.search.service;

import com.example.user.dto.CreatorResponse;
import com.example.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
@RequiredArgsConstructor

public class SubjectSearchService implements SearchService {
    private final UserRepository userRepository;

    @Override
    public List<CreatorResponse> fetchSearchList(String keyword) {
        return null;
    }
}
