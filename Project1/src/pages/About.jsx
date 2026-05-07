function About() {
  return (
    <div style={{
      padding: "50px 20px",
      maxWidth: "1000px",
      margin: "auto",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* Heading */}
      <h1 style={{
        textAlign: "center",
        color: "#0d1b2a",
        marginBottom: "20px"
      }}>
        About TripSync
      </h1>

      {/* Intro */}
      <p style={{
        textAlign: "center",
        fontSize: "18px",
        color: "#333",
        lineHeight: "1.6"
      }}>
        TripSync is a simple and efficient travel planning app that helps you
        explore flights, hotels, and cab options all in one place.
        It is designed to make your travel planning faster, easier, and smarter.
      </p>

      {/* Cards Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "40px"
      }}>

        <div style={cardStyle}>
          ✈️
          <h3>Flights</h3>
          <p>Compare flight options easily and find the best deals.</p>
        </div>

        <div style={cardStyle}>
          🏨
          <h3>Hotels</h3>
          <p>Discover comfortable stays at affordable prices.</p>
        </div>

        <div style={cardStyle}>
          🚗
          <h3>Cabs</h3>
          <p>Book transport quickly for a smooth journey.</p>
        </div>

        <div style={cardStyle}>
          ⚡
          <h3>Fast & Simple</h3>
          <p>Clean interface designed for quick and easy use.</p>
        </div>

      </div>

      {/* Extra Section */}
      <div style={{
        marginTop: "50px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#0d1b2a" }}>Our Mission</h2>
        <p style={{ maxWidth: "700px", margin: "10px auto", color: "#555" }}>
          Our goal is to simplify travel planning by bringing everything
          together in one platform. Whether you're booking a quick trip or
          planning a vacation, TripSync helps you stay organized.
        </p>
      </div>

      {/* Footer */}
      <p style={{
        marginTop: "40px",
        textAlign: "center",
        fontSize: "14px",
        color: "gray"
      }}>
        © 2026 TripSync | Built with React 🚀
      </p>

    </div>
  );
}

// Card styling (clean reusable)
const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  transition: "0.3s"
};

export default About;