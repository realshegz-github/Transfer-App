import useState from 'react';
import '../../styles/Navbar.css'
import {Link} from 'react-router-dom'
import DropDown from '../dropDown' 

const Navbar = () => {

  // const[dropdown, setDropdown] = useState(false)

  return (
      <>
        <nav >
            <div className='logo'>
                 <Link className='link' to='/'>
                  <h4>Transfer App</h4>
                  </Link>
            </div>

              <div className='nav-menu'>
                  <Link className='link' to='/transaction' >
                    Dash board
                  </Link>
                  <Link className='link' to='/transfer'>
                    Send Money
                  </Link>
                  <Link className='link' to='/'
                  // onMouseEnter={() => setDropdown(true)}
                  // onMouseLeave={() => setDropdown(false)}
                  >
                    More
                  </Link>
                  {/* {dropdown && <DropDown/>} */}
              </div>

              <div className='btn-link'>
                  <Link to='/signup' >
                  <button className='btn-signup' type='submit'>Sign Up</button>
                  </Link>
                  <Link to='/' >
                  <button className='btn-login' type='submit'>Log in</button>
                  </Link>
              </div>
         </nav>
         
      </>
        );
};

export default Navbar
