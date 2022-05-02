import * as S from './Style';
import default_profile from '../default_profile.png';
import heart_img from './heart.png';
import chat_img from './chat-bubble.png';
import dots from './dots.png';
import { NavLink } from 'react-router-dom';

export function Article({ article }) {
  return (
    <div>
      <S.Contents>
        <S.NicknameBox style={{ position: 'relative' }}>
          <S.SmallProfileImg src={default_profile} />
          cookie
          <S.Icon
            src={dots}
            style={{ position: 'absolute', right: '1rem', top: '1.5rem' }}
          />
        </S.NicknameBox>
        <S.ContentBox>{article.content}</S.ContentBox>
        <NavLink to={`${article.id}`}>
          <S.ImageBox src={article.image}></S.ImageBox>
        </NavLink>
        <S.BottomBox>
          <S.Icon src={heart_img} /> 100
          <S.Icon src={chat_img} /> 10
        </S.BottomBox>
      </S.Contents>
    </div>
  );
}
