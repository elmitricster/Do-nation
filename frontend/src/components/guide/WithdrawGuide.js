import Payment1 from './image/Payment1.png';
import Withdraw2 from './image/Withdraw2.png';
import Withdraw3 from './image/Withdraw3.png';
import * as S from './Style';

export function WithdrawGuide() {
  return(
    <div>
      <div className='container'>
      <S.TopText>정산 하는 방법</S.TopText>
      <div className='row align-items-center justify-content-between mt-5'>
        <S.GuideImage src={Payment1} className='col-5' />
        <S.GuideText className='col-5'>
          1. 좌측상단의 버튼을 눌러 정산 버튼을 클릭하세요.
        </S.GuideText>
      </div>
      <div className='row align-items-center justify-content-between mt-5'>
        <S.GuideImage src={Withdraw2} className='col-5' />
        <S.GuideText className='col-5'>
          2. 정산 받을 계좌를 등록해주세요.
        </S.GuideText>
      </div>
      <div className='row align-items-center justify-content-between mt-5'>
        <S.GuideImage src={Withdraw3} className='col-5' />
        <S.GuideText className='col-5'>
          3. 현재 본인이 보유한 포인트를 확인한 후 정산 받을 포인트를 입력해주세요.
        </S.GuideText>
      </div>
    </div>
    </div>
  )
}