import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cities, getCityImage, getCityName } from "../data/travelData";

function Home() {
  const navigate = useNavigate();
  const [trip, setTrip] = useState({ from: "Mumbai", to: "Delhi" });

  const destination = getCityName(trip.to);
  const backgroundImage = getCityImage(destination);

  const handleChange = (event) => {
    setTrip({ ...trip, [event.target.name]: event.target.value });
  };

  const openHotels = () => {
    navigate("/hotels", { state: { city: destination } });
  };

  const openFlights = () => {
    navigate("/flights", {
      state: { from: trip.from, city: destination },
    });
  };

  return (
    <main className="hero-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section className="hero-panel">
        <p className="eyebrow">Plan smarter trips across India</p>
        <h1>TripSync</h1>
        <p className="hero-copy">
          Search hotels and flights for real Indian destinations with clean,
          ready-to-connect data.
        </p>

        <div className="search-row">
          <label>
            From
            <input
              list="city-options"
              name="from"
              placeholder="From city"
              value={trip.from}
              onChange={handleChange}
            />
          </label>

          <span className="route-mark" aria-hidden="true">
            -
          </span>

          <label>
            To
            <input
              list="city-options"
              name="to"
              placeholder="Destination"
              value={trip.to}
              onChange={handleChange}
            />
          </label>

          <datalist id="city-options">
            {cities.map((city) => (
              <option key={city.name} value={city.name} />
            ))}
          </datalist>
        </div>

        <div className="button-row">
          <button className="primary-button" onClick={openHotels}>
            View Hotels
          </button>
          <button className="secondary-button" onClick={openFlights}>
            View Flights
          </button>
        </div>

        <div className="city-strip">
          {cities.slice(0, 5).map((city) => (
            <button
              key={city.name}
              className={city.name === destination ? "city-chip active" : "city-chip"}
              onClick={() => setTrip({ ...trip, to: city.name })}
            >
              {city.name}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
