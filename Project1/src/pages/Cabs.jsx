import { useState } from "react";

function Cabs() {
  const [city, setCity] = useState("");
  const [cabs, setCabs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCabs = async () => {
    if (!city) {
      alert("Enter a city first");
      return;
    } 

    setLoading(true);

    try {
      // Fake API call (simulate real API)
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      // Convert API data into cab format
      const cabList = data.slice(0, 6).map((item) => ({
        name: item.company.name,
        city: city,
        price: Math.floor(Math.random() * 500) + 100
      }));

      setCabs(cabList);
    } catch (err) {
      console.error(err);
      alert("Error fetching data");
    }

    setLoading(false);
  };

  return (
    <div style={container}>
      
      <h1 style={{ color: "#0d1b2a" }}>Book a Cab</h1>

      {/* Search */}
      <div style={searchBox}>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={input}
        />

        <button
          onClick={fetchCabs}
          style={button}
          onMouseOver={(e) => (e.target.style.background = "#1b263b")}
          onMouseOut={(e) => (e.target.style.background = "#0d1b2a")}
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && <p style={{ marginTop: "20px" }}>Loading...</p>}

      {/* Results */}
      <div style={grid}>
        {cabs.map((cab, i) => (
          <div
            key={i}
            style={card}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h3>{cab.name}</h3>
            <p>Location: {cab.city}</p>
            <p>Fare: Rs {cab.price}</p>

            <button style={bookBtn}>Book Now</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Cabs;



// 🎨 Styles

const container = {
  padding: "40px",
  textAlign: "center"
};

const searchBox = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  gap: "10px"
};

const input = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  width: "250px"
};

const button = {
  padding: "10px 20px",
  background: "#0d1b2a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s"
};

const grid = {
  marginTop: "30px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px"
};

const card = {
  padding: "20px",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  transition: "0.3s"
};

const bookBtn = {
  marginTop: "10px",
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  background: "#1b263b",
  color: "white",
  cursor: "pointer"
};
