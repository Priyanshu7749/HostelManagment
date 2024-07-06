import React, { useState, useEffect } from 'react';
import { db } from 'C:/Users/priyanshu199/OneDrive/Desktop/cp2/src/Login_Signup/firebase.js'; // Adjust the path to your firebase config
import './adminhelpdesk.css'; // Create and style this CSS file as needed
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Adminhelpdesk() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'helpdesk'));
                const ticketsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    date: doc.data().date ? doc.data().date.toDate() : null
                }));
                setTickets(ticketsData);
            } catch (error) {
                console.error('Error fetching helpdesk data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTickets();
    }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

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
            
            <h2>Helpdesk</h2>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                        <th>Category</th>
                        <th>enrollment</th>
                        <th>Email</th>
                        <th>Mobile no</th>
                        <th>HelpTopic</th>
                        <th>Request</th>
                        <th>Room no</th>
                        <th>Date & Time</th>

                    </tr>
                </thead>
                <tbody>
                {tickets.map(ticket => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.category}</td>
                            <td>{ticket.enrollment}</td>
                            <td>{ticket.email}</td>
                            <td>{ticket.mobile}</td>
                            <td>{ticket.helpTopic}</td>
                            <td>{ticket.request}</td>
                            <td>{ticket.roomNo}</td>
                            <td>{ticket.date ? ticket.date.toLocaleString() : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        
        </div>
    );
}

export default Adminhelpdesk;
