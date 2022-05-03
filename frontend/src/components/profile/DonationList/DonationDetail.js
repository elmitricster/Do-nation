export function DonationDetail({ donation }) {
  return (
    <div>
      <div
        style={{ textAlign: 'start', marginTop: '1rem', fontSize: '0.8rem' }}
      >
        {donation.nickname} | {donation.created_at}
      </div>
      <div className="row" style={{ marginTop: '1rem' }}>
        <div className="col-9" style={{ textAlign: 'start' }}>
          {donation.message}
        </div>
        <div className="col" style={{ textAlign: 'end' }}>
          {donation.donation.toLocaleString()} Gom
        </div>
      </div>
      <hr />
    </div>
  );
}
