import React from 'react'
import './header.css'
import People from '../../img/Frame 197.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='nmHeader'>
        <div className="trailblazers">
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