import React, { useState, useEffect } from 'react';
import { db } from 'C:/Users/priyanshu199/OneDrive/Desktop/cp2/src/Login_Signup/firebase.js'; // Adjust the path to your firebase config
import './gatepassapproval.css'; // Create and style this CSS file as needed
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function GatepassApproval() {
    const [gatepasses, setGatepasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGatepasses = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'gatePasses'));
                const gatepassesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    date: doc.data().date ? doc.data().date.toDate() : null
                }));
                setGatepasses(gatepassesData);
            } catch (error) {
                console.error('Error fetching gatepass data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGatepasses();
    }, []);

    const handleApprove = async (gatepassId) => {
        try {
            // Update status in Firestore
            await updateDoc(doc(db, 'gatePasses', gatepassId), {
                status: 'Approved'
            });
            // Send email notification to user for approval
            console.log(`Gatepass ${gatepassId} approved.`);
            // Update local state
            setGatepasses(prevState => prevState.map(gatepass => {
                if (gatepass.id === gatepassId) {
                    return { ...gatepass, status: 'Approved' };
                }
                return gatepass;
            }));
        } catch (error) {
            console.error('Error approving gatepass: ', error);
        }
    };

    const handleDecline = async (gatepassId) => {
        try {
            // Update status in Firestore
            await updateDoc(doc(db, 'gatePasses', gatepassId), {
                status: 'Declined'
            });
            // Send email notification to user for decline
            console.log(`Gatepass ${gatepassId} declined.`);
            // Update local state
            setGatepasses(prevState => prevState.map(gatepass => {
                if (gatepass.id === gatepassId) {
                    return { ...gatepass, status: 'Declined' };
                }
                return gatepass;
            }));
        } catch (error) {
            console.error('Error declining gatepass: ', error);
        }
    };

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
                    <li><Link to="/rent">Room Booking</Link></li>
                    {/* <li><Link to="/accounts">Accounts</Link></li> */}
                </ul>
                <Link to="/adminlogin" className="logout">Logout</Link>
            </nav>
            <div className="user-page">
                <h2>Gatepass Approvals</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Student Name</th>
                            <th>Mobile No</th>
                            <th>College</th>
                            <th>Program</th>
                            <th>Place to Go</th>
                            <th>Reason</th>
                            <th>Room No</th>
                            <th>Date & Time</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gatepasses.map(gatepass => (
                            <tr key={gatepass.id}>
                                <td>{gatepass.serialNumber}</td>
                                <td>{gatepass.name}</td>
                                <td>{gatepass.phoneNumber}</td>
                                <td>{gatepass.college}</td>
                                <td>{gatepass.program}</td>
                                <td>{gatepass.placeToGo}</td>
                                <td>{gatepass.reason}</td>
                                <td>{gatepass.roomNo}</td>
                                <td>{gatepass.date ? gatepass.date.toLocaleString() : 'N/A'}</td>
                                <td>{gatepass.status}</td>
                                <td>
                                    {(gatepass.status !== 'Approved' && gatepass.status !== 'Declined') && (
                                        <>
                                            <button onClick={() => handleApprove(gatepass.id)}>Approve</button>
                                            <button onClick={() => handleDecline(gatepass.id)}>Decline</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GatepassApproval;
