export function WithdrawDetail({withdraw}) {
  return(
    <div>
      <div style={{ textAlign: "start", marginTop: "1rem", fontSize: "0.8rem" }}>
        {withdraw.date}
      </div>
      <div className="row" style={{ marginTop: "1rem" }}>
        <div className="col-9" style={{ textAlign: "start" }}>
          {withdraw.account}
        </div>
        <div className="col" style={{ textAlign: "end" }}>
          {withdraw.values.toLocaleString()} 원
        </div>
      </div>
      <hr />
    </div>
  )
}