package com.example.donation.domain;

import com.example.undefined.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Donation_record")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class DonationRecord {
    @Id
    @Column(name = "donation_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "donator_id")
    private User donator;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    private User creator;

    @Column(name = "donate_time", nullable = false)
    private LocalDateTime donateTime;

    @Column(name = "donate_point", nullable = false)
    private int donatePoint;

    @Column(name = "donate_message")
    private String donateMessage;


    @Builder
    public DonationRecord(User donator, User creator, LocalDateTime donateTime, int donatePoint, String donateMessage) {
        this.donator = donator;
        this.creator = creator;
        this.donateTime = donateTime;
        this.donatePoint = donatePoint;
        this.donateMessage = donateMessage;
    }

}
