import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert("Please verify your email before logging in.");
        auth.signOut(); // Sign out the user if the email is not verified
        return;
      }

      console.log(userCredential);
      alert("Logged in successfully");
      navigate("/homepage");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="left-half"></div>
      <div className="right-half">
        <div className="logo">
          <img src="./images/logo.png" alt="login" className="loginimg" />
          <p>"Start your hostel journey with
            a quick Login."</p>
        </div>
        <form onSubmit={signIn}>
          <div className="login-form">
            <input type="email" className='e2' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <p className="pass2">
              <Link to="/forgetpassword">Forget Password?</Link>
            </p>
            <button type="submit" name="submit" className="input-submit">
              Login
            </button>
            <p>
              <Link to="/signup">Don't have an account?</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
