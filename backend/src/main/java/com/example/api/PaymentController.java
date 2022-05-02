package com.example.api;

import com.example.auth.dto.SessionUser;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.dto.PaymentPointResponse;
import com.example.payment.dto.PaymentRecordResponse;
import com.example.payment.service.PaymentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Slf4j
@Api("결제 관련 컨트롤러")
@RequiredArgsConstructor
@RestController
@RequestMapping("/payment")
public class PaymentController {
    private final PaymentService paymentService;


    @ApiOperation(value = "현재 유저의 값", notes = "현재 유저의 값", response = PaymentPointResponse.class)
    @PostMapping()
    public PaymentPointResponse paymentPoint(PaymentPointRequest request, SessionUser sessionUser) {
        return  paymentService.paymentPoint(sessionUser.getId(),request);
    }



    @ApiOperation(value ="jwt",notes = "jwt 토큰", response = String.class)
    @GetMapping()
    public List<PaymentRecordResponse> fetchPayments(SessionUser sessionUser){
        return paymentService.fetchPayments(sessionUser.getId());
    }

}
