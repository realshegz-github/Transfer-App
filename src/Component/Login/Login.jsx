import React from 'react';
import loginStyles from '../../styles/Login.module.css'
import {Link} from 'react-router-dom'
import Authentication from '../../image/Authentication.svg'

const Login = () => {
  return (
   <div className={loginStyles.container}>
      <div className={loginStyles.animation}>
          <img src={Authentication} alt='authentication' width='600px'/>
        </div>
        
        <form >
            <h2>Login to stay connected with <span><b>Transfer App</b></span> all around the continent</h2>
            <label>Email</label>
            <input autocomplete="off" name="name" type='email' placeholder='Enter email address' />
            <label>Password</label>
            <input autocomplete="off" name="password" type='password' placeholder='Enter password' />
            <span className={loginStyles.forgetPwd}>Forget password?</span>
            <button className={loginStyles.btnLogin} type='submit'>Log in</button>
            <div className={loginStyles.signupLink}>
            <span>Don't have an account? </span>
            <Link to='/signup' >
                Sign up
            </Link>
            </div>
        </form>

       
   </div>


    );
};

export default Login;
