import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DateSearch } from "./paymentDetails/DateSearch";
import * as S from './Style';

export function PaymentDetails({payment}) {

  const [myList, setMyList] = useState(
    [
      {
        id: 1,
        date: "2022-04-28",
        gomValue: 10000,
        wonValue: 11000,
      },
      {
        id: 2,
        date: "2022-04-28",
        gomValue: 10000,
        wonValue: 11000,
      },
      {
        id: 3,
        date: "2022-04-28",
        gomValue: 10000,
        wonValue: 11000,
      },
      {
        id: 4,
        date: "2022-04-28",
        gomValue: 10000,
        wonValue: 11000,
      },
      {
        id: 5,
        date: "2022-04-28",
        gomValue: 10000,
        wonValue: 11000,
      },
    ]
  );

  const [totalGomValue, setTotalGomValue] = useState(0);
  const [totalWonValue, settotalWonValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    var resultGom = 0;
    var resultWon = 0;
    myList.map((payment) => {
      resultGom += payment.gomValue;
      resultWon += payment.wonValue;
    })
    setTotalGomValue(resultGom);
    settotalWonValue(resultWon);
  }, [])

  return(
    <div>
      <DateSearch />
      <S.ListBox style={{ marginTop: "3rem" }}>
        <div style={{ fontWeight: "bold", textAlign: "start", fontSize: "1.2rem" }}>
          충전내역
        </div>
        <br />
        {myList.map((payment) => (
          <div key={payment.id}>
            <div style={{ textAlign: "start", marginTop: "1rem", fontSize: "0.8rem" }}>
              {payment.date}
            </div>
            <div className="row" style={{ marginTop: "1rem" }}>
              <div className="col" style={{ textAlign: "start" }}>
                <span>{payment.gomValue.toLocaleString()} Gom</span>
              </div>
              <div className="col" style={{ textAlign: "end" }}>
                <span>{payment.wonValue.toLocaleString()} 원</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <div className="row">
          <div className="col" style={{ textAlign: "start" }}>
            Total {totalGomValue.toLocaleString()} Gom
          </div>
          <div className="col" style={{ textAlign: "end" }}>
            Total {totalWonValue.toLocaleString()} 원
          </div>
        </div>

        <S.BackButton onClick={() => navigate(-1)}>돌아가기</S.BackButton>

      </S.ListBox>

    
    </div>
  )
}