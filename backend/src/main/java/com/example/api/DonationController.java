package com.example.api;

import com.example.auth.dto.SessionUser;
import com.example.donation.service.DonationService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Api("후원 관련 컨트롤러")
@RequiredArgsConstructor
@RestController
@Transactional
@RequestMapping("/donation")
public class DonationController {
    final private DonationService donationService;

    @GetMapping("/certification")
    public boolean checkEnoughPoint(SessionUser sessionUser, int point) {
        return donationService.checkEnoughPoint(sessionUser.getId(), point);
    }

    @PostMapping("")
    public ResponseEntity<Void> donate(SessionUser sessionUser, String nickname, int point, String message) {
        donationService.donate(sessionUser.getId(), nickname, point, message);
        return ResponseEntity.ok().build();
    }
}
