import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import defaultProfile from './default_profile.png';
import * as S from './Style';
import articles from './articles.png';
import donate from './donate.png';
import { apiInstance } from 'api';

export function ProfileHeader() {
  const params = useParams();
  const [isMore, setIsMore] = useState(false);
  const [profile, setProfile] = useState();
  const [isMyProfile, setIsMyProfile] = useState(false);
  const api = apiInstance();

  // url buttons color
  const urlButton = {
    'Youtube': '#E32222',
    'Instagram': '#F24F4F'
  }

  const getProfileInfo = async () => {
    const response = await api.get(`/user/nickname?nickname=${params.nickname}`)
    const myResponse = await api.get('/user/me');

    if (response.data.nickname === myResponse.data.nickname) {
      setIsMyProfile(true);
    }
    return response.data
  }

  useEffect(() => {
    getProfileInfo()
      .then(res => {
        setProfile(res)
        console.log(profile)
        console.log(isMyProfile)
      });
  }, [])

  const onHandleIsMore = () => {
    setIsMore(!isMore);
  };

  return (
    <div className="row justify-content-center">
      {profile ? 
      <>
      <Row style={{ marginTop: '1rem' }}>
        <S.Contents>
          <Row style={{ marginBottom: '1rem' }}>
            <Col>
              <S.ProfileImg
                style={{ float: 'left' }}
                src={profile.profileImage}
                rounded
                fluid
              />
              <div
                style={{ float: 'left', marginLeft: '1rem', height: '9rem' }}
              >
                <S.NinknameBox>{profile.nickname}</S.NinknameBox>
                <Row>
                  <div>
                    {profile.category ? <S.Category>{profile.category}</S.Category> : <></>}
                    {profile.subject ? (
                      <S.Category>{profile.subject}</S.Category>
                    ) : (
                      <></>
                    )}
                  </div>
                </Row>
                <Row>
                  <div>
                    {isMyProfile ? <S.MyButton>프로필 편집</S.MyButton> : <S.MyButton>팔로우</S.MyButton>}
                    {isMyProfile ? <S.MyButton>글 작성</S.MyButton> : <S.MyButton>후원하기</S.MyButton>}
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
                    {profile.userUrls.map(userUrl => (
                      <S.URLButton key={userUrl.id} color={urlButton[userUrl.urlName]}>
                        {userUrl.urlName}
                      </S.URLButton>
                    ))}
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <S.ContentBox>{profile.introMessage}</S.ContentBox>
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
        <NavLink
          to={`/profile/${params.user_id}/articles`}
          className="col"
        >
          <S.Icon src={articles} />
        </NavLink>
        <NavLink
          to={`/profile/${params.user_id}/donations`}
          className="col"
        >
          <S.Icon src={donate} />
        </NavLink>
      </div>
      </>
      : <></>}
    </div>
  );
}
