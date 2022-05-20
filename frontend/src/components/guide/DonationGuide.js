import Donation1 from './image/Donation1.png';
import Donation2 from './image/Donation2.png';
import Donation3 from './image/Donation3.png';
import * as S from './Style';

export function DonationGuide() {
  return(
    <div className='container'>
      <S.TopText>도네이션 하는 방법</S.TopText>
      <div className='row align-items-center justify-content-between mt-3'>
        <S.GuideImage src={Donation1} className='col-5' />
        <S.GuideText className='col-5'>
          1. 후원하고 싶은 크리에이터의 프로필에서 후원하기 버튼을 누르세요.
        </S.GuideText>
      </div>
      <div className='row align-items-center justify-content-between mt-3'>
        <S.GuideImage src={Donation2} className='col-5' />
        <S.GuideText className='col-5'>
          2. 보유한 Gom 이내에서 후원하고 싶은 포인트를 입력하세요.
        </S.GuideText>
      </div>
      <div className='row align-items-center justify-content-between mt-3'>
        <S.GuideImage src={Donation3} className='col-5' />
        <S.GuideText className='col-5'>
          3. 응원메시지를 입력하고 버튼을 클릭하면 후원이 완료됩니다.
        </S.GuideText>
      </div>
    </div>
  )
}