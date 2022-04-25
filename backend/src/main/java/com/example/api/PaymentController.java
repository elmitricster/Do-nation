package com.example.api;

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
    final private PaymentService paymentService;

    //TODO 두 메소드를 인자값 LoginMember loginmember으로 바꾸게 해주세요.

    @ApiOperation(value = "현재 유저의 값", notes = "현재 유저의 값", response = PaymentPointResponse.class)
    @PostMapping()
    public PaymentPointResponse paymentPoint(PaymentPointRequest request) {
        long id = 1;
        return  paymentService.paymentPoint(id,request);
    }



    @ApiOperation(value ="jwt",notes = "jwt 토큰", response = String.class)
    @GetMapping()
    public List<PaymentRecordResponse> fetchPayments(){
        long id = 1;
        return paymentService.fetchPayments(id);
    }

}
