// // import React from "react";
// import './login.css';
// import { useState } from "react";
// import {Link} from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// export default function SignUp() {
//   const [formData, setFormData] = useState({});
//   const [errorMessage, setErrorMessage] = useState(null);
//   // const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.username || !formData.email || !formData.password) {
//       return setErrorMessage('Please fill out all fields.');
//     }
//     try {
//       setLoading(true);
//       setErrorMessage(null);
//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (data.success === false) {
//         return setErrorMessage(data.message);
//       }
//       setLoading(false);
//       if(res.ok) {
//         navigate('/sign-in');
//       }
//     } catch (error) {
//       setErrorMessage(error.message);
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="auth-wrapper custom-background">
//       <div className="auth-inner SBOX">
//         <form onSubmit={handleSubmit}>
//           <h3>Sign Up</h3>
//           <div className="mb-3">
//             <label>Username</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="UserName"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter password"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Sign Up
//             </button>
//           </div>
//           <p className="forgot-password text-right">
//             Already registered <Link to="/sign-in">sign in?</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);  // Uncommented loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);  // Stop loading after response
      if (!res.ok) {
        return setErrorMessage(data.message || 'An error occurred');
      }
      navigate('/sign-in');
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper custom-background">
      <div className="auth-inner SBOX">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/sign-in">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
