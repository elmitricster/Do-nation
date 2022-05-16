package com.example.payment.domain;

import com.example.user.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class UserTest {
    User user;
    @BeforeEach
    public void setUp(){
        user = testUser();
    }


    @Test
    @DisplayName("chargePoint 메소드 확인")
    public void chargePointTest(){
        assertThrows(RuntimeException.class,()->user.increasePoint(0));
        assertThrows(RuntimeException.class,()->user.increasePoint(Integer.MAX_VALUE));

        user.increasePoint(100);
        assertEquals(user.getPoint(),100);
    }

    @Test
    @DisplayName("withdrawPoint 메소드 확인")
    public void withdrawPointTest(){
        assertThrows(RuntimeException.class,()->user.decreasePoint(0));
        assertThrows(RuntimeException.class,()->user.increasePoint(Integer.MAX_VALUE));

        user.increasePoint(1000);
        user.decreasePoint(500);
        assertEquals(user.getPoint(),500);
        user.decreasePoint(500);
        assertEquals(user.getPoint(),0);
    }
    public static User testUser(){
        String basicStr ="1";
        return  User.BasicBuilder()
                .kakaoId(basicStr)
                .birthday(basicStr)
                .profileImage(basicStr)
                .nickname(basicStr)
                .build();
    }
    public static User testUser(String name){
        String basicStr ="1";
        return  User.BasicBuilder()
                .kakaoId(basicStr)
                .birthday(basicStr)
                .profileImage(basicStr)
                .nickname(name)
                .build();
    }

}