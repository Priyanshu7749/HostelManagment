import React, { useState } from 'react';
import './bookroom.css';
import { Link } from 'react-router-dom';
import { db } from './firebase'; // Adjust the path according to your project structure
import { collection, addDoc } from 'firebase/firestore';

function Bookroom() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        parentsMobile: '',
        mobileNumber: '',
        gender: '',
        enrollmentNumber: '',
        collegeName: '',
        sem: '',
        courseName: '',
        state: '',
        city: '',
        pincode: '',
        mess: '',
        admissionDate: '',
        hostel: '',
        roomPreference: '',
        permanentAddress: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validate fields that should contain only letters
        if (['firstName', 'lastName', 'collegeName', 'courseName', 'city'].includes(name)) {
            if (!/^[a-zA-Z\s]*$/.test(value)) {
                setErrors({
                    ...errors,
                    [name]: `${name.replace(/([A-Z])/g, ' $1')} should contain only letters`
                });
            } else {
                const newErrors = { ...errors };
                delete newErrors[name];
                setErrors(newErrors);
            }
        }
    };

    const handleKeyPress = (e, type) => {
        let regex;
        if (type === 'letters') {
            regex = /^[a-zA-Z\s]*$/;
        } else if (type === 'numbers') {
            regex = /^[0-9]*$/;
        }
        if (!regex.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields before submission
        const newErrors = {};
        if (!/^[a-zA-Z\s]*$/.test(formData.firstName)) {
            newErrors.firstName = 'First Name should contain only letters';
        }
        if (!/^[a-zA-Z\s]*$/.test(formData.lastName)) {
            newErrors.lastName = 'Last Name should contain only letters';
        }
        if (!/^[a-zA-Z\s]*$/.test(formData.collegeName)) {
            newErrors.collegeName = 'College Name should contain only letters';
        }
        if (!/^[a-zA-Z\s]*$/.test(formData.courseName)) {
            newErrors.courseName = 'Course Name should contain only letters';
        }
        if (!/^[a-zA-Z\s]*$/.test(formData.city)) {
            newErrors.city = 'City should contain only letters';
        }
        if (!/^[0-9]*$/.test(formData.parentsMobile)) {
            newErrors.parentsMobile = 'Parent Mobile Number should contain only numbers';
        }
        if (!/^[0-9]*$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Mobile Number should contain only numbers';
        }
        if (!/^[0-9]*$/.test(formData.enrollmentNumber)) {
            newErrors.enrollmentNumber = 'Enrollment Number should contain only numbers';
        }
        if (!/^[0-9]*$/.test(formData.sem)) {
            newErrors.sem = 'SEM should contain only numbers';
        }
        if (!/^[0-9]*$/.test(formData.pincode)) {
            newErrors.pincode = 'Pincode should contain only numbers';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                await addDoc(collection(db, 'bookings'), {
                    ...formData,
                    date: new Date()
                });

                alert('Booking submitted successfully.');

                // Reset the form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    parentsMobile: '',
                    mobileNumber: '',
                    gender: '',
                    enrollmentNumber: '',
                    collegeName: '',
                    sem: '',
                    courseName: '',
                    state: '',
                    city: '',
                    pincode: '',
                    mess: '',
                    admissionDate: '',
                    hostel: '',
                    roomPreference: '',
                    permanentAddress: ''
                });
            } catch (error) {
                console.error('Error submitting booking:', error);
                alert('Error submitting booking. Please try again.');
            }
        }
    };

    return (
        <div className="main-div1">
            <nav>
                <div className="container main-nav flex">
                    <a href="#" className="company-logo">
                        <img src="./images/logo.png" alt="company logo" />
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
            <div className="booking-Rooms">
                <p className="booking-room-heading"> Book Your Room now <br /> with simple steps!! </p>
                <img className="booking-room-image" src="./images/booking-hostel1.jpg" alt="Error found!" />
            </div>

            <div className="gunihelpdesk123"><br />
                <h2 className="headng123123">Book Your Hostel by filling this Form</h2><br />
            </div>
            <div className="main-for-start345">
                <form onSubmit={handleSubmit} method="post" encType="multipart/form-data" className="form-elements">
                    <input type="text" name="firstName" placeholder="First Name" className="fname labelfiled123" value={formData.firstName} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'letters')} required />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                    <input type="text" name="lastName" placeholder="Last Name" className="lname labelfiled123" value={formData.lastName} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'letters')} required />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                    <input type="text" name="email" placeholder="Email" className="Emailid1 labelfiled123" value={formData.email} onChange={handleChange} required />
                    <input type="text" name="parentsMobile" maxLength={10} placeholder="Parents Mobile Number" className="pmobile labelfiled123" value={formData.parentsMobile} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'numbers')} required />
                    {errors.parentsMobile && <p className="error">{errors.parentsMobile}</p>}
                    <input type="text" name="mobileNumber" maxLength={10} placeholder="Mobile Number" className="MobileNumber labelfiled123" value={formData.mobileNumber} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'numbers')} required />
                    {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
                    <select name="gender" className="Gender labelfiled123" value={formData.gender} onChange={handleChange} required>
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="text" name="enrollmentNumber" placeholder="Enrollment Number" className="Enrollment123 labelfiled123" value={formData.enrollmentNumber} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'numbers')} required />
                    {errors.enrollmentNumber && <p className="error">{errors.enrollmentNumber}</p>}
                    <input type="text" name="collegeName" placeholder="College Name" className="CollegeName1 labelfiled123" value={formData.collegeName} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'letters')} required />
                    {errors.collegeName && <p className="error">{errors.collegeName}</p>}
                    <input type="text" name="sem" placeholder="SEM" className="Semeter1 labelfiled123" value={formData.sem} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'numbers')} required />
                    {errors.sem && <p className="error">{errors.sem}</p>}
                    <input type="text" name="courseName" placeholder="Course Name" className="CourseName labelfiled123" value={formData.courseName} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'letters')} required />
                    {errors.courseName && <p className="error">{errors.courseName}</p>}
                    <select name="state" className="State labelfiled123" value={formData.state} onChange={handleChange} required>
                        <option value="">--State--</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text" name="city" placeholder="City" className="Cityname1 labelfiled123" value={formData.city} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'letters')} required />
                    {errors.city && <p className="error">{errors.city}</p>}
                    <input type="text" name="pincode" placeholder="Pincode" className="Pincode labelfiled123" value={formData.pincode} onChange={handleChange} onKeyPress={(e) => handleKeyPress(e, 'numbers')} required />
                    {errors.pincode && <p className="error">{errors.pincode}</p>}
                    <select name="mess" className="Mess labelfiled123" value={formData.mess} onChange={handleChange} required>
                        <option value="">--Mess--</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                    </select>
                    <input type="date" placeholder="Admission Date" name="admissionDate" className="Admission-date labelfiled123" value={formData.admissionDate} onChange={handleChange} /><br />
                    <select name="hostel" className="Select-Hostel labelfiled123" value={formData.hostel} onChange={handleChange} required>
                        <option value="">Select Hostel</option>
                        <option value="A-Block">A-Block</option>
                        <option value="B-Block">B-Block</option>
                        <option value="C-Block">C-Block</option>
                        <option value="D-Block">D-Block</option>
                        <option value="E-Block">E-Block</option>
                        <option value="F-Block">F-Block</option>
                        <option value="G-Block">G-Block</option>
                    </select>
                    <select name="roomPreference" className="Room-Preference labelfiled123" value={formData.roomPreference} onChange={handleChange} required>
                        <option value="">Room Preference</option>
                        <option value="AC">AC</option>
                        <option value="NON-AC">NON-AC</option>
                    </select><br />
                    <textarea name="permanentAddress" className="textarea1212 labelfiled123" placeholder="Permanent address" style={{ borderRadius: '8px' }} value={formData.permanentAddress} onChange={handleChange} cols="41" rows="5"></textarea><br />
                    <p className='rednote rednote2'>**You are going to pay 16,000 to the hostel authorities**</p>
                    <button className="pay-now-button">Pay Now</button><br />
                </form>
            </div>

            
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

export default Bookroom;
