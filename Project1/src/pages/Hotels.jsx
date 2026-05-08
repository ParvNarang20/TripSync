import React from "react";
import travelData from "./travelData";

const Hotels = () => {
  const city = localStorage.getItem("city") || "Delhi";

  const hotels = travelData.hotels[city] || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hotels in {city}</h1>

      {hotels.length > 0 ? (
        <div style={styles.cardContainer}>
          {hotels.map((hotel, index) => (
            <div key={index} style={styles.card}>
              <h2>{hotel.name}</h2>

              <p>Price: ₹{hotel.price}</p>

              <p>Rating: ⭐ {hotel.rating}</p>

              <button style={styles.button}>Book Now</button>
            </div>
          ))}
        </div>
      ) : (
        <h2>No Hotels Found</h2>
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

export default Hotels;
