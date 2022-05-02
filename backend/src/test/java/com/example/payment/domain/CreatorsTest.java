package com.example.payment.domain;

import com.example.payment.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CreatorsTest {
    User user;
    @BeforeEach
    public void setUp(){
        user = User.builder().nickname("um").point(0).build();
    }
    @Test
    @DisplayName("생성자 확인")
    public void constructorTest(){
        assertThrows(RuntimeException.class,()->user.builder().nickname("qwe").point(-1).build());
    }

    @Test
    @DisplayName("멱등성 확인")
    public void userTest(){
        User user = User.builder().nickname("um").build();
        assertEquals(this.user,user);
    }

    @Test
    @DisplayName("chargePoint 메소드 확인")
    public void chargePointTest(){
        assertThrows(RuntimeException.class,()->user.chargePoint(0));
        assertThrows(RuntimeException.class,()->user.chargePoint(Integer.MAX_VALUE));

        user.chargePoint(100);
        assertEquals(user.getPoint(),100);
    }

}