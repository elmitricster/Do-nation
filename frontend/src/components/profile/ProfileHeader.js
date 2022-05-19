import { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import defaultProfile from './default_profile.png';
import * as S from './Style';
import articles from './articles.png';
import donate from './donate.png';
import DonationModal from 'components/donation/DonationModal';
import { apiInstance } from 'api';

export function ProfileHeader() {
  const params = useParams();
  const [isMore, setIsMore] = useState(false);
  const [profile, setProfile] = useState();
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const api = apiInstance();
  const navigate = useNavigate();

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

  const checkIsFollow = async (nickname) => {
    const response = await api.get(`/follow/isFollow?nickname=${nickname}`)
    return response.data
  }

  const follow = async (nickname) => {
    const response = await api.post(`/follow?nickname=${nickname}`)
  }

  const unfollow = async (nickname) => {
    const response = await api.delete(`/follow?nickname=${nickname}`)
  }

  useEffect(() => {
    getProfileInfo()
      .then(res => {
        setProfile(res)
      })
      .catch(e =>{
        navigate('/noprofile')
      })
  }, [])

  useEffect(() => {
    checkIsFollow(params.nickname)
      .then(res => {
        setIsFollow(res)
      })
  }, [profile])

  const onHandleIsMore = () => {
    setIsMore(!isMore);
  };

  const onClickFollow = () => {
    follow(params.nickname)
    setIsFollow(true)
  };

  const onClickUnfollow = () => {
    unfollow(params.nickname)
    setIsFollow(false)
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
                    {isMyProfile ? 
                      <NavLink to="/profile/edit">
                        <S.MyButton>프로필 편집</S.MyButton>
                      </NavLink>
                    : 
                      isFollow ?
                        <S.MyButton onClick={() => {onClickUnfollow()}}>언팔로우</S.MyButton>
                      :
                        <S.MyButton onClick={() => {onClickFollow()}}>팔로우</S.MyButton>
                    }
                    {isMyProfile ?
                      <NavLink to="/articles/create">
                        <S.MyButton>글 작성</S.MyButton>
                      </NavLink>
                    : 
                      <DonationModal profile={profile} />
                    }
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
                        <a href={`${userUrl.userUrl}`} style={{ textDecoration: 'none', color: 'white' }}>{userUrl.urlName}</a>
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
          to={`/profile/${params.nickname}/articles`}
          className="col"
        >
          <S.Icon src={articles} />
        </NavLink>
        <NavLink
          to={`/profile/${params.nickname}/donations`}
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
