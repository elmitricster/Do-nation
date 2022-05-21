import Payment1 from './image/Payment1.png';
import Payment2 from './image/Payment2.png';
import Payment3 from './image/Payment3.png';
import * as S from './Style';

export function PaymentGuide() {
  return(
    <div className='container'>
      <S.TopText>충전 하는 방법</S.TopText>
      <div className='row align-items-center justify-content-between mt-3'>
        <S.GuideImage src={Payment1} className='col-5' />
        <S.GuideText className='col-5'>
          1. 좌측상단의 버튼을 눌러 충전 버튼을 클릭하세요.
        </S.GuideText>
      </div>
      <div className='row align-items-center justify-content-between mt-3'>
        <S.GuideImage src={Payment2} className='col-5' />
        <S.GuideText className='col-5'>
          2. 현재 충전되어 있는 포인트의 잔액을 확인하고 충전하기 버튼을 클릭하세요.
        </S.GuideText>
      </div>
      <div className='row align-items-center justify-content-between mt-3'>
        <S.GuideImage src={Payment3} className='col-5' />
        <S.GuideText className='col-5'>
          3. 원하는 포인트와 가격을 확인한 후 카카오페이로 결제하기를 통해 결제하세요.
        </S.GuideText>
      </div>
    </div>
  )
}