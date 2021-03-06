import React from 'react';
import * as S from './Styled';

export default function LoginImage() {
  const REST_API_KEY = '15c42d10e537f8f950496465e2edc8c0';
  const REDIRECT_URI = 'http://k6c101.p.ssafy.io/oauth/callback/kakao';
  // const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <S.kakaoLogin
          src={require('../../images/kakao_login_large_wide.png')}
        />
      </a>
    </>
  );
}
