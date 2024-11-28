import React, { useState } from 'react';
import './header.css'; // Assuming your CSS file is named HomePage.css
import GoogleMapComponent from './GoogleMapComponent';
import { Link } from 'react-router-dom';
import logo from 'C:/Logo.jpg'

function HomePage() {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    const { value } = e.target;
    const filteredValue = value.replace(/[^a-zA-Z ]/g, ''); // Allow only letters and spaces
    setName(filteredValue);
  };

  return (
    <div className="HomePage-container">
      <nav>
        <div className="container main-nav flex">
          <a href="/" className="company-logo">
            <img src={logo} alt="company logo" />
          </a>
          <div className="nav-links" id="nav-links">
            <ul className="flex">
              <li><p><Link to="/">Home</Link></p></li>
              <li><p><Link to="/gatepassform">Generate Receipt</Link></p></li>
              <li><p><Link to="/helpdesk">Register a Complaint</Link></p></li>
              <li><p><Link to="/bookhostel">Book Hostel</Link></p></li>
              <li><p><Link>Contact Us</Link></p></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Page Start */}
      <section className="HomePage">
        <div className="image-container">
          <img src="./images/homepage1.png" alt="Hostel" className="image" />
        </div>
        <div className="content-container">
          <h2 className="content">
            Welcome to our streamlined hostel management website,
            <br /> your all-in-one platform for seamless accommodation<br />
            management.
          </h2>
          <div className="view-more">
            <Link to='/bookhostel'><p className="view-more-button">View More</p></Link>
          </div>
        </div>
      </section>

      {/* Explore Menu */}
      <section id="Hostel-Block" className="section-p1">
        <h2 className='Explore'>Explore Hostel</h2>
        <div className="pro-container">
          {[
            { className: "Hostel-a", name: 'Hostel-A', description: 'Hostel A provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
            { name: 'Hostel-B', description: 'Hostel B provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
            { name: 'Hostel-C', description: 'Hostel C provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.', image: './images/Hostel.png' },
          ].map((hostel) => (
            <HostelCard key={hostel.name} {...hostel} />
          ))}

          <div className="con2">
            <div className="outer-circle">
              <Link to='/exploremore'>
                <div className="inner-circle"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="Leave-Message" className="section-p2">
        <div className="contact-form">
          <form>
            <h2 id='leavemsg'>Let me Message Us <i id='envelope' className="fas fa-envelope"></i></h2>
            <input type="text" id="name" name="name" placeholder='Name:' value={name} onChange={handleNameChange} /><br />
            <input type="email" id="email" name="email" placeholder='E-mail' /><br />
            <textarea id="message" name="message" placeholder='Send us a message:' ></textarea><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className='Googlemap'>
          <GoogleMapComponent />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="/" className="company-logo">
                <img src="./images/Logoooo.png" alt="company logo" /></a>
              <h6>Address</h6>
              <p className="text-justify">
                Ganpat Vidyanagar Mehsana-Gozaria, Highway,
                Kherva, <br />Gujarat 384012
                Ganpat University (GUNI), India
              </p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6>About Us</h6>
              <ul className="footer-links">
                <li><a href="/">About Us</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Blogs</a></li>
                <li><a href="/">HomePage</a></li>
                <li><a href="/">Templates</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Contribute</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Sitemap</a></li>
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
                <a href="/">
                  <span className="logo">Ganpat University.</span>
                </a>
              </p>
            </div>
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/ganpatuni/"><i className="fab fa-facebook-f"></i></a></li>
              <li><a className="twitter" href="https://x.com/Ganpat_Uni?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2"><i className="fab fa-twitter"></i></a></li>
              <li><a className="dribbble" href="https://www.instagram.com/ganpatuniversity/?hl=en"><i className="fab fa-instagram"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/school/ganpat-university/?originalSubdomain=in"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Explore Menu
function HostelCard({ name, description, image }) {
  return (
    <div className="pro">
      <img src={image} alt={name} />
      <div className="des">
        <span className="HostelName"><h4>{name}</h4></span>
        <h5>{description}</h5>
      </div>
      <Link to="/bookroom">
        <a href="/" className="Book-Now-button">
          Book Now
        </a>
      </Link>
    </div>
  );
}

export default HomePage;
