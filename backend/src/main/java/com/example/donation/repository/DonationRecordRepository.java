package com.example.donation.repository;

import com.example.donation.domain.DonationRecord;
import com.example.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface DonationRecordRepository extends JpaRepository<DonationRecord, Long> {
    List<DonationRecord> findAllByDonatorOrderByDonateTimeDesc(User user);
    List<DonationRecord> findAllByCreatorOrderByDonateTimeDesc(User user);

}
