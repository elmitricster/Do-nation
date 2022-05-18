package com.example.community.repository;

import com.example.community.domain.Community;
import com.example.community.domain.CommunityImage;
import com.example.community.domain.UploadFile;
import com.example.community.util.CommunityImageMaker;
import com.example.payment.domain.UserTest;
import com.example.user.domain.User;
import com.example.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)

class CommunityImageRepositoryTest {
    User user ;
    Community community;
    CommunityImage image;

    @Autowired
    CommunityRepository communityRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CommunityImageRepository communityImageRepository;


    @BeforeEach
    void setUp() {
        user = UserTest.testUser();
        user=userRepository.save(user);
        community=communityRepository.save(CommunityRepositoryTest.testCommunity(user,"엄"));
    }
    @Test
    @DisplayName("조회 해보기")
    void fetchImagesTest(){
        List<UploadFile> list = Arrays.asList(new UploadFile("엄","준"));
        List<CommunityImage> communityImages = communityImageRepository.saveAll(CommunityImageMaker.ofList(list, community));

        assertEquals(1,communityImageRepository.findAllByCommunity(community).size());
        assertEquals(communityImages.get(0),communityImageRepository.findAllByCommunity(community).get(0));

    }

}