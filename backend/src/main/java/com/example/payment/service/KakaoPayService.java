package com.example.payment.service;

import com.example.payment.dto.KakaoPayApiResponse;
import com.example.payment.dto.PaymentPointRequest;
import com.example.payment.exception.KakaoPayApiException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class KakaoPayService {

    private static final String HOST = "https://kapi.kakao.com";
    private final RestTemplate restTemplate;
    public KakaoPayApiResponse approveKakaoPay(PaymentPointRequest request) {

        log.info("KakaoPayInfoVO............................................");
        log.info("-----------------------------");


        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "admin key를 넣어주세요~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!");
        headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
        try{
        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("cid", request.getCid());
        params.add("tid", request.getTid());
        params.add("partner_order_id", request.getPartnerOrderId());
        params.add("partner_user_id", request.getPartnerUserId());
        params.add("pg_token", request.getPgToken());


            HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<>(params, headers);
            log.info("Kakaobody: {}",body);


            KakaoPayApiResponse response = restTemplate.postForObject(new URI(HOST + "/v1/payment/approve"), body, KakaoPayApiResponse.class);
            log.info("" + response);
            if(response.isEmptyTid()||response.getTid()!=request.getTid())
                throw new KakaoPayApiException();

            return response;
        }catch(NullPointerException | URISyntaxException | HttpClientErrorException e){
            throw new KakaoPayApiException();
        }

    }

}