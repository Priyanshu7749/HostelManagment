import React from 'react';
import './Exploremore.css';
import { Link } from 'react-router-dom';

function Exploremore() {
    return (
        <div className='Explore-main'>
            <nav>
                <div className="container main-nav flex">
                    <a href="#" className="company-logo">
                        <img src="./images/Logo.png" alt="company logo" />
                    </a>
                    <div className="nav-links" id="nav-links">
                        <ul className="flex">
                            <li><p><Link to="/homepage">Home</Link></p></li>
                            <li><p><Link to="/gatepassform">Generate Receipt</Link></p></li>
                            <li><p><Link to="/helpdesk">Register a Complaint</Link></p></li>
                            <li><p><Link to="/bookhostel">Book Hostel</Link></p></li>
                            <li><p><Link>Contact Us</Link></p>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <section id="Hostel-Block" className="section-p1">
                <div class="search-container">

                    <input type="text" class="search-input" placeholder="Search..." />
                    <button class="search-button">Search</button>
                </div>
                <h2 className='Explore'>Explore Hostel</h2>
                <div className="pro-container">
                    {[
                        { name: 'Hostel-A', description: 'Hostel A provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
                        { name: 'Hostel-B', description: 'Hostel B provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
                        { name: 'Hostel-C', description: 'Hostel C provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
                        { name: 'Hostel-D', description: 'Hostel D provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
                        { name: 'Hostel-E', description: 'Hostel E provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
                        { name: 'Hostel-F', description: 'Hostel F provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
                        { name: 'Hostel-G', description: 'Hostel G provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
                        { name: 'Hostel-H', description: 'Hostel H provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
                        { name: 'Hostel-I', description: 'Hostel I provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },

                    ].map((hostel) => (
                        <HostelCard key={hostel.name} {...hostel} />
                    ))}

                </div>
            </section>

            {/* Footer Part */}
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

        </div>
    );
}
function HostelCard({ name, description, image }) {
    return (
        <div className="pro">
            <img src={image} alt={name} />
            <div className="des">
                <span class="HostelName"><h4>{name}</h4></span>
                <h5>{description}</h5>
            </div>
            <Link to="/bookroom">
                <a href="#" className="Book-Now-button">
                    Book Now
                </a>
            </Link>
        </div>
    );
}
export default Exploremore
