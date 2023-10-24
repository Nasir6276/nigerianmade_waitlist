import React, { useEffect } from 'react'
import './header.css'
import People from '../../img/Frame 197.png'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='nmHeader'>
        <div className="trailblazers" data-aos="fade-left">
            <img src={People} alt="" />
            <p>Join Over 5,000 Trailblazers</p>
        </div>
        <h2>Showcase, Discover, Buy & Sell Authentic Nigerian-made Products</h2>
        <p className='desc'>Welcome to "Nigerian-made.com", the premier online location for  showcasing, discovering, buying, and selling authentic Nigerian-made products.</p>
        <Link to='/buysell' style={{textDecoration: 'none'}}>
            <button>
              Get early access
            </button>
        </Link>
    </div>
  )
}

export default Header