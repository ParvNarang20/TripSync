function Results({ tripData }) {
  return (
    <div className="results">
      <h2>Trip from {tripData.from} → {tripData.to}</h2>
      <p>Date: {tripData.date}</p>

      <div className="card">
        <h3>✈️ Flights</h3>
        <p>IndiGo - ₹5000</p>
        <p>Air India - ₹6500</p>
      </div>

      <div className="card">
        <h3>🏨 Hotels</h3>
        <p>OYO - ₹1500/night</p>
        <p>Marriott - ₹5000/night</p>
      </div>

      <div className="card">
        <h3>🚗 Transport</h3>
        <p>Uber - ₹300</p>
        <p>Rental Car - ₹1200/day</p>
      </div>
    </div>
  );
}

export default Results;
