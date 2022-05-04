package com.example.payment.service;

import com.example.payment.dto.KakaoPayApiResponse;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.exception.KakaoPayApiException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
@ExtendWith(MockitoExtension.class)
class KakaoPayServiceTest {
    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private KakaoPayService kakaoPayService;

    private PaymentPointRequest request;
    @BeforeEach
    public void setUp(){
        request=testPaymentPointRequest();
    }

    public PaymentPointRequest testPaymentPointRequest(){
        return new PaymentPointRequest(1,1,"","1","0","0","0");
    }
    @Test
    @DisplayName("request nullTest")
    public void nullRequestTest() {
       assertThrows(KakaoPayApiException.class,()->kakaoPayService.approveKakaoPay(null));
    }
    @Test
    @DisplayName("restTemplate nullTest")
    public void httpClientErrorExceptionTest() {
        when(restTemplate.postForObject(Mockito.any(),Mockito.any(),Mockito.any())).thenThrow(NullPointerException.class);
        assertThrows(KakaoPayApiException.class,()->kakaoPayService.approveKakaoPay(request));
    }

    @Test
    @DisplayName("restTemplate nullTest")
    public void nullRestTemplateTest() {
        when(restTemplate.postForObject(Mockito.any(),Mockito.any(),Mockito.any())).thenThrow(NullPointerException.class);
        assertThrows(KakaoPayApiException.class,()->kakaoPayService.approveKakaoPay(request));
    }

    @Test
    @DisplayName("kakaoResponse Null Test")
    public void nullKakaoResponseTest() {
        KakaoPayApiResponse response = new KakaoPayApiResponse();
        when(restTemplate.postForObject(Mockito.any(),Mockito.any(),Mockito.any())).thenReturn(response);
        assertThrows(KakaoPayApiException.class,()->kakaoPayService.approveKakaoPay(request));
    }
    @Test
    @DisplayName("success Test")
    public void successTest() {
        KakaoPayApiResponse response = new KakaoPayApiResponse(LocalDateTime.now(),"1");
        when(restTemplate.postForObject(Mockito.any(),Mockito.any(),Mockito.any())).thenReturn(response);
        assertEquals(response,kakaoPayService.approveKakaoPay(request));
    }

}