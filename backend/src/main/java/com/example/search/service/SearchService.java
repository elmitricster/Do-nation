package com.example.search.service;

import com.example.user.dto.CreatorResponse;

import java.util.List;

public interface SearchService {
    public List<CreatorResponse>fetchSearchList(String keyword);
}
