import React, { useState } from 'react';
import './helpdesk.css';
import { Link } from 'react-router-dom';
import { db, storage } from './firebase'; // Adjust the path according to your project structure
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function Helpdesk() {
    const [formData, setFormData] = useState({
        category: '',
        enrollment: '',
        email: '',
        mobile: '',
        request: '',
        helpTopic: '',
        remark: '',
        roomNo: '',
        attachment: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (['enrollment', 'mobile', 'roomNo'].includes(name) && isNaN(value)) {
            // Only allow numbers
            return;
        }
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        const { category, enrollment, email, mobile, request, helpTopic, remark, roomNo, attachment } = formData;
        if (!category || !enrollment || !email || !mobile || !request || !helpTopic || !remark || !roomNo || !attachment) {
            alert('All fields are required.');
            return;
        }

        try {
            let attachmentUrl = '';
            if (attachment) {
                const attachmentRef = ref(storage, `attachments/${uuidv4()}`);
                await uploadBytes(attachmentRef, attachment);
                attachmentUrl = await getDownloadURL(attachmentRef);
            }

            await addDoc(collection(db, 'helpdesk'), {
                category,
                enrollment,
                email,
                mobile,
                request,
                helpTopic,
                remark,
                roomNo,
                attachmentUrl,
                date: new Date()
            });

            alert('Your request has been submitted successfully.');
            setFormData({
                category: '',
                enrollment: '',
                email: '',
                mobile: '',
                request: '',
                helpTopic: '',
                remark: '',
                roomNo: '',
                attachment: null
            });
        } catch (error) {
            console.error('Error submitting request:', error);
            alert('Error submitting request. Please try again.');
        }
    };

    return (
        <div className="main-div1">
            <nav>
                <div className="container main-nav flex">
                    <Link to="/" className="company-logo">
                        <img src="./images/logo.png" alt="company logo" />
                    </Link>
                    <div className="nav-links" id="nav-links">
                        <ul className="flex">
                            <li><p><Link to="/homepage">Home</Link></p></li>
                            <li><p><Link to="/gatepassform">Generate Receipt</Link></p></li>
                            <li><p><Link to="/helpdesk">Register a Complaint</Link></p></li>
                            <li><p><Link to="/bookhostel">Book Hostel</Link></p></li>
                            <li><p><Link to="/">Contact Us</Link></p></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="image-1">
                <img className="image-helpdesk" src="/images/HelpDesk.png" alt="Error found!" />
            </div>
            <div className="gunihelpdesk">
                <br />
                <h2>GUNI Help Desk</h2>
                <br />
            </div>
            <div className="helpdesk-page">
                <form onSubmit={handleSubmit} className="form-elements2">
                    <label htmlFor="category">Select Your Category:</label>
                    <select name="category" className="category labelfiled" value={formData.category} onChange={handleChange} required>
                        <option value="">--Please Select--</option>
                        <option value="Student">Student</option>
                        <option value="Staff">Staff</option>
                    </select> <br />

                    <label htmlFor="Enrollment">Enrollment No:</label>
                    <input type="text" name="enrollment" className="Enrollment labelfiled" pattern="\d*" value={formData.enrollment} onChange={handleChange} required /><br />

                    <label htmlFor="Emailfiled">Email:</label>
                    <input type="email" name="email" className="Emailfiled labelfiled" value={formData.email} onChange={handleChange} required /><br />

                    <label htmlFor="Mobile">Mobile No:</label>
                    <input type="text" name="mobile" maxLength={10} pattern="\d*" className="Mobilefiled labelfiled" value={formData.mobile} onChange={handleChange} required /><br />

                    <label htmlFor="request">Service Request:</label>
                    <select name="request" className="request labelfiled" value={formData.request} onChange={handleChange} required>
                        <option value="">--Please Select--</option>
                        <option value="Institute">Institute</option>
                        <option value="University">University</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Staff Quarters">Staff Quarters and Bungalows</option>
                    </select><br />

                    <label htmlFor="Help_topic">Help Topic:</label>
                    <select name="helpTopic" className="Help_topic labelfiled" value={formData.helpTopic} onChange={handleChange} required>
                        <option value="">--Please Select--</option>
                        <option value="Electric">Electric Service</option>
                        <option value="Estate">Estate Service</option>
                        <option value="IT">IT Service</option>
                    </select><br />

                    <label htmlFor="Remark">Remark:</label>
                    <input type="text" name="remark" className="Remark labelfiled" value={formData.remark} onChange={handleChange} required /><br />

                    <label htmlFor="RoomNo">Room No:</label>
                    <input type="text" name="roomNo" pattern="\d*" className="Roomnumber labelfiled" value={formData.roomNo} onChange={handleChange} required /><br />

                    <label htmlFor="attachment">Attachment:</label>
                    <input type="file" name="attachment" className="myFile attachment labelfiled" accept=".png, .jpg, .jpeg, .mp4" onChange={handleChange} required />

                    <button type="submit" className="submitHelpButton">Generate</button>
                    <br /><br /><br />
                </form>
            </div>

            {/* Footer part */}
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <a href="/" className="company-logo">
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
                                    <a href="/">About Us</a>
                                </li>
                                <li>
                                    <a href="/">Careers</a>
                                </li>
                                <li>
                                    <a href="/">Blogs</a>
                                </li>
                                <li>
                                    <a href="/">HomePage</a>
                                </li>

                                <li>
                                    <a href="/">Templates</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="/">About Us</a>
                                </li>
                                <li>
                                    <a href="/">Contact Us</a>
                                </li>
                                <li>
                                    <a href="/">Contribute</a>
                                </li>
                                <li>
                                    <a href="/">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/">Sitemap</a>
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
                                <a href="/">
                                    <span className="logo">Ganpat University.</span>
                                </a>
                            </p>
                        </div>


                        <ul className="social-icons">
                            <li>
                                <a className="facebook" href="https://www.facebook.com/ganpatuni/">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href="https://x.com/Ganpat_Uni?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className="dribbble" href="https://www.instagram.com/ganpatuniversity/?hl=en">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a className="linkedin" href="https://www.linkedin.com/school/ganpat-university/?originalSubdomain=in">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </footer>

        </div>
    );
}

export default Helpdesk;
