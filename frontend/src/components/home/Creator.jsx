import React from 'react';
import * as S from './Styled';
import Avatar from '@mui/material/Avatar';

export default function Creator({ src, nickname }) {
  return (
    <S.cardBox>
      <Avatar
        src={src}
        sx={{
          width: '8rem',
          height: '8rem',
          margin: 'auto',
        }}
      />
      <S.subject>{nickname}</S.subject>
    </S.cardBox>
  );
}
