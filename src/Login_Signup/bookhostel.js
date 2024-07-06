import React from 'react';
import './bookhostel.css';
import { Link } from 'react-router-dom';

function Bookhostel() {
    return (
        <div>
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
            <div className="main-div1812">
                <div className="img-div1812">
                    <img src="./images/Hostel.png" alt="Error!" />
                    <h2 className="description1212">Hostel-A</h2>
                    {/* <p className="description1212">Hostel A provides a vibrant and inclusive community, offering modern amenities for students from diverse backgrounds.</p> */}
                </div>
                <div className="content-side1812">
                    <h2 className="heading1812">Hostel Facility</h2>
                    <br /><br />
                    <p>
                        The campus consists of Several well built hostel blocks,both for girls
                        and boys with capacity of 3000 students. Each hostel consists of a
                        separate mess, administrative office, warden quarter. In addition to
                        well furnished rooms, the hostel is complete with facilities like free
                        hi speed Wi-Fi connection, gymnasium, medical center and other
                        amenities for shopping, sports, recreation and entertainment. A
                        shopping complex, consisting of about 20 shops, is constructed in the
                        vicinity of the hostel blocks and caters to the daily needs of the
                        students like groceries, stationery, laundry and grooming.
                    </p>

                    <ul className="divide1">
                        <li>Security check at the main gate of each Hostel.</li>
                        <li>Individual security guard at each hostel building.</li>
                        <li>Lady Warden at girl’s hostels.</li>
                    </ul>
                    <br />

                    <p>Admission Procedure</p>
                    <ul className="divide2">
                        <li>Step I: Visit Hostel Admission Cell</li>
                        <li>Step II: Select Hostel (Executive/AC/Non-AC)</li>
                        <li>Step III: Make Payment</li>
                    </ul>
                </div>
            </div>
            <div>
                <img className="hostelfees" src="./images/Hostelfees.png" alt="" />
            </div>
            <div className="instrustion">
                <p className="note1">Note :</p>
                <div className="instruction11">
                    <p>
                        1. * Applicable only for students having projects in the last
                        semester.
                    </p>
                    <p>
                        2. For AC Room Accommodation, the individual student has to bear an
                        Electricity bill as actual on a monthly basis.
                    </p>
                    <p>
                        3. The existing Hosteller student who passed out from one program
                        (i.e. Diploma/UG) and got admission in another program (UG/PG) will be
                        considered a new admission.
                    </p>
                    <p>
                        4. The above fees will apply to any new admission at the Institute of
                        University only except the Department of Maritime Studies &
                        International Student's Hostel.
                    </p>
                    <p>
                        5. For any information & admission related to Ganpat University
                        Hostel, you may contact:
                    </p>
                    <ul className="submain11">
                        <li>Mr Nitin Mishra, Sr. Administrative Officer, (M) 9661177706</li>
                        <li>Ms Bhavana Thakar, Assistant Chief Rector, (M) 94087 20414</li>
                        <li>Mr Jagdish Nitharwal, Assistant Warden, (M) 97850 69733.</li>
                    </ul>
                    <br /><br /><br />
                </div>
            </div><div className="main-division">
                <h2 className="heading-for-booking-facility">Hostel Amenities & Facilities</h2><br /><br />
                <div className="boxes">
                    <div className="boxS-1">
                        <h3>AC Hostels</h3>
                        <div className="sub-div11">
                            <div className="sub-content11">
                                <ul>
                                    <li>- The hostel rooms are spacious with natural <br />light and ventilation.</li>
                                    <li>- Room has an attached toilet and bathroom.</li>
                                    <li>- Each student is provided with a study table, chair.</li>
                                    <li>- Hostel has 24-hour electricity and water supply, water<br /> cooler, common telephone,<br /> and common TV room.</li>
                                    <li>- Secure Wi-Fi internet connectivity through <br /> high end firewall <br />and Hi-speed secured browsing.</li>
                                    <li>- AC, Wardrobe, Bed, Etc.</li>
                                    <li className="read-more"><u><a href="#">Read More</a></u></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="boxS-2">
                        <h3>Non -AC Hostel</h3>
                        <div className="sub-div-11">
                            <div>
                                <ul>
                                    <li>- The hostel rooms are spacious with natural<br /> light and ventilation.</li>
                                    <li>- Each room has an attached toilet and bathroom.</li>
                                    <li>- Each student is provided with a study table and chair.</li>
                                    <li>- Each hostel has 24-hour electricity and <br /> water supply, water cooler, common telephone, <br />and common TV room.</li>
                                    <li>- Secure Wi-Fi internet connectivity through <br />high end firewall and <br />Hi-speed secured browsing.</li>
                                    <li>- Wardrobe, Bed, Etc.</li>
                                    <li className="read-more-1"><u><a href="#">Read More</a></u></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br /><br /><div className="payment-method-details">
                <h2 className="mode-payment">MODE OF PAYMENT</h2><hr />
                <div className="feepayment">
                    <p className="fee-payment-info1">Pay Fee Offline Through Cheque/NEFT at any branch of Mehsana Urban Co. Opp. Bank</p><hr /><br />
                    <p className="fee-payment-info">Bank Detail</p>
                    <p className="fee-payment-info">Account Name: M D E F (Hostel)</p>
                    <p className="fee-payment-info">Name of Bank: The Mehsana Urban Co. Op. Bank Ltd.</p>
                    <p className="fee-payment-info">Account Number: 00261101000001</p>
                    <p className="fee-payment-info">IFSC Code: MSNU0000026</p>
                    <p className="fee-payment-info">Bank Branch: Ganpat University</p>
                    <div className="rednote">
                        <h3 className='rednote2'>Note:</h3>
                        <ul className='rednote3'>
                            <li className="rednote1">Send email of Transaction detail as per templet given below on admin.hostel@guni.ac.in</li>
                            <li className="rednote1">The confirmation of receipt of payment will be sent to you by email.</li>
                        </ul>
                    </div>
                </div>
                <hr /><br /><br /><br /><br />
                <div className="Gallery-photo">
                    <h2 className="heading-gallery3">Gallery</h2><br /><br />
                    <div className="images">
                        <img className="images-1" src="./images/h11.jpg" alt="Error!" />
                        <img className="images-1" src="./images/h21.png" alt="Error!" /><br></br>
                        <img className="images-2" src="./images/h31.png" alt="Error!" />
                    </div>
                </div>
                <br /><br />
            </div>
            {/* Footer part */}
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
    )
}
export default Bookhostel