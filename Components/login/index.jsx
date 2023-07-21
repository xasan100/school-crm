/** @format */

import React from "react";
import Container from "./style.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const notify = () =>
    toast.success("Success", {
      position: "top-left",
      autoClose: 2000,
      theme: "dark",
    });

  return (
    <Container>
      <div className='inFormBackground'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='inLoginForm'>
          <div className='form'>
            <div className='title'>
              <h3>Login </h3>
            </div>
            <div className='inputGroup'>
              <label for='email'>Email</label>
              <input type='email' placeholder='Enter Email' id='email' />
            </div>
            <div className='inputGroup'>
              <label for='password'>Password</label>
              <input
                type='password'
                placeholder='EnterPassword'
                id='password'
              />
            </div>
            <button className='submitForm' onClick={notify}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
