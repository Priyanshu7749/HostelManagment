import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgetpassword.css'; // Assuming you have a CSS file for styling
import { auth } from './firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
    } catch (error) {
      console.error("Password reset error:", error);
      alert("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div className="forget-password-container">
      <div className="left-half"></div>
      <div className="right-half">
        <div className="logo">
          <img src="./images/logo.png" alt="login" className="loginimg" />
          <p>"Forget your password?<br />
            No worries. We got you covered."</p>
        </div>
        <form onSubmit={handleResetPassword}>
          <div className="forget-password-form">
            {resetEmailSent ? (
              <p>An email has been sent to {email} with instructions to reset your password.</p>
            ) : (
              <>
                <input
                  type="email"
                  className='e1'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                /><br />
                <button type="submit" className="input-submit">
                  Reset Password
                </button>
              </>
            )}
            <p>
              <Link to="/">Back to Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
