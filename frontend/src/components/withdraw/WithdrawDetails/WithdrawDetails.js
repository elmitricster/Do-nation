import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { WithdrawDetail } from "./WithdrawDetail";
import * as S from './Style';

export function WithdrawDetails() {
  const [myList, setMyList] = useState(
    [
      {
        id: 1,
        date: "2022-04-20",
        account: "우리은행 1002-051-123456",
        values: 10000
      },
      {
        id: 2,
        date: "2022-04-19",
        account: "우리은행 1002-051-123456",
        values: 10000
      },
      {
        id: 3,
        date: "2022-04-18",
        account: "우리은행 1002-051-123456",
        values: 10000
      },
      {
        id: 4,
        date: "2022-04-17",
        account: "우리은행 1002-051-123456",
        values: 10000
      },
      {
        id: 5,
        date: "2022-04-16",
        account: "우리은행 1002-051-123456",
        values: 10000
      },
    ]
  );
  const [totalValue, setTotalValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    var result = 0;
    myList.map((withdraw) => result += withdraw.values)
    setTotalValue(result)
  }, [])

  const goBack = () => {
    navigate(-1);
  }

  return(
    <>
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
    </>
  )
}