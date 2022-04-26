import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as S from './Styled';
import Avatar from '@mui/material/Avatar';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35vw',
  height: '70vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px',
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [gom, setGom] = useState(0);
  const handleChange = e => {
    setGom(Number(e.target.value));
  };

  const handleClick = e => {
    console.log('click');
  };

  return (
    <div>
      <Button onClick={handleOpen}>Donation</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
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
            sx={{ width: '25vh', height: '25vh', mx: 'auto', mt: '10vh' }}
          />
          <S.nick>닉네임</S.nick>
          <S.donaText>보낼 Gom을 입력해주세요!</S.donaText>
          <FormControl sx={{ m: '2vh', width: '50ch' }} variant="outlined">
            <OutlinedInput
              value={gom}
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
              endAdornment={<InputAdornment position="end">Gom</InputAdornment>}
            />
          </FormControl>
          <S.donaBtn onClick={handleClick}>다음</S.donaBtn>
        </Box>
      </Modal>
    </div>
  );
}
