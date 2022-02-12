import React from 'react';
import signStyles from '../styles/Signup.module.css'
import {Link} from 'react-router-dom'


const Signup = () => {
  return <div className={signStyles.wrapper}>
            <form >
            <h2>Create an account</h2>
            
            <input autocomplete="off" name="name" type='text' placeholder='Full Name' />
            
            <input autocomplete="off" name="name" type='email' placeholder='Enter email address' />
           
            <input autocomplete="off" name="password" type='password' placeholder='Enter password' />
            <button className={signStyles.btnSignup} type='submit'>Create Account</button>
            <div className={signStyles.loginLink}>
            <span>Already have an account? </span>
            <Link to='/' >
                Log in
            </Link>
            </div>
           
        </form>
  </div>;
};

export default Signup;
