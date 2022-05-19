import { useState, useEffect } from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import * as S from './Style';
import { Modal } from '@mui/material';
import PaymentModal from './paymentModal/PaymentModal';
import { NavLink, useNavigate } from 'react-router-dom';
import { apiInstance } from 'api';
import { useSelector } from 'react-redux';

export function Payment() {
  // const [name, setName] = useState('박한빈');
  // const [pointValue, setPointValue] = useState(0);

  const onSubmit = () => {
    const data = {};
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [show, setShow] = useState(false);
  // const [profileImg, setProfileImg] = useState();
  const [nickname, setNickname] = useState();
  // const [profileName, setProfileName] = useState();
  const [point, setPoint] = useState();

  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const api = apiInstance();
  const getUserInfo = async () => {
    const response = await api.get('/user/me');
    // setProfileImg(response.data.profileImage);
    setNickname(response.data.nickname);
    // setProfileName(response.data.profileName);
    setPoint(response.data.point);
    return response;
  };

  useEffect(() => {
    if (user) {
      // setIsAuthenticated(true);
      getUserInfo();
    }
  }, [user]);

  return (
    <div className="row justify-content-center">
      <Row className="justify-content-center">
        <S.MainTextBox2>
          <S.MainText2>{nickname} 님의</S.MainText2>
          <S.MainText2>현재 사용가능한</S.MainText2>
          <S.MainText2>곰은</S.MainText2>

          <S.PointValue style={{ textAlign: 'center', fontSize: '2.5rem' }}>
            {/* {pointValue.toLocaleString()} */}
            {point}
            <S.PointName>Gom</S.PointName>
          </S.PointValue>

          <S.MainText2 style={{ textAlign: 'end' }}>입니다.</S.MainText2>
        </S.MainTextBox2>
      </Row>

      <Row>
        <S.Contents>
          <Col>
            <S.MyButton
              style={{ width: '100%', marginTop: '1rem' }}
              onClick={handleOpen}
            >
              충전하기
            </S.MyButton>
          </Col>
          <Col>
            <NavLink to="details">
              <S.MyButton
                style={{ width: '100%', marginTop: '1rem' }}
                onClick={onSubmit}
              >
                충전내역 확인
              </S.MyButton>
            </NavLink>
          </Col>
        </S.Contents>
      </Row>

      <Modal open={open} onclose={handleClose}>
        <PaymentModal handleClose={handleClose} />
      </Modal>
    </div>
  );
}
