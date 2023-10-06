import React from 'react'
import './navbar.css';
import Logo from '../../img/Layer_1.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nmNavbar'>
        <div className="nmNavbar_container">
          <img src={Logo} alt="" />
            <Link to='/buysell' style={{textDecoration: 'none'}}>
                <button>Get early access</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar