package com.example.api;

import com.example.auth.dto.SessionUser;
import com.example.donation.dto.DonationRecordResponse;
import com.example.donation.service.DonationService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Api("후원 관련 컨트롤러")
@RequiredArgsConstructor
@RestController
@Transactional
@RequestMapping("/donation")
public class DonationController {
    final private DonationService donationService;

    @ApiOperation(value = "후원 금액 유효성 확인", notes = "보유 포인트보다 후원할 포인트 금액이 적은 지 확인합니다. (보유 포인트 > 후원할 포인트)", response = Boolean.class)
    @GetMapping("/certification")
    public boolean checkEnoughPoint(SessionUser sessionUser, int point) {
        return donationService.checkEnoughPoint(sessionUser.getId(), point);
    }

    @ApiOperation(value = "후원 완료시키기", notes = "Modal 창에서 후원 메시지 입력 후 후원을 완료합니다.")
    @PostMapping("")
    public ResponseEntity<Void> donate(SessionUser sessionUser, String nickname, int point, String message) {
        donationService.donate(sessionUser.getId(), nickname, point, message);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/me")
    public List<DonationRecordResponse> fetchDonations(SessionUser user) {
        return donationService.fetchDonations(user.getId());
    }
    @GetMapping("/nickname")
    public List<DonationRecordResponse> fetchReceivedDonations(String nickname) {
        return donationService.fetchReceivedDonations(nickname);
    }

}
