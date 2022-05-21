import { useState, useEffect } from 'react';
import * as S from './Style';
import default_profile from '../default_profile.png';
import chat_img from './chat-bubble.png';
import dots from './dots.png';
import { NavLink, Link } from 'react-router-dom';
import { apiInstance } from 'api';

export function Article({ article }) {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const api = apiInstance();

  useEffect(() => {
    const getComments = async () => {
      const response = await api.get(`/community/comment/read/${article.communityId}`)
      return response
    };

    getComments()
      .then(res => {
        setComments(res.data)
      })
  }, [])

  return (
    <div>
      <S.Contents>
        <S.NicknameBox style={{ position: 'relative' }}>
          <S.SmallProfileImg src={article.creator.profileImage} />
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
        <NavLink to={`${article.communityId}`} style={{ textDecoration: 'none', color: 'black' }}>
          <S.ContentBox>{article.content}</S.ContentBox>
        </NavLink>
        <S.BottomBox>
          <S.Icon src={chat_img} /> {comments.length}
        </S.BottomBox>
      </S.Contents>
    </div>
  );
}
