import React,{useState} from 'react';
import '../../styles/Navbar.css'
import {Link} from 'react-router-dom'
// import DropDown from '../dropDown' 
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

  // const[dropdown, setDropdown] = useState(false)
  const [toggle, setToggle] = useState(false)

  return (
      <>
        <nav >
            <div className='logo'>
                 <Link className='logo-link' to='/homepage'>
                  <h4>Transfer App</h4>
                  </Link>
            </div>
            
            <div className='hamburger'>
                <button onClick={()=> setToggle(!toggle)}>
                <FaBars /> 
                </button>
            </div>

            <div className='nav-menu' id={toggle? 'hidden': ''}>
              
               
                  <Link className='link' to='/transaction' >
                   History
                  </Link>
                  <Link className='link' to='/homepage'>
                    Send Money
                  </Link>
                  <Link className='link' to='/'
                  // onMouseEnter={() => setDropdown(true)}
                  // onMouseLeave={() => setDropdown(false)}
                  >
                    More
                  </Link>
                  {/* {dropdown && <DropDown/>} */}
                <div className='btn-link'>
                     <Link to='/signup' >
                      <button className='btn-signup' type='submit'>Sign Up</button>
                      </Link>
                      {/* <Link to='/' >
                      <button className='btn-login' type='submit'>Log in</button>
                      </Link>     */}
                 </div>
              </div>    
         </nav>      
      </>
        );
};

export default Navbar
