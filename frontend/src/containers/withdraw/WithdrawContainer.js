import { AccountAuth } from "components/withdraw/AccountAuth";
import { Withdraw } from "components/withdraw/Withdraw";
import { useState } from "react"

export function WithdrawConatiner() {
  const [isAccount, setIsAccount] = useState(false);

  return (
    <div className="container">
      {isAccount ?
        <Withdraw isAccount={isAccount}/>
      :
        <AccountAuth setIsAccount={setIsAccount}/>
      }
    </div>
  )
}