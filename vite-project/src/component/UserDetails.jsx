import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'; 
// import { Button } from '@mui/material';
import logo from './logo.png'; 
import bike from './bike.jpg';
import car from './car.png';
import about from "./img2.jpg";
// import vdeo1 from './carvideo.mp4';
import './userdetail.css';
import {useState } from 'react';
import Footer from './Footer';
import CreatePost from './CreatePost';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
function UserDetails() {
  // const[auth,setAuth]=useState(false);
  // const[message,setMessage]=useState('')
  // const navigate=useNavigate();
  // useEffect(()=>{
  //   axios.get('/userDetails')
  //   .then(res=>{
  //     if (res.data.Status==="Success"){
  //       setAuth(true)
  //       navigate('/sign-in')
  //     }
  //     else{
  //       setAuth(false)
  //       setMessage(res.data.Error)
  //     }
  //   })
  //   .then(err=>console.log(err))
  // },[])
  const [selectedOption, setSelectedOption] = useState(''); // Initialize state for selected option
  const [carImageSrc, setCarImageSrc] = useState('');
  const [bikeImageSrc, setBikeImageSrc] = useState('');

  const handleSelectChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option); 
  };
  const handleCarImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setCarImageSrc(imageUrl);
  };

  const handleBikeImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setBikeImageSrc(imageUrl);
  };

  const navLinkStyle = {
    fontWeight: 'bold', 
    
  };
  return (
    <div className='usewrap'>
      <Navbar className='navbar' expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Logo"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
              <Nav.Link href="/contact" style={navLinkStyle}>Contact</Nav.Link>
              <Nav.Link href="/About" style={navLinkStyle}>
                About Us
              </Nav.Link>
              <Nav.Link href="/Terms" style={navLinkStyle}>
                Terms and Policy
              </Nav.Link>
              <Nav.Link href="https://www.carinfo.app/rc-search" style={navLinkStyle}> RC Details </Nav.Link> 
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
              />
             <Button variant="outline-success" style={{ backgroundColor: 'orangered', color: 'white' }} className="ms-2">Search</Button>
            </Form>
           <Nav.Link href="/sign-in" style={navLinkStyle}><Button className='Button1'>Sign Out</Button></Nav.Link>
           {/* <div>
            {auth?
            <div>
              <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
            :
            <div>
              <Link to="/sign-in" className="btn btn-primary">SIGN-IN</Link>
            </div>}
           </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <div className="welcome-component">
        <img className="img1" src={about} alt="Welcome" />
        {/* <video autoPlay muted loop className="background-video">
        <source src={vdeo1} type="video/mp4"/>
  </video> */}
        <div className='text-overlay'>
        <h1 >Welcome to Vehicle Rental System</h1>
        </div>
      </div>
          <header>
            <h2>HERE YOU GO</h2>
          </header>
          <div className="container">
            <label htmlFor="vehicle-select" ><h3>Select a Vehicle 🚗⬇️</h3></label>
            <select id="vehicle-select"  onChange={handleSelectChange} value={selectedOption}>
              <option value="">Select</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
            <div id="car-section" style={{ display: selectedOption === 'car' || selectedOption === ''? 'block' : 'none' }}>
              <h2>Car Rental Section</h2>
    {carImageSrc && <img src={carImageSrc} alt="Car Image" />}
              <img src={car} alt="Car Image" style={{ width: '600px', height: '300px',marginBottom: '20px' }}/>
              <p>This is the Car Rental section. You can rent various types of cars here.</p>
            </div>
    
            <div id="bike-section" style={{ display: selectedOption === 'bike'|| selectedOption === '' ? 'block' : 'none' }}>
              <h2>Bike Rental Section</h2>
    {bikeImageSrc && <img src={bikeImageSrc} alt="Bike Image" />}
        <img src={bike} alt="Bike Image" style={{ width: '500px', height: '300px',marginBottom: '20px' }} /> 
              <p>This is the Bike Rental section. You can rent different models of bikes here.</p>
            </div>
          </div>
          <p>
          </p>
          <Nav.Link href="/createpost" style={navLinkStyle}><Button className='Button12'>Booking Section</Button></Nav.Link>
          {/* <CreatePost/> */}
          <Footer/>
          </div>
  );
}

export default UserDetails;