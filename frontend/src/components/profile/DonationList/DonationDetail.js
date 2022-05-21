export function DonationDetail({ donation }) {
  return (
    <div>
      <div
        style={{ textAlign: 'start', marginTop: '1rem', fontSize: '0.8rem' }}
      >
        {donation.donator.profileNickName} | {donation.donateTime.substr(0, 10)}
      </div>
      <div className="row" style={{ marginTop: '1rem' }}>
        <div className="col-9" style={{ textAlign: 'start' }}>
          {donation.donateMessage}
        </div>
        <div className="col" style={{ textAlign: 'end' }}>
          {donation.donatePoint.toLocaleString()} Gom
        </div>
      </div>
      <hr />
    </div>
  );
}
