// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const data = [
  { name: 'Jan', newlyJoined: 20, left: 5 },
  // Add more data points here
];

const pieData = [
  { name: 'Paid', value: 65 },
  { name: 'Unpaid', value: 35 }
];

const pieDataRevenue = [
  { name: 'Income', value: 75 },
  { name: 'Expenses', value: 25 }
];

const COLORS = ['#82ca9d', '#8884d8'];

function Dashboard() {
  return (
    <div className="dashboard">
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
      <div className="main-content">
        <header>
          <input type="text" placeholder="Search" className="search-bar" />
          <div className="user-info">
            
            
          </div>
        </header>
        <div className="stats-cards">
          <div className="stats-card1"><Link>Vacant Rooms<br />11/40</Link></div>
          <div className="stats-card2"><Link to='/adminhelpdesk'>Received Complaints<br />13</Link></div>
          <div className="stats-card3"><Link to='/gatepassapproval'>pending Gatepasses<br />5</Link></div>
        </div>
        <div className="charts">
          <div className="chart">
            <h3 className='h3'>Newly joined vs left</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="newlyJoined" fill="#82ca9d" />
                <Bar dataKey="left" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart">
            <h3 className='h3'>Rent Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart">
            <h3 className='h3'>Revenue Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieDataRevenue} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                  {pieDataRevenue.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
