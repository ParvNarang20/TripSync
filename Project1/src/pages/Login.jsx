import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    alert("Login Successful ✅");
  };

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={card}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          style={input}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          style={input}
        />

        <button style={button}>Login</button>
      </form>
    </div>
  );
}

export default Login;

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
};

const card = {
  padding: "30px",
  width: "300px",
  borderRadius: "12px",
  textAlign: "center",
  background: "#fff"
};

const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const button = {
  width: "100%",
  padding: "10px",
  background: "#0d1b2a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};
