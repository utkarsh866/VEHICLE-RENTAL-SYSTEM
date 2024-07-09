import React, { useState } from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
export default function Login() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);  // Uncommented loading state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
      // return dispatch(signInFailure("Please fill all the fields"));
      return setErrorMessage("Please fill all fields");
    }
    try {
      // dispatch(signInStart())
      setLoading(true);
      setErrorMessage("null");
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // dispatch(signInFailure(data.message))
        return setErrorMessage(data.message);
      }
      setLoading(false);  // Stop loading after response
      if (res.ok) {
        dispatch(signInSuccess(data))
      }
      navigate('/userDetails');
    } catch (error) {
    //  dispatch(signInFailure(error.message))
    setErrorMessage(error.message);
    setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper custom-background">
      <div className="auth-inner SBOX">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {/* <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Username"
              onChange={handleChange}
            />
          </div> */}

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
              placeholder="******"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign In'}
            </button>
          </div>
          <p className="forgot-password text-right">
            Don't have an account ?<Link to="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}