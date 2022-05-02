import React from 'react';
import * as S from './Styled';
import Avatar from '@mui/material/Avatar';

export default function Creator({ src, cre, sub }) {
  return (
    <S.cardBox>
      <Avatar
        alt="C"
        src={src}
        sx={{
          width: '8rem',
          height: '8rem',
          margin: 'auto',
        }}
      />
      <S.creator>{cre}</S.creator>
      <S.subject>{sub}</S.subject>
    </S.cardBox>
  );
}
