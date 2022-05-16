import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setIsSearched } from "modules/withdraw";
import { WithdrawDetail } from "./WithdrawDetail";
import * as S from './Style';
import { apiInstance } from 'api';

export function WithdrawDetails({ startDate, endDate, isSearched }) {
  const [myList, setMyList] = useState();
  const [searchedList, setSearchedList] = useState();
  const [totalValue, setTotalValue] = useState(0);
  const navigate = useNavigate();
  const api = apiInstance();
  const dispatch = useDispatch();

  useEffect(() => {
    const getWithdrawDetails = async () => {
      const response = await api.get('/withdraw')
      setMyList(response.data)
      setSearchedList(response.data)

      var result = 0;
      response.data.map((withdraw) => result += withdraw.money)
      setTotalValue(result)
    }

    getWithdrawDetails();
  }, [])

  useEffect(() => {
    if (isSearched === true) {
      dispatch(setIsSearched(false))
      const startMSec = startDate.getTime() - startDate.getHours()*3600000 - startDate.getMinutes()*60000 - startDate.getSeconds()*1000 - startDate.getMilliseconds();
      const endMSec = endDate.getTime();
      
      const result = myList.filter(content => 
        startMSec <= new Date(content.withdrawTime).getTime() && new Date(content.withdrawTime).getTime() <= endMSec
      )

      setSearchedList(result);

      var total = 0;
      result.map((withdraw) => total += withdraw.money)
      setTotalValue(total)
    }
  }, [isSearched])

  const goBack = () => {
    navigate(-1);
  }

  return(
    <>
      {searchedList ? 
      <S.ListBox style={{ marginTop: "2rem" }}>
        <div style={{ fontWeight: "bold", textAlign: "start", fontSize: "1.2rem" }}>
          정산목록
        </div>
        {searchedList.map((withdraw) => (
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

export default WithdrawDetails;