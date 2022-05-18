package com.example.community.repository;

import com.example.community.domain.Comment;
import com.example.community.domain.Community;
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
class CommunityRepositoryTest {

    User user ;
    Community community;
    Comment comment;

    @Autowired
    CommunityRepository communityRepository;
    @Autowired
    UserRepository userRepository;

    @Autowired
    CommentRepository commentRepository;

    @BeforeEach
    void setUp() {
     user = UserTest.testUser();
     user=userRepository.save(user);
     community=communityRepository.save(testCommunity(user,"엄"));
     comment=commentRepository.save(Comment.builder().community(community).commentor(user).content("준").commentWriteTime(LocalDateTime.now()).build());
    }
    @Test
    @DisplayName("삭제시 관련댓글 삭제")
    public void removeCommunity(){
        commentRepository.deleteAll(commentRepository.findAllByCommunityOrderByCommentWriteTimeDesc(community));
        communityRepository.delete(community);
        assertEquals(0,commentRepository.findAll().size());
    }
    @Test
    @DisplayName("커뮤니티 조회")
    public void fetchCommunity() {
        assertEquals(1,communityRepository.findAllByCreatorOrderByWriteTimeDesc(user).size());
    }


    public static Community testCommunity(User creator,String content){
        return Community.builder().creator(creator).content(content).writeTime(LocalDateTime.now()).build();
    }
}