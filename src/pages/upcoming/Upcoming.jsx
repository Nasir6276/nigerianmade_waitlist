import React from 'react'
import timer from '../../img/timer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Announcement from '../../components/announcement/Announcement'
import './upcoming.css'

const Upcoming = () => {
  return (
    <>
        <Announcement />
        <div className='nmUpcoming'>
            <div className="nmUpcoming_container">
                <div className="nmUpcoming_check">
                    <div className="nmUpcoming_checked">
                    <img src={timer} alt="" />
                    </div>
                </div>
                <h1>Hold tight.. we'll be unveiling shortly</h1>
                <p>
                    Welcome to <span>Nigerian-Made.com</span>, your hub for celebrating 
                    Nigeria's craftsmanship, innovation, and culture.
                </p>
                <hr />
                <p>
                    As we finalize our platform for an exceptional experience, 
                    join our journey, follow us, and stay connected.
                </p>
                <div className="nmUpcoming_icons">
                    <FontAwesomeIcon className='nmUpcoming_icon' icon={faFacebookF} />
                    <FontAwesomeIcon className='nmUpcoming_icon' icon={faTwitter} />
                    <FontAwesomeIcon className='nmUpcoming_icon' icon={faLinkedinIn} />
                    <FontAwesomeIcon className='nmUpcoming_icon' icon={faInstagram} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Upcoming