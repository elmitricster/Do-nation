package com.example.payment.domain;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import com.example.user.domain.User;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class CreatorsTest {
    User user;
    @BeforeEach
    public void setUp(){
        user = UserTest.testUser();
    }

    @Test
    @DisplayName("increasePoint 메소드 확인")
    public void chargePointTest(){
        assertThrows(RuntimeException.class,()->user.increasePoint(0));
        assertThrows(RuntimeException.class,()->user.increasePoint(Integer.MAX_VALUE));

        user.increasePoint(100);
        assertEquals(user.getPoint(),100);
    }

}