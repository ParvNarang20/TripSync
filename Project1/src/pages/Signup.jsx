import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    console.log(userData);
    alert("Signup Successful");
  };

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <p>Create your TripSync account in a few seconds.</p>

        <label>
          Name
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

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
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button className="primary-button full" type="submit">
          Signup
        </button>
      </form>
    </main>
  );
}

export default Signup;
