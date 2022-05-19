import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DateSearch } from "./paymentDetails/DateSearch";
import * as S from './Style';
import { apiInstance } from "api";

export function PaymentDetails({payment}) {
  const [myList, setMyList] = useState(
    []
  );

  const [totalGomValue, setTotalGomValue] = useState(0);
  const [totalWonValue, settotalWonValue] = useState(0);
  const navigate = useNavigate();
  const api = apiInstance();

  const getPayments = async () => {
    const response = await api.get('/payment')
    return response
  };

  useEffect(() => {
    getPayments()
      .then(res => {
        setMyList(res.data)
      })
  }, [])

  useEffect(() => {
    var resultGom = 0;
    var resultWon = 0;
    myList.map((payment) => {
      resultGom += parseInt(payment.paymentPoint);
      resultWon += parseInt(payment.paymentMoney);
    })
    setTotalGomValue(resultGom);
    settotalWonValue(resultWon);
  }, [myList])

  return(
    <div>
      <DateSearch />
      <S.ListBox style={{ marginTop: "3rem" }}>
        <div style={{ fontWeight: "bold", textAlign: "start", fontSize: "1.2rem" }}>
          충전내역
        </div>
        <br />
        <S.PaymentListBox>
        {myList.map((payment) => (
          <div key={payment.paymentTime}>
            <div style={{ textAlign: "start", marginTop: "1rem", fontSize: "0.8rem" }}>
              {payment.paymentTime.substr(0, 10)}
            </div>
            <div className="row" style={{ marginTop: "1rem" }}>
              <div className="col" style={{ textAlign: "start" }}>
                <span>{payment.paymentPoint.toLocaleString()} Gom</span>
              </div>
              <div className="col" style={{ textAlign: "end" }}>
                <span>{payment.paymentMoney.toLocaleString()} 원</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
        </S.PaymentListBox>
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