import { DateSearch } from "components/withdraw/WithdrawDetails/DateSearch";
import { WithdrawDetails } from "components/withdraw/WithdrawDetails/WithdrawDetails";

export function WithdrawDetailsContainers() {

  return(
    <div className='container'>
      <DateSearch />
      <WithdrawDetails />
    </div>
  )
}