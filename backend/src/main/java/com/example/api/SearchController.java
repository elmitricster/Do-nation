package com.example.api;

import com.example.search.dto.SearchRequest;
import com.example.search.util.SearchServiceRouter;
import com.example.user.dto.CreatorResponse;
import io.swagger.annotations.ApiOperation;
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
    @ApiOperation(value = "유저검색기능", notes = "nickname|subject|category 중 하나를 선택해서 넣으면됨. 기본값은 nickname")
    public List<CreatorResponse> fetchSearchCreators(SearchRequest request){
        return searchServiceRouter.getSearchService(request).fetchSearchList(request.getSearchKeyword());
    }
}
