import React from 'react';
import loginStyles from '../../styles/Login.module.css'
import {Link} from 'react-router-dom'
import Authentication from '../../image/Authentication.svg'
// import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    // const {loginWithRedirect, isAuthenticated} = useAuth0()
  
  return (
   
   <div className={loginStyles.container}>
      <div className={loginStyles.animation}>
          <img src={Authentication} alt='authentication' width='600px'/>
        </div>

        <form>
            <h2>Login to stay connected with <span><b>Transfer App</b></span> all around the continent</h2>
            <label>Email</label>
            <input autocomplete="email" required  name="name" type='email' placeholder='Enter email address' />
            <label>Password</label>
            <input autocomplete="password" name="password" type='password' placeholder='Enter password' />
            {/* <Link to='/forgotPassword'> */}
            <span className={loginStyles.forgetPwd}>Forget password?</span>
            {/* </Link> */}
            {/* <Link to='/transfer' > */}
                 <button className={loginStyles.btnLogin} type='submit'>Log in</button>
                 {/* onClick={()=> loginWithRedirect()}> */}
            {/* </Link> */}
            
            
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
