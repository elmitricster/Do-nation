import React from 'react';
import * as S from './Styled';

export default function SwitchLink({ name, url }) {
  return (
    <S.box>
      <S.switchLink to={url}>{name}</S.switchLink>
    </S.box>
  );
}
