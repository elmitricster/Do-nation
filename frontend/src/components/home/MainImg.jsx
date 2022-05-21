import React from 'react';
import * as S from './Styled';

export default function MainImg() {
  return (
    <S.box>
      <S.mainImg src={require('../../images/tempImg.png')} />
    </S.box>
  );
}
