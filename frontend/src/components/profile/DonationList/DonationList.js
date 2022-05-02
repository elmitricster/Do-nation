import * as S from './Style';
import { Col } from 'react-bootstrap';
import crown from './crown.png';
import silver from './silver.png';
import bronse from './bronse.png';
import { DonationDetail } from './DonationDetail';

export function DonationList() {
  const best = ['1등', '2등', '3등'];
  const donations = [
    {
      id: 0,
      created_at: '2022-05-02',
      nickname: '닉네임',
      donation: 10000,
      message: '화이팅!',
    },
    {
      id: 1,
      created_at: '2022-05-02',
      nickname: '닉네임',
      donation: 10000,
      message: '화이팅!',
    },
    {
      id: 2,
      created_at: '2022-05-02',
      nickname: '닉네임',
      donation: 10000,
      message: '화이팅!',
    },
    {
      id: 3,
      created_at: '2022-05-02',
      nickname: '닉네임',
      donation: 10000,
      message: '화이팅!',
    },
    {
      id: 4,
      created_at: '2022-05-02',
      nickname: '닉네임',
      donation: 10000,
      message: '화이팅!',
    },
  ];

  return (
    <div>
      <S.Contents>
        <div className="row justify-content-around">
          <S.bestMember>
            <S.Icon src={crown} />
            {best[0]}
          </S.bestMember>
          <S.bestMember>
            <S.Icon src={silver} />
            {best[1]}
          </S.bestMember>
          <S.bestMember>
            <S.Icon src={bronse} />
            {best[2]}
          </S.bestMember>
        </div>
        {donations.map(donation => (
          <DonationDetail key={donation.id} donation={donation} />
        ))}
      </S.Contents>
    </div>
  );
}
