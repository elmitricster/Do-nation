package com.example.auth.service;

import com.example.auth.dto.KakaoUserInfo;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

// from https://llshl.tistory.com/25?category=942328

@Component
public class KakaoOAuth2Service {

    //public String getCode(String authorized)
    private static final String CLIENT_ID = "15c42d10e537f8f950496465e2edc8c0";
    private static final String CLIENT_SECRET = "513408R76Akp4SE3TuqsroTBZ2nPcME9";
    private static final String REDIRECT_URI = "http://localhost:8080/auth/login";
    private static final String REDIRECT_TOKEN_URI = "https://kauth.kakao.com/oauth/token";
    private static final String MY_INFO_URI = "https://kapi.kakao.com/v2/user/me";

    public KakaoUserInfo getUserInfo(String authorizedCode) {
        System.out.println("getUserInfo 호출"); // 인가코드 -> 액세스 토큰
        String accessToken = getAccessToken(authorizedCode); // 액세스 토큰 -> 카카오 사용자 정보
        KakaoUserInfo userInfo = getUserInfoByToken(accessToken);
        return userInfo;
    }

    private String getAccessToken(String authorizedCode) {
        System.out.println("getAccessToken 호출");

        // HttpHeader 오브젝트 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HttpBody 오브젝트 생성
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", CLIENT_ID);
        params.add("client_secret", CLIENT_SECRET);
        //params.add("redirect_uri", REDIRECT_URI);
        params.add("code", authorizedCode);

        // HttpHeader와 HttpBody를 하나의 오브젝트에 담기
        RestTemplate rt = new RestTemplate();
        rt.setRequestFactory(new HttpComponentsClientHttpRequestFactory());
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(params, headers);

        // Http 요청하기, Post방식으로, 그리고 response 변수의 응답 받음
        ResponseEntity<String> response = rt.exchange(REDIRECT_TOKEN_URI, HttpMethod.POST, kakaoTokenRequest, String.class); // JSON -> 액세스 토큰 파싱
        String tokenJson = response.getBody();
        JSONObject rjson = new JSONObject(tokenJson);
        String accessToken = rjson.getString("access_token");

        //우리가 필요한건 accessToken
        return accessToken;
    }

    //토큰을 통해 사용자 정보 가져오기
    private KakaoUserInfo getUserInfoByToken(String accessToken) {

        // HttpHeader 오브젝트 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HttpHeader와 HttpBody를 하나의 오브젝트에 담기
        RestTemplate rt = new RestTemplate();
        HttpEntity<MultiValueMap<String, String>> kakaoProfileRequest = new HttpEntity<>(headers);

        // Http 요청하기 - Post방식으로 - 그리고 response 변수의 응답 받음.
        ResponseEntity<String> response = rt.exchange(MY_INFO_URI, HttpMethod.POST, kakaoProfileRequest, String.class);
        JSONObject body = new JSONObject(response.getBody());
        //System.out.println(body.toString());
        String kakao_id = Long.toString(body.getLong("id"));
        String profile_image_url = body.getJSONObject("kakao_account").getJSONObject("profile").getString("profile_image_url");
        String nickname = body.getJSONObject("properties").getString("nickname");
        String birthday = body.getJSONObject("kakao_account").getString("birthday");

        //가져온 사용자 정보를 객체로 만들어서 반환
        return new KakaoUserInfo(kakao_id, profile_image_url, nickname, birthday);
    }

}
