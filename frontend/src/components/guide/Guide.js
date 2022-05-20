import { useState } from 'react';
import * as S from './Style';
import { DonationGuide } from './DonationGuide';
import { PaymentGuide } from './PaymentGuide';
import { WithdrawGuide } from './WithdrawGuide';

export function Guide() {
  const [stage, setStage] = useState(0);

  return(
    <div>
      <S.Contents>
        <h1 style={{ marginTop: '5rem' }}>사용방법</h1>
        <div className="row justify-content-around mt-3">
          <S.MenuText className='col' onClick={() => setStage(0)}>
            도네이션
          </S.MenuText>
          <S.MenuText className='col' onClick={() => setStage(1)}>
            충전
          </S.MenuText>
          <S.MenuText className='col' onClick={() => setStage(2)}>
            정산
          </S.MenuText>
        </div>
        <hr />
        {stage === 0 ? 
          <DonationGuide />
        : <></>}
        {stage === 1 ? 
          <PaymentGuide />
        : <></>}
        {stage === 2 ? 
          <WithdrawGuide />
        : <></>}
      </S.Contents>
    </div>
  )
}