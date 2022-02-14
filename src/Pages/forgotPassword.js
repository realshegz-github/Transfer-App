import React from 'react';
import { Link } from 'react-router-dom';
import signStyles from '../styles/Signup.module.css';
const forgotPassword = () => {
  return <div>
      <form >
            <h2>forgotPassword</h2>
            <input autocomplete="off" name="name" type='email' placeholder='Enter email address' />
            
            <div className={signStyles.loginLink}>
            <Link to='/' >
            <button className={signStyles.btnSignup} type='submit'>Submit</button>
            </Link>
            </div>
           
        </form>
  </div>;
};

export default forgotPassword;
