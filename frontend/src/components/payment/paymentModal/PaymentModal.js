import { Box } from '@mui/material';
import * as S from './Style';
import { apiInstance } from 'api';
import { Navigate } from 'react-router-dom';

// const paymentList = [
//   {
//     id: 1,
//     pointGom: 1000,
//     pointWon: 1100,
//   },
//   {
//     id: 2,
//     pointGom: 3000,
//     pointWon: 3300,
//   },
//   {
//     id: 3,
//     pointGom: 5000,
//     pointWon: 5500,
//   },
//   {
//     id: 4,
//     pointGom: 10000,
//     pointWon: 11000,
//   },
//   {
//     id: 5,
//     pointGom: 50000,
//     pointWon: 55000,
//   },
//   {
//     id: 6,
//     pointGom: 100000,
//     pointWon: 110000,
//   },
// ];

export default function PaymentModal({ handleClose }) {
  const api = apiInstance();

  const requestPayment = async (won, gom) => {
    const response = await api.post(`/payment?money=${won}&point=${gom}`);
    return response;
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '550px',
    height: '500px',
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 0,
    borderRadius: '10px',
  };

  const KAKAOPAY = ``;

  return (
    <div>
      <Box sx={style}>
        <S.Div1>
          <S.Title1>Gom</S.Title1>
          <S.Title2>충전하기</S.Title2>
        </S.Div1>

        {/* <S.Cards>
          {paymentList.map(it => (
            <S.Card key={it.id}>
              <div onClick={requestPayment(it.pointWon, it.pointGom)}>
                <S.CardSection1>
                  <S.GomPoint>{it.pointGom.toLocaleString()}</S.GomPoint>Gom
                </S.CardSection1>
                <S.CardSection2>
                  {it.pointWon.toLocaleString()} 원
                </S.CardSection2>
              </div>
            </S.Card>
          ))}
        </S.Cards> */}

        <S.Cards>
          <S.Card>
            <div onClick={() => {requestPayment(1100, 1000)}}>
              <S.CardSection1>
                <S.GomPoint>1,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>1,100 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {requestPayment(3300, 3000)}}>
              <S.CardSection1>
                <S.GomPoint>3,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>3,300 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {requestPayment(5500, 5000)}}>
              <S.CardSection1>
                <S.GomPoint>5,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>5,500 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {requestPayment(11000, 10000)}}>
              <S.CardSection1>
                <S.GomPoint>10,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>11,000 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {requestPayment(55000, 50000)}}>
              <S.CardSection1>
                <S.GomPoint>50,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>55,000 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {requestPayment(110000, 100000)}}>
              <S.CardSection1>
                <S.GomPoint>100,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>110,000 원</S.CardSection2>
            </div>
          </S.Card>
        </S.Cards>

        <a href={KAKAOPAY}>
          <S.KakaoPay
            src={require('../../../images/kakao_pay_button1.png')}
            onClick={handleClose}
          />
        </a>
      </Box>
    </div>
  );
}
