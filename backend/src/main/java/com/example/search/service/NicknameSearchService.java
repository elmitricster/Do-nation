package com.example.search.service;

import com.example.search.repository.SearchRepository;
import com.example.user.dto.CreatorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;

import java.util.List;

@RequiredArgsConstructor
@Primary
public class NicknameSearchService implements SearchService {
    private final SearchRepository searchRepository;


    @Override
    public List<CreatorResponse> fetchSearchList(String keyword) {
        return CreatorResponse.userToList(searchRepository.findAllByNicknameContains(keyword));
    }

    @Override
    public boolean isWork(String mode) {
        return "NICKNAME".equals(mode);
    }
}
