import React from "react";
import travelData from "../assets/travelData";

const Flights = () => {
  const city = localStorage.getItem("city") || "Delhi";

  const flights = travelData.flights[city] || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Flights to {city}</h1>

      {flights.length > 0 ? (
        <div style={styles.cardContainer}>
          {flights.map((flight, index) => (
            <div key={index} style={styles.card}>
              <h2>{flight.airline}</h2>

              <p>
                {flight.from} → {flight.to}
              </p>

              <p>Departure: {flight.time}</p>

              <p>Price: ₹{flight.price}</p>

              <button style={styles.button}>Book Flight</button>
            </div>
          ))}
        </div>
      ) : (
        <h2>No Flights Available</h2>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },

  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    border: "1px solid gray",
    borderRadius: "10px",
    padding: "20px",
  },

  button: {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    border: "none",
    background: "black",
    color: "white",
    cursor: "pointer",
  },
};

export default Flights;
