package com.example.donation.repository;

import com.example.undefined.domain.User;
import com.example.donation.domain.DonationRecord;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DonationRecordRepository extends JpaRepository<DonationRecord, Long> {
}
