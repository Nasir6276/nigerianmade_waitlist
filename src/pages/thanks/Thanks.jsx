import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Checked from '../../img/check.png'
import './thanks.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Thanks = () => {
  return (
    <>
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
          <p>
            Follow us online to stay updated on our latest activities
          </p>
          <div className="nmThanks_links">
              <a href="https://www.facebook.com/profile.php?id=61552071142231"><FontAwesomeIcon className='nmThanks_icons' icon={faFacebook} /></a>
              <a href="https://x.com/NigerianMade_x?t=HkifMP1p7e_2SdMVs_gODA&s=09"><FontAwesomeIcon className='nmThanks_icons' icon={faXTwitter} /></a>
              <a href="https://www.linkedin.com/company/nigerian-made-com/"><FontAwesomeIcon className='nmThanks_icons' icon={faLinkedinIn} /></a>
              <a href="https://instagram.com/nigerianmade.ig?igshid=NzZhOTFlYzFmZQ"><FontAwesomeIcon className='nmThanks_icons' icon={faInstagram} /></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Thanks