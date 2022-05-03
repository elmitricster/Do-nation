import React from 'react';
import * as S from './Styled';
import SearchedUser from './SearchedUser';

export default function SearchBox({ keyword }) {
  const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <S.boxContainer>
      {tmp.map((t, idx) => {
        return (
          <SearchedUser
            key={idx}
            src="1"
            name={keyword}
            cre="유튜버"
            sub="영화/만화"
            descpt="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"
          />
        );
      })}
    </S.boxContainer>
  );
}
