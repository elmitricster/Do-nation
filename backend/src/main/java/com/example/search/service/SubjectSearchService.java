package com.example.search.service;

import com.example.search.repository.SearchRepository;
import com.example.user.dto.CreatorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@RequiredArgsConstructor

public class SubjectSearchService implements SearchService {
    private final SearchRepository searchRepository;

    @Override
    public List<CreatorResponse> fetchSearchList(String keyword) {
        return CreatorResponse.userToList(searchRepository.findAllBySubjectContains(keyword));
    }

    @Override
    public boolean isWork(String mode) {
        return "SUBJECT".equals(mode);
    }
}
