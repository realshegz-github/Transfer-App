import {useState} from 'react';
import loginStyles from '../../styles/Login.module.css'
import {Link} from 'react-router-dom'
import Authentication from '../../image/Authentication.svg'
import PropTypes from 'prop-types';
import useToken from '../useToken';
import { useNavigate } from "react-router-dom";

async function loginUser(credentials){
    return fetch('http://localhost:8080/login',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login() {
    let navigate = useNavigate();

    const [username, setUserName]= useState()
    const [password, setPassword]= useState()
   
  const handleSubmit =async e =>{
      e.preventDefault();
      const token =await loginUser({
          username,
          password
      });
      localStorage.setItem('token', JSON.stringify(token))
      navigate(`/homepage`);
  }


  return (
   
   <div className={loginStyles.container}>
       <div className={loginStyles.subContainer}>
            <div className={loginStyles.animation}>
                <img src={Authentication} alt='authentication'/>
                </div>

                <form onSubmit={handleSubmit}>
                    <h2>Login to stay connected <br/>with <span><b>Transfer App</b></span></h2>
                    <label>Email</label>
                    <input autocomplete="email" required  name="name" type='email' onChange={e => setUserName(e.target.value)} placeholder='Enter email address' />
                    <label>Password</label>
                    <input autocomplete="password" name="password" type='password'onChange={e => setPassword(e.target.value)} placeholder='Enter password' />
                    {/* <Link to='/forgotPassword'> */}
                    <span className={loginStyles.forgetPwd}>Forget password?</span>
                    {/* </Link> */}
                    {/* <Link to='/transfer' > */}
                        <button className={loginStyles.btnLogin} type='submit'>Log in</button>
                        {/* onClick={()=> loginWithRedirect()}> */}
                    {/* </Link> */}
                    
                    
                    <div className={loginStyles.signupLink}>
                    <span>Don't have an account? </span>
                    <Link to='/' >
                        Sign up
                    </Link>
                    </div>
                </form>
       </div>
   </div>
      
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
