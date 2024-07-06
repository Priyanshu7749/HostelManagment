import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './generaterecceipt.css';
import { db, storage } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import CurrentDate from './currentdate';

function GatePassForm() {
  const [serialNumber, setSerialNumber] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    block: '',
    roomNo: '',
    college: '',
    program: '',
    timeStart: '',
    timeEnd: '',
    phoneNumber: '',
    placeToGo: '',
    reason: '',
    idCard: null
  });

  useEffect(() => {
    const storedSerialNumber = localStorage.getItem('serialNumber');
    if (storedSerialNumber) {
      setSerialNumber(parseInt(storedSerialNumber));
    }
  }, []);

  const handleGenerateClick = async (e) => {
    e.preventDefault();
    const {
      name, block, roomNo, college, program,
      timeStart, timeEnd, phoneNumber, placeToGo,
      reason, idCard
    } = formData;

    // Check if any required field is empty
    if (!name || !block || !roomNo || !college || !program || !timeStart || !timeEnd || !phoneNumber || !placeToGo || !reason || !idCard) {
      alert('All fields are required.');
      return;
    }

    try {
      let idCardUrl = '';
      if (formData.idCard) {
        const idCardRef = ref(storage, `idCards/${uuidv4()}`);
        await uploadBytes(idCardRef, formData.idCard);
        idCardUrl = await getDownloadURL(idCardRef);
      }

      await addDoc(collection(db, 'gatePasses'), {
        name: formData.name,
        block: formData.block,
        roomNo: formData.roomNo,
        college: formData.college,
        program: formData.program,
        timeStart: formData.timeStart,
        timeEnd: formData.timeEnd,
        phoneNumber: formData.phoneNumber,
        placeToGo: formData.placeToGo,
        reason: formData.reason,
        serialNumber,
        idCardUrl,
        date: new Date()
      });

      setSerialNumber(serialNumber + 1);
      localStorage.setItem('serialNumber', serialNumber + 1);
      alert('Gate pass generated successfully.');
    } catch (error) {
      console.error('Error generating gate pass:', error);
      alert('Error generating gate pass. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    let newValue = value;

    if (['name', 'block', 'college', 'program', 'placeToGo'].includes(name)) {
      newValue = value.replace(/[^a-zA-Z ]/g, ''); // Allow only letters and spaces
    } else if (['roomNo', 'phoneNumber'].includes(name)) {
      newValue = value.replace(/[^0-9]/g, ''); // Allow only numbers
    }

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: newValue });
    }
  };


  return (
    <div className="main">
      <nav>
        <div className="container main-nav flex">
          <a href="#" className="company-logo">
            <img src="/images/Logo.png" alt="company logo" /> {/* Update path */}
          </a>
          <div className="nav-links" id="nav-links">
            <ul className="flex">
              <li><p><Link to="/homepage">Home</Link></p></li>
              <li><p><Link to="#">Generate Receipt</Link></p></li>
              <li><p><Link to="/helpdesk">Register a Complaint</Link></p></li>
              <li><p><Link to="/bookhostel">Book Hostel</Link></p></li>
              <li><p><Link to="/">Contact Us</Link></p></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="sub-main">
        <h1 className='head1'>Student Gate Pass</h1><br />
        <h3 className='head3'>*Instructions*</h3>
        <p className='p1'>1.   The Student must return to the hostel by the specified date and time.</p>
        <p className='p1'>2.   The Student must prominently display the gate pass while leaving and returning to the hostel premises.</p>
        <p className='p1'>3.   The request will be reviewed, and approval will be granted based on the validity of the reason for leaving.</p>
        <p className='p1'>4.   Timing of the gate is 8:00 AM to 11:00AM and for evening 4:00 PM to 6:00 PM.</p>
        <p className='p1'>5.   In case of any delays student must contact the rector and specify the reason.</p>
      </div>

      <div className="date">
        <p className='serialno'>No: {serialNumber}</p>
        <CurrentDate />
      </div>

      <div className="main-for-start">
        <div className="form-elements">
          <div className='Gatepass-8'>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="" style={{ width: '340px' }} value={formData.name} pattern="[a-zA-Z ]*" title="Only letters and spaces are allowed" onChange={handleChange} required/><br />
            <label htmlFor="">Block</label>
            <input className="a1" type="text" name="block" id="" style={{ width: '66px' }} value={formData.block} pattern="[a-zA-Z ]*" title="Only letters and spaces are allowed" onChange={handleChange} required />
            <label htmlFor="" style={{ marginLeft: '68px' }}>Room No</label>
            <input type="text" name="roomNo" id="" style={{ width: '96px' }} value={formData.roomNo} pattern="[0-9]*" title="Only numbers are allowed" onChange={handleChange}  required/><br />
            <label htmlFor="">College</label>
            <input type="text" name="college" id="" style={{ width: '325px' }} value={formData.college} pattern="[a-zA-Z ]*" title="Only letters and spaces are allowed" onChange={handleChange} required /><br />
            <label htmlFor="">Program</label>
            <input type="text" name="program" id="" style={{ width: '316px' }} value={formData.program} pattern="[a-zA-Z ]*" title="Only letters and spaces are allowed" onChange={handleChange} required /><br />
            <label htmlFor="">Time</label>
            <input type="text"  id="" style={{ width: '100px' }}   required />
            <select onChange={handleChange} name="amPmStart">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
            <input type="text"  id="" style={{ width: '115px', marginLeft: '110px' }}   required/>
            <select onChange={handleChange} name="amPmEnd">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select><br />
            <p style={{ display: 'inline' }}>Upload Your ID Card</p>
            <input type="file" name="idCard" className="myFile attachment labelfiled" accept=".png, .jpg, .jpeg, .mp4" required onChange={handleChange} /><br />

            <button onClick={handleGenerateClick} style={{ height: '42px', width: '150px', borderRadius: '8px', backgroundColor: 'black', color: 'white', fontWeight: 'bolder', marginTop: '12px', cursor: 'pointer' }}>Generate</button><br />
            <div className="circle"></div>
            <p style={{ display: 'inline-block' }}>Verified Please download your Gate pass Here: <span style={{ display: 'inline-block', marginLeft: '5px', color: 'blue', textDecoration: 'underline', fontWeight: 'bolder', fontFamily: 'Cabin' }}>Download</span></p>
            <p style={{ color: 'red', fontFamily: 'cabin', marginBottom: '33px', fontWeight: 'bolder' }}>It will take 2 minutes to verify your gate pass. Please be patient and wait.</p>
          </div>
        </div>

        <div className="Gatepass-8">
          <label htmlFor="">Phone Number</label>
          <input type="text" name="phoneNumber" id="" style={{ width: '340px' }} value={formData.phoneNumber} pattern="\d{10}" title="Phone number must be 10 digits" maxlength="10" onChange={handleChange} required /><br />
          <label htmlFor="">Place to go out</label>
          <input className="a1" type="text" name="placeToGo" id="" style={{ width: '340px' }} value={formData.placeToGo} onChange={handleChange} required/><br />
          <label style={{ textAlign: 'center' }} htmlFor="">Reason for going out</label>
          <textarea style={{ borderRadius: '8px' }} name="reason" id="" cols="41" rows="10" onChange={handleChange} required></textarea>
        </div>
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

export default GatePassForm;
