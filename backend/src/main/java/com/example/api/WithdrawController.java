package com.example.api;

import com.example.auth.dto.SessionUser;
import com.example.withdraw.dto.WithdrawRecordResponse;
import com.example.withdraw.service.WithdrawService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api("계좌 인증 관련 컨트롤러")
@RestController
@RequiredArgsConstructor
@Slf4j
@Transactional
@RequestMapping("/withdraw")
public class WithdrawController {
    private final WithdrawService withdrawService;

    @ApiOperation(value = "출금하기", notes = "계좌 인증을 끝마친 계정은 본인의 계좌로 (point) 만큼 출금을 받을 수 있습니다.")
    @PostMapping("")
    public ResponseEntity<Void> withdraw(SessionUser sessionUser,int point){
        withdrawService.withdraw(sessionUser.getId(),point);
        return ResponseEntity.ok().build();
    }
    //TODO 후순위
    //@ApiOperation(value = "계좌 인증하기", notes = "계좌 인증을 받는 기능을 제공합니다.")
//    @PostMapping("/certification")
//    public void certifyAccount() {
//
//    }

    @ApiOperation(value = "정산 내역 조회", notes = "사용자는 지금까지 정산을 받은 내역들을 조회할 수 있습니다.", response = List.class)
    @GetMapping("")
    public List<WithdrawRecordResponse> fetchWithdraws(SessionUser sessionUser){
        return withdrawService.fetchWithdraws(sessionUser.getId());
    }

}
