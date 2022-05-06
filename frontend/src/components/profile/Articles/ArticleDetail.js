import { useNavigate } from 'react-router-dom';
import * as S from './Style';
import default_content from './따봉도치.jpg';
import default_profile from '../default_profile.png';
import heart_img from './heart.png';
import chat_img from './chat-bubble.png';
import dots from './dots.png';
import edit from './edit.png';
import delete_icon from './delete.png';

export function ArticleDetail() {
  const navigate = useNavigate();

  const article = {
    id: 0,
    content:
      '글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용',
    image: default_content,
    likes: 100,
    comments: 10,
  };

  const comments = [
    {
      id: 0,
      nickname: '닉네임',
      created_at: '2022-04-29',
      comment: '화이팅!',
    },
    {
      id: 1,
      nickname: '닉네임',
      created_at: '2022-04-29',
      comment: '화이팅!',
    },
  ];

  return (
    <div>
      <S.Contents>
        <S.TopBox>
          <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)} style={{ cursor: 'pointer'}}> 게시글</i>
        </S.TopBox>
        <S.NicknameBox>
          <S.SmallProfileImg rounded src={default_profile} />
          cookie
          <S.DotsIcon src={dots} />
        </S.NicknameBox>
        <S.ContentBox>{article.content}</S.ContentBox>
        <S.ImageBox src={article.image}></S.ImageBox>
        <S.BottomBox>
          <S.Icon src={heart_img} /> 100
          <S.Icon src={chat_img} /> 10
        </S.BottomBox>
        <div style={{ borderBottom: 'solid 1px black', marginTop: '1rem' }}>
          {comments.map(comment => (
            <S.CommentsBox key={comment.id}>
              <div>
                <S.CommentProfile src={default_profile} rounded />
                <span
                  style={{
                    fontSize: '0.8rem',
                    position: 'relative',
                  }}
                >
                  {comment.nickname}
                  <span
                    style={{
                      fontSize: '0.3rem',
                      position: 'absolute',
                      top: '1rem',
                      left: '0.1rem',
                      width: '4rem',
                    }}
                  >
                    {comment.created_at}
                  </span>
                </span>
                <S.CommentIcon src={edit} style={{ right: '2rem' }} />
                <S.CommentIcon src={delete_icon} style={{ right: '0.5rem' }} />
              </div>
              <S.CommentContent>{comment.comment}</S.CommentContent>
            </S.CommentsBox>
          ))}
        </div>
        <S.CommentCreateBox>
          <S.CommentInput />
          <S.CommentButton>작성</S.CommentButton>
        </S.CommentCreateBox>
      </S.Contents>
    </div>
  );
}
