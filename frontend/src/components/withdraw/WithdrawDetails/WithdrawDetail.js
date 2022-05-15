export function WithdrawDetail({withdraw}) {
  return(
    <div>
      <div style={{ textAlign: "start", marginTop: "1rem", fontSize: "0.8rem" }}>
        {withdraw.withdrawTime.substr(0, 10)}
      </div>
      <div className="row" style={{ marginTop: "1rem" }}>
        <div className="col-9" style={{ textAlign: "start" }}>
          우리은행 1002-051-123456
        </div>
        <div className="col" style={{ textAlign: "end" }}>
          {withdraw.money.toLocaleString()} 원
        </div>
      </div>
      <hr />
    </div>
  )
}