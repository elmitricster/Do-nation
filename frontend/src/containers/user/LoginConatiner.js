import React from 'react';
import MainText from '../../components/user/MainText';
import LoginImage from '../../components/user/LoginImage';
import SwitchLink from '../../components/user/SwitchLink';

export function LoginConatiner() {
  return (
    <>
      <MainText txt="로그인" />
      <LoginImage />
      <SwitchLink name="회원가입 하기" url="/user/signup" />
    </>
  );
}
