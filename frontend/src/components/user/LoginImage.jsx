import React from 'react';
import * as S from './Styled';

export default function LoginImage() {
  const REST_API_KEY = '813d5b77120e29a1f60fc18a32e322a5';
  const REDIRECT_URI = 'http://k6c101.p.ssafy.io/auth/login';
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
