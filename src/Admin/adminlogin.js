import React, { useState } from 'react';
import './adminlogin.css';
import { auth } from 'C:/Users/priyanshu199/OneDrive/Desktop/cp2/src/Login_Signup/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom'; // Import Link component

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (email === 'admin@gmail.com' && password === 'admin') {
                alert('Logged in successfully');
                // Redirect to homepage after successful login
                window.location.href = '/dashboard';
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="admin-login">
            <div className="admin-login-form">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Login</button>
                </form>
                
            </div>
        </div>
    );
}

export default AdminLogin;
