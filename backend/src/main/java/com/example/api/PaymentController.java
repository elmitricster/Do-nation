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


    @ApiOperation(value = "포인트 충전", notes = "카카오페이 결제를 통해 포인트를 충전할 수 있습니다. 성공할 시 포인트가 충전됩니다.", response = PaymentPointResponse.class)
    @PostMapping()
    public PaymentPointResponse paymentPoint(PaymentPointRequest request, SessionUser sessionUser) {
        return  paymentService.paymentPoint(sessionUser.getId(),request);
    }



    @ApiOperation(value ="충전 내역 확인",notes = "충전한 내역들을 조회할 수 있습니다.", response = List.class)
    @GetMapping()
    public List<PaymentRecordResponse> fetchPayments(SessionUser sessionUser){
        return paymentService.fetchPayments(sessionUser.getId());
    }

}
