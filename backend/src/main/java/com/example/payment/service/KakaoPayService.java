package com.example.payment.service;

import com.example.payment.dto.KakaoPayApiResponse;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.dto.PaymentRecordResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

@Service
@Slf4j
public class KakaoPayService {

    private static final String HOST = "https://kapi.kakao.com";


    public KakaoPayApiResponse approveKakaoPay(PaymentPointRequest request) {

        log.info("KakaoPayInfoVO............................................");
        log.info("-----------------------------");

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "admin key를 넣어주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!");
        headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", request.getCid());
        params.add("tid", request.getTid());
        params.add("partner_order_id", request.getPartner_order_id());
        params.add("partner_user_id", request.getPartner_user_id());
        params.add("pg_token", request.getPg_token());

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);

        try{
            KakaoPayApiResponse response = restTemplate.postForObject(new URI(HOST + "/v1/payment/approve"), body, KakaoPayApiResponse.class);
            log.info("" + response);
            if(response.getTid()!=request.getTid())
                throw new RuntimeException("결제 api 실패");

            return response;
        }finally {
            throw new RuntimeException("결제 api 실패");
        }

    }

}