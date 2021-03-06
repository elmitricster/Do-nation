package com.example.search.repository;

import com.example.payment.domain.UserTest;
import com.example.user.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class SearchRepositoryTest {
    @Autowired
    SearchRepository searchRepository;
    @Autowired
    SearchRepository userRepository;

    User user;
    @BeforeEach
    void setUp() {
        user= UserTest.testUser();
        user= userRepository.save(user);
    }
    @Test
    void  canTestNickName(){
        assertEquals(searchRepository.findAllByNicknameContains(user.getNickname()).get(0).getNickname(),user.getNickname());
        assertEquals(searchRepository.findAllByNicknameContains(user.getNickname().substring(1)).get(0).getNickname(),user.getNickname());
    }
    @Test
    @DisplayName("0개나오는거.")
    void  zeroTestNickName(){
        String nickname = "없음";
        assertEquals(searchRepository.findAllByNicknameContains("qweqweqweqweqweqweqew").size(),0);
    }


}