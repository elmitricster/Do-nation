package com.example.search.util;

import com.example.search.dto.SearchRequest;
import com.example.search.service.NicknameSearchService;
import com.example.search.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
@RequiredArgsConstructor
public class SearchServiceRouter {
    private final List<SearchService> searchServiceList;
    private final NicknameSearchService defaultService;
    public SearchService getSearchService(SearchRequest request){
        String mode = request.getMode().toUpperCase();
        return getSearchService(mode);
    }
    public SearchService getSearchService(String mode){
        final String upperMode = mode.toUpperCase();
        return searchServiceList.stream()
                .filter(x->x.isWork(upperMode))
                .findAny().orElseGet(()->defaultService);
    }

}
