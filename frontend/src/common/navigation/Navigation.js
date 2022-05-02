import { useState, useEffect } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import homeIcon from 'images/home.png';
import profileIcon from 'images/profile.png';
import paymentIcon from 'images/payment.png';
import withdrawIcon from 'images/withdraw.png';
import guideIcon from 'images/guide.png';
import settingIcon from 'images/setting.png';
import logoutIcon from 'images/logout.png';
import * as S from './Style';

export function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nickname = 'kimcookie';

  useEffect(() => {
    if (localStorage.getItem('')) setIsAuthenticated(true);
  }, []);

  function logout() {
    localStorage.removeItem('');
    navigate('/');
    navigate(0);
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
            <NavLink to="" onClick={handleClose} style={S.notAuthNavLinkStyle}>
              로그인
            </NavLink>
            /
            <NavLink to="" onClick={handleClose} style={S.notAuthNavLinkStyle}>
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
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Collapse>
          <S.Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <i className="fa-solid fa-user"></i>
                <NavLink to="" onClick={handleClose} style={S.navLinkStyle}>
                  닉네임
                </NavLink>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ paddingTop: '0' }}>
              <div style={{ fontSize: '0.7rem' }}>보유 포인트</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '2px' }}>
                10,000
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
                    <NavLink to="" onClick={handleClose} style={S.navLinkStyle}>
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
                    <NavLink to="" onClick={handleClose} style={S.navLinkStyle}>
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
                    <NavLink to="" onClick={handleClose} style={S.navLinkStyle}>
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
