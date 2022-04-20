import { AccountAuth } from "components/withdraw/AccountAuth";
import { Withdraw } from "components/withdraw/Withdraw";
import { useState } from "react"

export function WithdrawConatiner() {
  const [isAccount, setIsAccount] = useState(true);

  return (
    <div className="container">
      {isAccount ?
        <Withdraw />
      :
        <AccountAuth />
      }
    </div>
  )
}