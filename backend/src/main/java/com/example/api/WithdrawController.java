package com.example.api;

import com.example.auth.dto.SessionUser;
import com.example.withdraw.dto.WithdrawRecordResponse;
import com.example.withdraw.service.WithdrawService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@Transactional
@RequestMapping("/withdraw")
public class WithdrawController {
    private final WithdrawService withdrawService;
    @PostMapping("")
    public ResponseEntity<Void> withdraw(SessionUser sessionUser,int point){
        withdrawService.withdraw(sessionUser.getId(),point);
        return ResponseEntity.ok().build();
    }
    //TODO 후순위
//    @PostMapping("/certification")
//    public void certifyAccount() {
//
//    }

    @GetMapping("")
    public List<WithdrawRecordResponse> fetchWithdraws(SessionUser sessionUser){
        return withdrawService.fetchWithdraws(sessionUser.getId());
    }

}
