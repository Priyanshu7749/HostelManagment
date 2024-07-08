import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Login_Signup/firebase';
import './userpage.css';
import { Link } from 'react-router-dom';

function UserPage() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'users'));
                console.log('querySnapshot:', querySnapshot);
                const userDataArray = [];
                querySnapshot.forEach((doc) => {
                    console.log('doc.data():', doc.data());
                    userDataArray.push(doc.data());
                });
                console.log('userDataArray:', userDataArray);
                setUserData(userDataArray);
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };

        fetchUserData();
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
                <h2>User Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Institute</th>
                            <th>Semester</th>
                            <th>Gender</th>
                            <th>mobileNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.department}</td>
                                <td>{user.institute}</td>
                                <td>{user.sem}</td>
                                <td>{user.gender}</td>
                                <td>{user.mobile}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserPage;
