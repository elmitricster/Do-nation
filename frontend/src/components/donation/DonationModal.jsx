import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as S from './Styled';
import Avatar from '@mui/material/Avatar';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
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

export default function BasicModal() {
  const [open, setOpen] = useState(false);
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

  const handleClick = e => {
    setState(1);
  };

  const handleDona = e => {
    handleClose();
  };

  const [state, setState] = useState(0);

  return (
    <div>
      <Button onClick={handleOpen}>Donation</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {state === 0 && (
            <>
              <S.ownDiv>
                <S.posPtag>보유 Gom</S.posPtag>
                <S.ownPtag>
                  <S.ownSpan>100,000</S.ownSpan>
                  <S.ownGom>Gom</S.ownGom>
                </S.ownPtag>
              </S.ownDiv>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{
                  width: '15rem',
                  height: '15rem',
                  mx: 'auto',
                  mt: '6rem',
                }}
              />
              <S.nick>닉네임</S.nick>
              <S.donaText>보낼 Gom을 입력해주세요!</S.donaText>
              <S.box>
                <FormControl
                  sx={{ m: '1.5rem', width: '75%' }}
                  variant="outlined"
                >
                  <OutlinedInput
                    value={gom || ''}
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <img
                          alt="bear"
                          src={require('../../images/bear.png')}
                          style={{
                            height: 50,
                            width: 50,
                            borderRadius: '50%',
                          }}
                        />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">Gom</InputAdornment>
                    }
                  />
                </FormControl>
              </S.box>
              <S.donaBtn onClick={handleClick}>다음</S.donaBtn>
            </>
          )}
          {state === 1 && (
            <>
              <S.boxes>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: '8rem',
                    height: '8rem',
                  }}
                />
                <S.nicks>닉네임</S.nicks>
              </S.boxes>
              <S.donaText>응원 메세지를 입력해주세요!</S.donaText>
              <S.tBox>
                <TextField
                  placeholder="(선택사항)"
                  multiline
                  fullWidth
                  rows={12}
                  maxRows={Infinity}
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
