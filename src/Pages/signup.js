import React from 'react';
import '../styles/Signup.css'
import {Link} from 'react-router-dom'


const Signup = () => {
  return <div className='signup-wrapper'>
            <form >
            <h2>Create an account</h2>
            
            <input autocomplete="off" name="name" type='text' placeholder='Full Name' />
            
            <input autocomplete="off" name="name" type='email' placeholder='Enter email address' />
           
            <input autocomplete="off" name="password" type='password' placeholder='Enter password' />
            <button className='btn-signup' type='submit'>Create Account</button>
            <div className='login-link'>
            <span>Already have an account? </span>
            <Link to='/' >
                Log in
            </Link>
            </div>
           
        </form>
  </div>;
};

export default Signup;
