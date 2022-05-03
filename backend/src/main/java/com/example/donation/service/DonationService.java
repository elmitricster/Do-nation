package com.example.donation.service;

import com.example.donation.domain.DonationRecord;
import com.example.donation.repository.DonationRecordRepository;
import com.example.user.domain.User;
import com.example.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Transactional
public class DonationService {
    private final DonationRecordRepository donationRecordRepository;
    private final UserService userService;

    @Transactional(readOnly = true)
    public boolean checkEnoughPoint(long id, int donatePoint) {
        if(donatePoint>userService.checkPoint(id))
            throw new RuntimeException("보유한 포인트가 후원할 포인트보다 적습니다.");

        return true;
    }

    @Transactional
    public void donate(long id, String userNickname, int donatePoint, String donateMessage) {
        User donator = userService.findMember(id);
        User creator = userService.findMember(userNickname);

        checkEnoughPoint(id, donatePoint);

        donationRecordRepository.save(DonationRecord.builder()
                .donator(donator)
                .creator(creator)
                .donateTime(LocalDateTime.now())
                .donatePoint(donatePoint)
                .donateMessage(donateMessage)
                .build());

        donator.decreasePoint(donatePoint);
        creator.increasePoint(donatePoint);
    }

}
