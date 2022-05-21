import { Box } from '@mui/material';
import * as S from './Style';
import { apiInstance } from 'api';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function PaymentModal({ handleClose }) {
  const [money, setMoney] = useState(0);
  const [point, setPoint] = useState(0);
  const api = apiInstance();

  const requestPayment = async (won, gom) => {
    const response = await api.post(`/payment?money=${won}&point=${gom}`);
    return response;
  };

  const setPayment = (won, gom) => {
    setMoney(won);
    setPoint(gom);
  };

  const onSubmit = () => {
    console.log(money, point)
    requestPayment(money, point)
      .then(res => {
      })
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

  const paymentList = [
    {
      id: 0,
      pointWon: 1100,
      pointGom: 1000,
    },
    {
      id: 1,
      pointWon: 3300,
      pointGom: 3000,
    },
    {
      id: 2,
      pointWon: 5500,
      pointGom: 5000,
    },
    {
      id: 3,
      pointWon: 11000,
      pointGom: 10000,
    },
    {
      id: 4,
      pointWon: 55000,
      pointGom: 50000,
    },
    {
      id: 5,
      pointWon: 110000,
      pointGom: 100000,
    },
  ]
  const [paymentActive, setPaymentActive] = useState(
    Array(paymentList.length).fill(false),
  );
  const paymentActiveHandler = (id, paymenList, setPaymentActive) => {
    const activeCheck = paymenList.map((el, index) => {
      return index === id;
    });

    setPaymentActive(activeCheck);
  };

  return (
    <div>
      <Box sx={style}>
        <S.Div1>
          <S.Title1>Gom</S.Title1>
          <S.Title2>충전하기</S.Title2>
        </S.Div1>

        <S.Cards>
          {paymentList.map(it => (
            <S.Card key={it.id} id={it.id} props={paymentActive}>
              <div onClick={() => {
                setPayment(it.pointWon, it.pointGom);
                paymentActiveHandler(it.id, paymentActive, setPaymentActive)
              }}>
                <S.CardSection1>
                  <S.GomPoint>{it.pointGom.toLocaleString()}</S.GomPoint>Gom
                </S.CardSection1>
                <S.CardSection2>
                  {it.pointWon.toLocaleString()} 원
                </S.CardSection2>
              </div>
            </S.Card>
          ))}
        </S.Cards>

        {/* <S.Cards>
          <S.Card>
            <div onClick={() => {setPayment(1100, 1000)}}>
              <S.CardSection1>
                <S.GomPoint>1,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>1,100 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {setPayment(3300, 3000)}}>
              <S.CardSection1>
                <S.GomPoint>3,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>3,300 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {setPayment(5500, 5000)}}>
              <S.CardSection1>
                <S.GomPoint>5,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>5,500 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {setPayment(11000, 10000)}}>
              <S.CardSection1>
                <S.GomPoint>10,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>11,000 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {setPayment(55000, 50000)}}>
              <S.CardSection1>
                <S.GomPoint>50,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>55,000 원</S.CardSection2>
            </div>
          </S.Card>
          <S.Card>
            <div onClick={() => {setPayment(110000, 100000)}}>
              <S.CardSection1>
                <S.GomPoint>100,000</S.GomPoint>
                Gom
              </S.CardSection1>
              <S.CardSection2>110,000 원</S.CardSection2>
            </div>
          </S.Card>
        </S.Cards> */}

        <a href={KAKAOPAY}>
          <S.KakaoPay
            src={require('../../../images/kakao_pay_button1.png')}
            onClick={() => {handleClose(); onSubmit();}}
          />
        </a>
      </Box>
    </div>
  );
}
