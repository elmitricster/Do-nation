import React from 'react';
import * as S from './Styled';
import Avatar from '@mui/material/Avatar';

export default function SearchedUser({ src, name, cre, sub, descpt }) {
  return (
    <S.userBox>
      <S.avatarBox>
        <Avatar
          alt="C"
          src={src}
          sx={{
            width: '8rem',
            height: '8rem',
            margin: 0,
          }}
        />
      </S.avatarBox>

      <S.contentBox>
        <S.nameBox>{name}</S.nameBox>
        <S.categoryBox>
          <S.creator>{cre}</S.creator>
          <S.subject>{sub}</S.subject>
        </S.categoryBox>
        <S.description>{descpt}</S.description>
      </S.contentBox>
    </S.userBox>
  );
}
