import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getCityName } from "../data/travelData";
import { getHotels } from "../services/travelApi";

function Hotels() {
  const location = useLocation();
  const selectedCity = getCityName(location.state?.city);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHotels() {
      setLoading(true);
      try {
        const data = await getHotels(selectedCity);
        setHotels(data);
      } catch (error) {
        console.error(error);
        setHotels([]);
      } finally {
        setLoading(false);
      }
    }

    loadHotels();
  }, [selectedCity]);

  return (
    <main className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">Hotels</p>
        <h1>Stays in {selectedCity}</h1>
        <p>More cards, real destination names, local areas, ratings, and prices.</p>
      </section>

      {loading ? (
        <p className="empty-state">Loading hotels...</p>
      ) : hotels.length ? (
        <section className="card-grid">
          {hotels.map((hotel) => (
            <article className="travel-card" key={`${hotel.name}-${hotel.area}`}>
              <div>
                <span className="pill">{hotel.tag}</span>
                <h2>{hotel.name}</h2>
                <p>{hotel.area}, {selectedCity}</p>
              </div>

              <div className="meta-row">
                <span>Rating {hotel.rating}</span>
                <strong>Rs {hotel.price.toLocaleString("en-IN")}</strong>
              </div>

              <button className="primary-button full">Book Now</button>
            </article>
          ))}
        </section>
      ) : (
        <p className="empty-state">No hotels found for {selectedCity}.</p>
      )}
    </main>
  );
}

export default Hotels;
