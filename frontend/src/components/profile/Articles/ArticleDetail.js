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
  const [comments, setComments] = useState([]);
  const [myComment, setMyComment] = useState();

  useEffect(() => {
    const getArticle = async () => {
      const response = await api.get(`/community/read/${params.article_id}`)
      return response
    };

    const getComments = async () => {
      const response = await api.get(`/community/comment/read/${params.article_id}`)
      return response
    };

    getArticle()
      .then(res => {
        console.log(res.data)
        setArticle(res.data)
      })

    getComments()
      .then(res => {
        setComments(res.data)
      })
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
        setMyComment('');
        navigate(0);
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
          <S.SmallProfileImg src={article.profileImage} />
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
        <S.BottomBox>
          <S.Icon src={chat_img} /> {comments.length}
        </S.BottomBox>
        {comments? 
        <div style={{ borderBottom: 'solid 1px black', marginTop: '1rem' }}>
          {comments.map(comment => (
            <S.CommentsBox key={comment.commentId}>
              <div>
                <S.CommentProfile src={comment.profileImage} />
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
                      width: '10rem',
                    }}
                  >
                    {comment.commentWriteTime.substr(0, 10)}
                  </span>
                </span>
                <S.CommentIcon src={edit} style={{ right: '2rem' }} />
                <S.CommentIcon src={delete_icon} style={{ right: '0.5rem' }} />
              </div>
              <S.CommentContent>{comment.content}</S.CommentContent>
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
