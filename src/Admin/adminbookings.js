import React, { useState, useEffect } from 'react';
import { db } from '../Login_Signup/firebase'; // Adjust the path to your firebase config
 // Create and style this CSS file as needed
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'bookings'));
                const bookingsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    checkInDate: doc.data().checkInDate ? doc.data().checkInDate.toDate() : null,
                    checkOutDate: doc.data().checkOutDate ? doc.data().checkOutDate.toDate() : null
                }));
                setBookings(bookingsData);
            } catch (error) {
                console.error('Error fetching booking data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);


    return (
        <div className='mainuserpage'>
            <nav className="sidebar">
                <div className="logo">
                    <img src="./images/Logo.png" alt="Hostel Management Logo" />
                </div>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/userpage">Users</Link></li>
                    <li><Link to="/gatepassapproval">Gatepass Approval</Link></li>
                    <li><Link to="/adminhelpdesk">Help Desk</Link></li>
                    <li><Link to="/adminbookings">Room Booking</Link></li>
                    {/* <li><Link to="/accounts">Accounts</Link></li> */}
                </ul>
                <Link to="/adminlogin" className="logout">Logout</Link>
            </nav>
            <div className="user-page">
                <h2>Room Bookings</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>MobileNo</th>
                            <th>Parent MobileNo</th>
                            <th>Collge</th>
                            <th>Course</th>
                            <th>Semester</th>
                            <th>Enrollment No</th>
                            <th>Permanent Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Refernce Hostel</th>
                            <th>Mess</th>
                            <th>Admission Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.firstName}</td>
                                <td>{booking.lastName}</td>
                                <td>{booking.email}</td>
                                <td>{booking.gender}</td>
                                <td>{booking.mobileNumber}</td>
                                <td>{booking.parentsMobile}</td>
                                <td>{booking.collegeName}</td>
                                <td>{booking.courseName}</td>
                                <td>{booking.sem}</td>
                                <td>{booking.enrollmentNumber}</td>
                                <td>{booking.permanentAddress}</td>
                                <td>{booking.city}</td>
                                <td>{booking.state}</td>
                                <td>{booking.hostel}</td>
                                <td>{booking.mess}</td>
                                <td>{booking.admissionDate}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Bookings;
