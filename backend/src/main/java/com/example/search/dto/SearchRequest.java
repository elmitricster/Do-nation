package com.example.search.dto;

import lombok.Getter;

@Getter
public class SearchRequest {
    String searchKeyword;
    String mode;

    public SearchRequest(String searchKeyword, String mode) {
        this.searchKeyword = searchKeyword;
        this.mode = mode;
    }
}
