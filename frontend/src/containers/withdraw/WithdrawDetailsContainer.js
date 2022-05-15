import { DateSearch } from "components/withdraw/WithdrawDetails/DateSearch";
import { WithdrawDetails } from "components/withdraw/WithdrawDetails/WithdrawDetails";
import { useSelector } from "react-redux";

export function WithdrawDetailsContainers() {
  const { withdraw } = useSelector(({ withdraw }) => ({
    startDate: withdraw.startDate,
    endDate: withdraw.endDate,
  }));

  return(
    <div className='container'>
      <DateSearch />
      <WithdrawDetails />
    </div>
  )
}