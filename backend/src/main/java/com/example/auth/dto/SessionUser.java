package com.example.auth.dto;

import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {

    private Long id;

    public SessionUser(Long id){
        this.id = id;
    }
}
