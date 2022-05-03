import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import defaultProfile from './default_profile.png';
import * as S from './Style';
import articles from './articles.png';
import donate from './donate.png';

export function ProfileHeader() {
  const params = useParams();
  const [isMore, setIsMore] = useState(false);

  // user category
  const createCate = '유튜버';
  const subjectCate = '영화/만화';

  // url buttons
  const URLBtns = [
    {
      id: 0,
      urlName: 'Youtube',
      url: 'https://www.youtube.com/kimcookie',
      color: '#E32222',
    },
    {
      id: 1,
      urlName: 'Instagram',
      url: 'https://www.instagram.com/kimcookie',
      color: '#F24F4F',
    },
  ];

  const onHandleIsMore = () => {
    setIsMore(!isMore);
  };

  return (
    <div className="row justify-content-center">
      <Row style={{ marginTop: '1rem' }}>
        <S.Contents>
          <Row style={{ marginBottom: '1rem' }}>
            <Col>
              <S.ProfileImg
                style={{ float: 'left' }}
                src={defaultProfile}
                rounded
                fluid
              />
              <div
                style={{ float: 'left', marginLeft: '1rem', height: '9rem' }}
              >
                <S.NinknameBox>{params.nickname}</S.NinknameBox>
                <Row>
                  <div>
                    {createCate ? <S.Category>{createCate}</S.Category> : <></>}
                    {subjectCate ? (
                      <S.Category>{subjectCate}</S.Category>
                    ) : (
                      <></>
                    )}
                  </div>
                </Row>
                <Row>
                  <div>
                    <S.MyButton>팔로우</S.MyButton>
                    <S.MyButton>후원하기</S.MyButton>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>

          {isMore ? (
            <>
              <Row style={{ marginBottom: '1rem' }}>
                <Col>
                  <S.URLText>URL</S.URLText>
                  <div>
                    {URLBtns.map(URLBtn => (
                      <S.URLButton key={URLBtn.id} color={URLBtn.color}>
                        {URLBtn.urlName}
                      </S.URLButton>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <S.ContentBox>자기소개</S.ContentBox>
                </Col>
              </Row>

              <Row
                className="justify-content-end"
                style={{
                  fontSize: '0.8rem',
                  marginTop: '0.5rem',
                  marginRight: '0.1rem',
                  cursor: 'pointer',
                }}
                onClick={onHandleIsMore}
              >
                닫기
              </Row>
            </>
          ) : (
            <>
              <Row
                className="justify-content-end"
                style={{
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  marginRight: '0.1rem',
                }}
                onClick={onHandleIsMore}
              >
                더보기
              </Row>
            </>
          )}
        </S.Contents>
      </Row>
      <S.Line></S.Line>
      <div className="row justify-content-around mt-3">
        <S.Icon src={articles} />
        <S.Icon src={donate} />
      </div>
    </div>
  );
}
