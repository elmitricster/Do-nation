package com.example.payment.repository;

import com.example.payment.domain.PaymentRecord;
import com.example.payment.domain.UserTest;
import com.example.user.domain.User;
import com.example.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class PaymentRecordRepositoryTest {
    @Autowired
    PaymentRecordRepository paymentRecordRepository;
    @Autowired
    UserRepository userRepository;


    User user;

    @BeforeEach
    public void setUp(){
       user = UserTest.testUser();
       user =userRepository.save(user);
    }








    @Test
    @DisplayName("비어 있는 paymentRecord 조회")
    public void emptyPaymentRecord(){
        assertEquals(paymentRecordRepository.findAllByUserOrderByPaymentTimeDesc(user).size(), 0);
    }
    @Test
    @DisplayName("하나 있는 paymentRecord 조회")
    public void notEmptyPaymentRecord(){
        paymentRecordRepository.save(new PaymentRecord("엄",user,LocalDateTime.now(),1100,1000));
        assertEquals(paymentRecordRepository.findAllByUserOrderByPaymentTimeDesc(user).size(), 1);

    }
    @Test
    @DisplayName("내림차순 적용된 paymentRecord 조회")
    public void twoPaymentRecord(){
        LocalDateTime dummy=LocalDateTime.now().minusDays(1);
        LocalDateTime wanted=LocalDateTime.now();
        paymentRecordRepository.save(new PaymentRecord( "엄",user,dummy,1100,1000));
        paymentRecordRepository.save(new PaymentRecord( "엄",user,wanted,1100,1000));
        assertEquals(paymentRecordRepository.findAllByUserOrderByPaymentTimeDesc(user).get(0).getPaymentTime(), wanted);
        assertEquals(paymentRecordRepository.findAllByUserOrderByPaymentTimeDesc(user).size(), 2);

    }



}