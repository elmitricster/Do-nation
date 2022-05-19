import { useState, useEffect } from 'react';
import * as S from './Style';
import default_profile from '../default_profile.png';
import chat_img from './chat-bubble.png';
import dots from './dots.png';
import { NavLink } from 'react-router-dom';
import { apiInstance } from 'api';

export function Article({ article }) {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState();
  const api = apiInstance();

  useEffect(() => {
    const getImage = async () => {
      const response = await api.get(`/community/image/read/${article.communityId}`)
      return response
    }

    getImage()
      .then(res => {
        console.log(res)
        setImage(res.data.storeFileName)
      })
  }, [])

  return (
    <div>
      <S.Contents>
        <S.NicknameBox style={{ position: 'relative' }}>
          <S.SmallProfileImg src={default_profile} />
          cookie
          <S.Icon
            src={dots}
            style={{ position: 'absolute', right: '1rem', top: '1.5rem', cursor: 'pointer' }}
            onClick={() => setIsOpen(!isOpen)}
          />
          <S.Menu isOpen={isOpen}>
            <S.MyLi>
              수정하기
            </S.MyLi>
            <S.MyLi>
              삭제하기
            </S.MyLi>
          </S.Menu>
        </S.NicknameBox>
        <S.ContentBox>{article.content}</S.ContentBox>
        <NavLink to={`${article.communityId}`}>
          <S.ImageBox src={`data:image/jpeg;base64,${image}`}></S.ImageBox>
        </NavLink>
        <S.BottomBox>
          <S.Icon src={chat_img} /> 10
        </S.BottomBox>
      </S.Contents>
    </div>
  );
}
