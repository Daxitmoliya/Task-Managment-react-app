import React, { useState } from "react";
import { auth } from "../../firebase"; 
import { useNavigate, Link } from "react-router-dom"; 
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

function Login({ setUser }) { // Receive setUser as prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Update user state on successful login
      navigate("/"); // Redirect to TaskContainer
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user); // Update user state on Google login
      navigate("/"); // Redirect to TaskContainer
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2>Welcome Back!</h2>
        <p>Login to your account</p>
        {error && <p className="login__error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login__input"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login__input"
          />
          <button type="submit" className="login__button">Login</button>
        </form>
        <div className="login__divider">
          <p>or</p>
        </div>
        <button onClick={handleGoogleLogin} className="login__googleButton">Login with Google</button>
        <p className="login__signup">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
