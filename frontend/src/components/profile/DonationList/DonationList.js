import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './Style';
import crown from './crown.png';
import silver from './silver.png';
import bronse from './bronse.png';
import { DonationDetail } from './DonationDetail';
import { apiInstance } from 'api';

export function DonationList() {
  const [donations, setDonations] = useState([]);

  const api = apiInstance();
  const params = useParams();;

  const best = ['1등', '2등', '3등'];

  useEffect(() => {
    const nickname = params.nickname

    const getDonations = async () => {
      const response = await api.get(`donation/nickname?nickname=${nickname}`)
      return response
    };

    getDonations()
      .then(res => {
        setDonations(res.data)
      })
 
  }, [])

  return (
    <div>
      <S.Contents>
        <div className="row justify-content-around">
          {/* <S.bestMember>
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
          </S.bestMember> */}
        </div>
        {donations.map((donation, idx) => (
          <DonationDetail key={idx} donation={donation} />
        ))}
      </S.Contents>
    </div>
  );
}
