package com.example.withdraw.repository;

import com.example.payment.domain.UserTest;
import com.example.user.domain.User;
import com.example.user.repository.UserRepository;
import com.example.withdraw.domain.WithdrawRecord;
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

class WithdrawRepositoryTest {
    @Autowired
    WithdrawRepository withdrawRepository;
    @Autowired
    UserRepository userRepository;

    User user;
    @BeforeEach
    public void setUp(){
        user = UserTest.testUser();
        user=userRepository.save(user);
    }

    @Test
    @DisplayName("비어 있는 withdrawRecord 조회")
    public void emptyPaymentRecord(){
        assertEquals(withdrawRepository.findByUserOrderByWithdrawTimeDesc(user).size(), 0);
    }
    @Test
    @DisplayName("하나 있는 withdrawRecord 조회")
    public void notEmptyPaymentRecord(){
        withdrawRepository.save(testWithdrawRecord(0,1100,1000,LocalDateTime.now()));
        assertEquals(withdrawRepository.findByUserOrderByWithdrawTimeDesc(user).size(), 1);
    }
    @Test
    @DisplayName("내림차순 적용된 withdrawRecord 조회")
    public void twoPaymentRecord(){
        LocalDateTime dummy=LocalDateTime.now().minusDays(1);
        LocalDateTime wanted=LocalDateTime.now();
        withdrawRepository.save(testWithdrawRecord( 0,1100,1000,dummy));
        withdrawRepository.save(testWithdrawRecord( 1,1100,1000,wanted));
        assertEquals(withdrawRepository.findByUserOrderByWithdrawTimeDesc(user).get(0).getWithdrawTime(), wanted);
        assertEquals(withdrawRepository.findByUserOrderByWithdrawTimeDesc(user).size(), 2);

    }

    public WithdrawRecord testWithdrawRecord(long id,int money, int point, LocalDateTime now) {
        return new WithdrawRecord(id,money, point, now,user);
    }


}