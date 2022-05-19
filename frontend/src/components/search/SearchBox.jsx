import React, { useState, useEffect } from 'react';
import * as S from './Styled';
import SearchedUser from './SearchedUser';
import { apiInstance } from 'api';

export default function SearchBox({ keyword }) {
  const [results, setResults] = useState([]);
  const api = apiInstance();

  useEffect(() => {
    const getSearch = async (keyword) => {
      const response = await api.get(`/search?mode=nickname&searchKeyword=${keyword}`)
      return response
    }

    getSearch(keyword)
      .then(res => {
        setResults(res.data)
      })
  }, [])

  return (
    <div>
      {results ?
        <S.boxContainer>
          {results.map((result, idx) => {
            return (
              <SearchedUser
                key={idx}
                src={result.profileImage}
                name={result.nickname}
                cre={result.category}
                sub={result.subject}
                descpt={result.introMessage}
              />
            );
          })}
        </S.boxContainer>
      : 
        <div>
          검색결과가 없습니다.
        </div>}
    </div>
  );
}
