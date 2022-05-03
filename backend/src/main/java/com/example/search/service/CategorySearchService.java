package com.example.search.service;

import com.example.user.dto.CreatorResponse;
import com.example.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class CategorySearchService implements SearchService {
    private final UserRepository userRepository;


    @Override
    public List<CreatorResponse> fetchSearchList(String keyword) {
        return null;
    }
}
