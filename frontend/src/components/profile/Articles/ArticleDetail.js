import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Style';
import default_profile from '../default_profile.png';
import chat_img from './chat-bubble.png';
import dots from './dots.png';
import edit from './edit.png';
import delete_icon from './delete.png';
import { useEffect, useState } from 'react';
import { apiInstance } from 'api';

export function ArticleDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const api = apiInstance();

  const [isOpen, setIsOpen] = useState(false);
  const [article, setArticle] = useState({
    content: 'hi',
    image: 'null'
  });
  const [comments, setComments] = useState([
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
  ]);
  const [myComment, setMyComment] = useState();

  useEffect(() => {
    console.log(article)
    const getComments = async () => {
      const response = await api.get(`/community/`)
    }
  }, [])

  const onCommentHandler = e => {
    setMyComment(e.currentTarget.value);
  };

  const onCommentSubmit = () => {
    const submitComment = async (comment) => {
      const response = await api.post(`/community/comment/${params.article_id}?comment=${comment}`)
      return response
    }

    submitComment(myComment)
      .then(res => {
        console.log(res)
        setMyComment('');
      })
  }

  return (
    <div>
      {article ? 
      <S.Contents>
        <S.TopBox>
          <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)} style={{ cursor: 'pointer'}}> 게시글</i>
        </S.TopBox>
        <S.NicknameBox>
          <S.SmallProfileImg rounded src={default_profile} />
          cookie
          <S.DotsIcon 
            src={dots} 
            style={{ position: 'absolute', right: '1rem', top: '1.3rem', cursor: 'pointer' }}
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
        <S.ImageBox src={article.image}></S.ImageBox>
        <S.BottomBox>
          <S.Icon src={chat_img} /> 10
        </S.BottomBox>
        {comments? 
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
        : <></>}
        <S.CommentCreateBox>
          <S.CommentInput value={myComment} onChange={onCommentHandler} />
          <S.CommentButton onClick={onCommentSubmit}>작성</S.CommentButton>
        </S.CommentCreateBox>
      </S.Contents>
      : <></>}
    </div>
  );
}
