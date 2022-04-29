package com.example.api;

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
    public ResponseEntity<Void> withdraw() {
        long id = 1;
        int point = 0;
        withdrawService.withdraw(id,point);
        return ResponseEntity.ok().build();
    }
    //TODO 후순위
    @PostMapping("/certification")
    public void certifyAccount() {

    }
    @GetMapping("")
    public List<WithdrawRecordResponse> fetchWithdraws(){
        long id = 1;
        return withdrawService.fetchWithdraws(id);

    }

}
