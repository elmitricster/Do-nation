package com.example.donation.dto;

import com.example.donation.domain.DonationRecord;
import com.example.user.domain.User;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class DonationRecordResponse {
    private User donator;

    private LocalDateTime donateTime;

    private int donatePoint;

    private String donateMessage;

    public DonationRecordResponse(User donator, LocalDateTime donateTime, int donatePoint, String donateMessage) {
        this.donator = donator;
        this.donateTime = donateTime;
        this.donatePoint = donatePoint;
        this.donateMessage = donateMessage;
    }
    public DonationRecordResponse(DonationRecord donationRecord){
        this(donationRecord.getDonator(),donationRecord.getDonateTime(),donationRecord.getDonatePoint(),donationRecord.getDonateMessage());
    }

    public static List<DonationRecordResponse> toList(Collection<DonationRecord>donationRecordList){
        return donationRecordList.stream().map(DonationRecordResponse::new).collect(Collectors.toList());
    }
}
