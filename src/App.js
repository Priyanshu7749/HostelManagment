import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login_Signup/Login';
import Signup from './Login_Signup/signup';
import ForgetPassword from './Login_Signup/forgetpassword';
import HomePage from './Login_Signup/header';
import GatePassForm from './Login_Signup/generatereceipt';
import Exploremore from './Login_Signup/Exploremore';
import Helpdesk from './Login_Signup/helpdesk';
import Bookhostel from './Login_Signup/bookhostel';
import Bookroom from './Login_Signup/bookroom';
import AdminLogin from './Admin/adminlogin';
import AdminHomePage from './Admin/adminhomepage';
import UserPage from './Admin/users';
import Adminhelpdesk from './Admin/adminhelpdesk';
import Dashboard from './Admin/dasboard';
import GatepassApproval from './Admin/gatepassapproval';
import Bookings from './Admin/adminbookings';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/gatepassform' element={<GatePassForm/>}/>
        <Route path='/exploremore' element={<Exploremore/>}/>
        <Route path='/helpdesk' element={<Helpdesk/>}/>
        <Route path='/bookhostel' element={<Bookhostel/>}/>
        <Route path='/bookroom' element={<Bookroom/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/adminhomepage' element={<AdminHomePage/>}/>
        <Route path='/userpage' element={<UserPage/>}/>
        <Route path='/adminhelpdesk' element={<Adminhelpdesk/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/gatepassapproval' element={<GatepassApproval/>}/>
        <Route path='/adminbookings' element={<Bookings/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
