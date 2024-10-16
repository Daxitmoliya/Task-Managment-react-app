import React, { useState } from "react";
import { auth } from "../../firebase"; 
import { useNavigate, Link } from "react-router-dom"; 
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <h2>Create an Account</h2>
        <p>Signup to get started</p>
        {error && <p className="signup__error">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup__input"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup__input"
          />
          <button type="submit" className="signup__button">Signup</button>
        </form>
        <p className="signup__login">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
