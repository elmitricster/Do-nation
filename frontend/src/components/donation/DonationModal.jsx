import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as S from './Styled';
import Avatar from '@mui/material/Avatar';
import { apiInstance } from 'api';

import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30rem',
  // height: '46rem',
  // overflow: 'hidden',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px',
};

export default function BasicModal({ profile }) {
  const [open, setOpen] = useState(false);
  const [myPoint, setMyPoint] = useState();
  const api = apiInstance();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setGom('');
    setState(0);
  };

  const [gom, setGom] = useState();
  const handleChange = e => {
    setGom(Number(e.target.value));
  };

  const [message, setMessage] = useState('');
  const handleMessageChange = e => {
    setMessage(e.target.value);
  }

  const checkCanDonate = async (point) => {
    const response = api.get(`/donation/certification?point=${point}`)
    return response
  }

  const handleClick = e => {
    checkCanDonate(gom)
      .then(res => {
        setState(1);
      })
      .catch(e => {
        alert('잔액이 부족합니다.')
      })
  };

  const donate = async (nickname, point, message) => {
    const response = await api.post(`/donation?nickname=${nickname}&point=${point}&message=${message}`)
    return response
  }

  const handleDona = e => {
    donate(profile.nickname, gom, message);
    handleClose();
    navigate(0);
  };

  const [state, setState] = useState(0);

  const getMyPoint = async () => {
    const response = await api.get('/user/point')
    return response.data
  }

  useEffect(() => {
    getMyPoint()
      .then(res => {
        setMyPoint(res)
      })
  }, [])

  return (
    <div style={{ float: 'left' }}>
      <S.MyButton onClick={handleOpen}>후원하기</S.MyButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {state === 0 && (
            <>
              <S.ownDiv>
                <S.posPtag>보유 Gom</S.posPtag>
                <S.ownPtag>
                  <S.ownSpan>{myPoint}</S.ownSpan>
                  <S.ownGom>Gom</S.ownGom>
                </S.ownPtag>
              </S.ownDiv>
              <Avatar
                alt="Remy Sharp"
                src={profile.profileImage}
                sx={{
                  width: '15rem',
                  height: '15rem',
                  mx: 'auto',
                  mt: '6rem',
                }}
              />
              <S.nick>{profile.nickname}</S.nick>
              <S.donaText>보낼 Gom을 입력해주세요!</S.donaText>
              <S.box>
                <S.Input onChange={handleChange} />
                <S.GomIcon src={require('../../images/bear.png')} />
                <S.GomText>Gom</S.GomText>
              </S.box>
              <S.donaBtn onClick={handleClick}>다음</S.donaBtn>
            </>
          )}
          {state === 1 && (
            <>
              <S.boxes>
                <Avatar
                  alt="Remy Sharp"
                  src={profile.profileImage}
                  sx={{
                    width: '8rem',
                    height: '8rem',
                  }}
                />
                <S.nicks>{profile.nickname}</S.nicks>
              </S.boxes>
              <S.donaText>응원 메세지를 입력해주세요!</S.donaText>
              <S.tBox>
                <TextField
                  placeholder="(선택사항)"
                  multiline
                  fullWidth
                  rows={12}
                  maxRows={Infinity}
                  onChange={handleMessageChange}
                />
              </S.tBox>
              <S.donaBtn onClick={handleDona}>도네이션 하기</S.donaBtn>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
