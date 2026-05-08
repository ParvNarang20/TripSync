import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();


  const cityImages = {
    delhi:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5",

    mumbai:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875",

    goa:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  };

  const backgroundImage =
    cityImages[destination.toLowerCase()] ||
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";


  const handleHotels = () => {
    localStorage.setItem("city", destination);
    navigate("/hotels");
  };

  const handleFlights = () => {
    localStorage.setItem("city", destination);
    navigate("/flights");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          padding: "30px",
          borderRadius: "15px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>🌍 TripSync</h1>


        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "20px",
            justifyContent: "center",
          }}
        >

          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            style={{
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
              border: "none",
            }}
          />

          {/* TO */}
          <input
            type="text"
            placeholder="To"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>


        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleHotels}
            style={{
              padding: "10px 20px",
              background: "#00b4d8",
              border: "none",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Hotels
          </button>

          <button
            onClick={handleFlights}
            style={{
              padding: "10px 20px",
              background: "#0077b6",
              border: "none",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Flights
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
