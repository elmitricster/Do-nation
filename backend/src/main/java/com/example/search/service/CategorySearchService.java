package com.example.search.service;

import com.example.search.repository.SearchRepository;
import com.example.user.dto.CreatorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class CategorySearchService implements SearchService {
    private final SearchRepository searchRepository;


    @Override
    public List<CreatorResponse> fetchSearchList(String keyword) {
        return CreatorResponse.userToList(searchRepository.findAllByCategoryContains(keyword));
    }

    @Override
    public boolean isWork(String mode) {
        return "CATEGORY".equals(mode);
    }
}
