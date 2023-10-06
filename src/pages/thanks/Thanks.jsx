import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import Checked from '../../img/check.png'
import './thanks.css'
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <div className='nmThanks'>
        <div className="nmThanks_conntainer">
          <div className="nmThanks_check">
            <div className="nmThanks_checked">
              <img src={Checked} alt="" />
            </div>
          </div>
          <h1>Thank you for your submission!</h1>
          <p>
            We sincerely appreciate and will ensure to use it to 
            provide value to you in return.
          </p>
          <Link to='/home' style={{textDecoration: 'none'}}>
            <button>
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Thanks