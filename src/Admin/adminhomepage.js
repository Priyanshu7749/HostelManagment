import React, { useState, useEffect } from 'react';
import { db } from 'C:/Users/priyanshu199/OneDrive/Desktop/cp2/src/Login_Signup/firebase.js'; // Import the Firestore instance
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function AdminHomePage() {


    return (
        <div className="admin-home-page">
            <nav>
                <div className="container main-nav flex">
                    <a href="#" className="company-logo">
                        <img src="./images/Logo.png" alt="company logo" />
                    </a>
                    <div className="nav-links" id="nav-links">
                        <ul className="flex">
                            <li><p><Link to='/adminhomepage'>HomePage</Link></p></li>
                            <li><p><Link to="/userpage">Users</Link></p></li>
                            <li><p><Link to="/gatepassapproval">GatePass Approval</Link></p></li>
                            <li><p><Link to="/adminhelpdesk">Helpdesk</Link></p></li>
                            <li><p><Link to="/adminbookings">Room Booking</Link></p></li>
                        </ul>
                    </div>
                </div>
            </nav>


            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <a href="#" className="company-logo">
                                <img src="./images/Logoooo.png" alt="company logo" /></a>
                            <h6>Address</h6>
                            <p className="text-justify">
                                Ganpat Vidyanagar Mehsana-Gozaria, Highway,
                                Kherva, <br></br>Gujarat 384012
                                Ganpat University (GUNI), India
                            </p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h6>About Us</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">Blogs</a>
                                </li>
                                <li>
                                    <a href="#">HomePage</a>
                                </li>
                                <li>
                                    <a href="#">Templates</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Contribute</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="small" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="FF">
                            <p className="copyright-text">
                                Copyright © 2020 All Rights Reserved by{' '}
                                <a href="#">
                                    <span className="logo">Ganpat University.</span>
                                </a>
                            </p>
                        </div>
                        <div className="icons">
                            <ul className="social-icons">
                                <li>
                                    <a className="facebook" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="dribbble" href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="linkedin" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div >

    );
}

export default AdminHomePage;
