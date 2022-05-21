import React from 'react';
import MainText from '../../components/user/MainText';
import SignupImage from '../../components/user/SignupImage';
import SwitchLink from '../../components/user/SwitchLink';

export function SignupContainer() {
  return (
    <>
      <MainText txt="회원가입" />
      <SignupImage />
      <SwitchLink name="로그인 하기" url="/user/login" />
    </>
  );
}
