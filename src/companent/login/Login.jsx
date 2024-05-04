
import React, { useState } from 'react';
import './Login.css';
import Nest from '../../assets/Header-nest.png';
import axios from '../../api/index';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');

  const navigate = useNavigate(); // Corrected useNavigate hook usage

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username,
      password
    };
    axios.post('/auth/login', user)
      .then(res => {
        console.log("res", res.data.token);
        localStorage.setItem("x-auth-token", res.data.token);
        navigate('/admin');
      })
      .catch(err => {
        console.log("err>>>", err);
      });
  };

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login_home">
            <span>
              <p>Login</p>
              <p>Home</p>
            </span>
          </div>
        </div>
      </div>

      <section className="info">
        <div className="container">
          <div className="info_box">
            <form onSubmit={handleSubmit}>
              <img src={Nest} alt="" />
              <div className="info_input">
                <p>Email Address*</p>
                <input
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='Enter Your Email'
                />
              </div>
              <div className="info_input">
                <p>Password*</p>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter Your Password'
                />
              </div>
              <div className="info_radio">
                <span>
                  <input type="radio" /> Remember Me
                </span>
                <p>Forgot Password?</p>
              </div>
              <div className="info_button">
                <button type='submit'>Login</button>
                <p>Signup?</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
