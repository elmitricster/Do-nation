package com.example.follow.repository;

import com.example.follow.domain.Follow;
import com.example.payment.domain.UserTest;
import com.example.user.domain.User;
import com.example.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class FollowRepositoryTest {
    User me;
    User follower;
    @Autowired
    UserRepository userRepository;
    @Autowired
    FollowRepository followRepository;

    @BeforeEach
    public void setUp() throws Exception {
        me = UserTest.testUser("엄");
        follower = UserTest.testUser("식");
        me=userRepository.save(me);
        follower=userRepository.save(follower);
    }
    @Test
    @DisplayName("팔로잉 삭제후 조회 테스트")
    public void removeFollowAndQueryTest(){
        Follow follow=followRepository.save(new Follow(me,follower));
        followRepository.delete(follow);
        assertEquals(0,followRepository.findAll().size());
    }


}