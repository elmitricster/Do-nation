package com.example.api;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@Api("swagger 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/")
public class ExampleController {
    @ApiOperation(value = "값이름", notes = "값에 대한 설명", response = String.class)
    @GetMapping()
    public String index(){
        return "index";
    }
}
