package com.example.api;

import com.example.search.dto.SearchRequest;
import com.example.search.util.SearchServiceRouter;
import com.example.user.dto.CreatorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/search")
@RequiredArgsConstructor
public class SearchController {
    private final SearchServiceRouter searchServiceRouter;

    @GetMapping("")
    public List<CreatorResponse> fetchSearchCreators(SearchRequest request){
        return searchServiceRouter.getSearchService(request).fetchSearchList(request.getSearchKeyword());
    }
}
