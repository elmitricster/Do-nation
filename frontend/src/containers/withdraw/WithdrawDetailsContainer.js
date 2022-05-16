import { DateSearch } from "components/withdraw/WithdrawDetails/DateSearch";
import WithdrawDetails from "components/withdraw/WithdrawDetails/WithdrawDetails";
import { useSelector } from "react-redux";

export function WithdrawDetailsContainers() {
  const { withdraw } = useSelector(({ withdraw }) => ({
    withdraw: withdraw,
  }));

  return(
    <div className='container'>
      <DateSearch />
      <WithdrawDetails startDate={withdraw.startDate} endDate={withdraw.endDate} isSearched={withdraw.isSearched}/>
    </div>
  )
}