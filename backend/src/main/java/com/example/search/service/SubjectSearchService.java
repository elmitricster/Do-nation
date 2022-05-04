package com.example.search.service;

import com.example.search.repository.SearchRepository;
import com.example.user.dto.CreatorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
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
