import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    console.log(userData);
    alert("Login Successful");
  };

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>Welcome back. Continue planning your trip.</p>

        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button className="primary-button full" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
