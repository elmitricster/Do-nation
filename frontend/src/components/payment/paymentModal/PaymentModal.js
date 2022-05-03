import { Box } from "@mui/material"
import * as S from './Style';

const paymentList = [
  {
    id: 1,
    pointGom: 1000,
    pointWon: 1100,
  },
  {
    id: 2,
    pointGom: 3000,
    pointWon: 3300,
  },
  {
    id: 3,
    pointGom: 5000,
    pointWon: 5500,
  },
  {
    id: 4,
    pointGom: 10000,
    pointWon: 11000,
  },
  {
    id: 5,
    pointGom: 50000,
    pointWon: 55000,
  },
  {
    id: 6,
    pointGom: 100000,
    pointWon: 110000,
  },
];


export default function PaymentModal({handleClose}) {


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
          <S.Title1>Gom</S.Title1><S.Title2>충전하기</S.Title2>
        </S.Div1>
        


        <S.Cards>

          {paymentList.map((it) => (
            <S.Card key={it.id}>
              <S.CardSection1>
                <S.GomPoint>{it.pointGom.toLocaleString()}</S.GomPoint>Gom
              </S.CardSection1>
              <S.CardSection2>
                {it.pointWon.toLocaleString()} 원
              </S.CardSection2>
            </S.Card>
          ))}



        </S.Cards>


        <a href={KAKAOPAY}>
          <S.KakaoPay
            src={require('../../../images/kakao_pay_button1.png')}
            onClick={handleClose}
          />
        </a>
        


        


        
        
      </Box>
    </div>

  )
};