import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { cities, getCityName } from "../data/travelData";
import { getFlights } from "../services/travelApi";

function Flights() {
  const location = useLocation();
  const selectedCity = getCityName(location.state?.city);
  const fromCity = location.state?.from || "";
  const airportCode = cities.find((city) => city.name === selectedCity)?.airport;
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFlights() {
      setLoading(true);
      try {
        const data = await getFlights({ from: fromCity, to: selectedCity });
        setFlights(data);
      } catch (error) {
        console.error(error);
        setFlights([]);
      } finally {
        setLoading(false);
      }
    }

    loadFlights();
  }, [fromCity, selectedCity]);

  return (
    <main className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">Flights</p>
        <h1>Flights to {selectedCity} {airportCode && `(${airportCode})`}</h1>
        <p>Flight cards now include route, flight number, timing, and fare.</p>
      </section>

      {loading ? (
        <p className="empty-state">Loading flights...</p>
      ) : flights.length ? (
        <section className="card-grid">
          {flights.map((flight) => (
            <article className="travel-card" key={flight.flightNo}>
              <div>
                <span className="pill">{flight.flightNo}</span>
                <h2>{flight.airline}</h2>
                <p>{flight.from} to {flight.to}</p>
              </div>

              <div className="time-row">
                <span>{flight.depart}</span>
                <span className="line" />
                <span>{flight.arrive}</span>
              </div>

              <div className="meta-row">
                <span>Non-stop</span>
                <strong>Rs {flight.price.toLocaleString("en-IN")}</strong>
              </div>

              <button className="primary-button full">Book Flight</button>
            </article>
          ))}
        </section>
      ) : (
        <p className="empty-state">No flights found for {selectedCity}.</p>
      )}
    </main>
  );
}

export default Flights;
