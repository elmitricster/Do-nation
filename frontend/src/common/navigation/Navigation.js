import { useState, useEffect } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Form,
  FormControl,
} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import homeIcon from 'images/home.png';
import profileIcon from 'images/profile.png';
import paymentIcon from 'images/payment.png';
import withdrawIcon from 'images/withdraw.png';
import guideIcon from 'images/guide.png';
import settingIcon from 'images/setting.png';
import logoutIcon from 'images/logout.png';
import * as S from './Style';
import { apiInstance } from 'api';

export function Navigation({ jwt }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [show, setShow] = useState(false);
  const [profileImg, setProfileImg] = useState();
  const [nickname, setNickname] = useState();
  const [profileName, setProfileName] = useState();
  const [point, setPoint] = useState();
  const [search, setSearch] = useState('');

  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const api = apiInstance();
  const getUserInfo = async () => {
    const response = await api.get('/user/me');
    setProfileImg(response.data.profileImage);
    setNickname(response.data.nickname);
    setProfileName(response.data.profileName);
    setPoint(response.data.point);
    return response;
  };

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
      getUserInfo();
    }
  }, [user]);

  function logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  }

  const onSearchHandler = e => {
    setSearch(e.currentTarget.value);
  };

  const onSearch = () => {
    console.log(search)
    navigate(`/user/search/${search}`)
  }

  return (
    <S.MyNavbar collapseOnSelect expand={false}>
      <Container fluid>
        {isAuthenticated ? (
          <S.Toggle onClick={handleShow}>
            <i className="fa-solid fa-bars"></i>
          </S.Toggle>
        ) : (
          <div>
            <NavLink
              to="/user/login"
              onClick={handleClose}
              style={S.notAuthNavLinkStyle}
            >
              로그인
            </NavLink>
            /
            <NavLink
              to="/user/signup"
              onClick={handleClose}
              style={S.notAuthNavLinkStyle}
            >
              회원가입
            </NavLink>
          </div>
        )}
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={onSearchHandler}
          />
          <S.SearchButton onClick={onSearch}>검색</S.SearchButton>
        </Form>
        <Navbar.Collapse>
          <S.Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {/* <i className="fa-solid fa-user"></i> */}
                <S.ProfileImg src={profileImg} />
                <NavLink to="" onClick={handleClose} style={S.navLinkStyle}>
                  {profileName ? profileName : nickname}
                </NavLink>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ paddingTop: '0' }}>
              <div style={{ fontSize: '0.7rem' }}>보유 포인트</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '2px' }}>
                {point}
                <span style={{ fontSize: '0.7rem' }}> Gom</span>
              </div>
              <Nav className="justify-content-end flex-grow-1 pe-3 pt-3">
                <NavLink to="/" onClick={handleClose} style={S.navLinkStyle}>
                  <S.IconImg src={`${homeIcon}`} alt="home-icon" />
                  <span>홈</span>
                </NavLink>
                {isAuthenticated ? (
                  <>
                    <NavLink
                      to={`/profile/${nickname}/articles`}
                      onClick={handleClose}
                      style={S.navLinkStyle}
                    >
                      <S.IconImg src={`${profileIcon}`} alt="home-icon" />
                      프로필
                    </NavLink>
                    <NavLink
                      to="payment"
                      onClick={handleClose}
                      style={S.navLinkStyle}
                    >
                      <S.IconImg src={`${paymentIcon}`} alt="home-icon" />
                      충전
                    </NavLink>
                    <NavLink
                      to="withdraw"
                      onClick={handleClose}
                      style={S.navLinkStyle}
                    >
                      <S.IconImg src={`${withdrawIcon}`} alt="home-icon" />
                      정산
                    </NavLink>
                    <NavLink to="/guide" onClick={handleClose} style={S.navLinkStyle}>
                      <S.IconImg src={`${guideIcon}`} alt="home-icon" />
                      사용방법
                    </NavLink>
                    <NavLink
                      to="profile/edit"
                      onClick={handleClose}
                      style={S.navLinkStyle}
                    >
                      <S.IconImg src={`${settingIcon}`} alt="home-icon" />
                      설정
                    </NavLink>
                    <NavLink
                      to="/"
                      onClick={() => {
                        handleClose();
                        logout();
                      }}
                      style={S.navLinkStyle}
                    >
                      <S.IconImg src={`${logoutIcon}`} alt="home-icon" />
                      로그아웃
                    </NavLink>
                  </>
                ) : (
                  <></>
                )}
              </Nav>
            </Offcanvas.Body>
          </S.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </S.MyNavbar>
  );
}
