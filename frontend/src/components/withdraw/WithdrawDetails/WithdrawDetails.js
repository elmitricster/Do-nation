import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { WithdrawDetail } from "./WithdrawDetail";
import * as S from './Style';
import { apiInstance } from 'api';

export function WithdrawDetails() {
  const [myList, setMyList] = useState();
  const [totalValue, setTotalValue] = useState(0);
  const navigate = useNavigate();
  const api = apiInstance();

  useEffect(() => {
    const getWithdrawDetails = async () => {
      const response = await api.get('/withdraw')
      setMyList(response.data)

      var result = 0;
      response.data.map((withdraw) => result += withdraw.money)
      setTotalValue(result)
    }

    getWithdrawDetails();
  }, [])

  const goBack = () => {
    navigate(-1);
  }

  return(
    <>
      {myList ? 
      <S.ListBox style={{ marginTop: "2rem" }}>
        <div style={{ fontWeight: "bold", textAlign: "start", fontSize: "1.2rem" }}>
          정산목록
        </div>
        {myList.map((withdraw) => (
          <WithdrawDetail key={withdraw.id} withdraw={withdraw}/>
        ))}
        <div style={{ textAlign: "end" }}>
          Total {totalValue.toLocaleString()} 원
        </div>
        <S.BackButton onClick={() => {goBack()}}>돌아가기</S.BackButton>
      </S.ListBox>
      : <></>}
    </>
  )
}