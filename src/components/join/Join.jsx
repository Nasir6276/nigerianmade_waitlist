import React from 'react'
import './join.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import aHappyFace from '../../img/aHappyFace.png'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <div className='nmJoin'>
        <div className="nmJoin_container">
          <div className="nmJoin_text">
              <h1>Join us today and be a part of Nigeria's vibrant entrepreneurial ecosystem!</h1>
              <p>
                  Are you a Nigerian entrepreneur or artisan with exceptional 
                  products to share? Join our vibrant community of sellers and showcase your 
                  creations to a broader audience. Connect with like-minded individuals, expand your customer base, 
                  and unlock new opportunities for growth. Together, let's strengthen Nigeria's reputation as a hub for 
                  creativity and innovation.
              </p>
              <Link to='/home' style={{textDecoration: 'none'}}>
                <button>Get early access <FontAwesomeIcon icon={faUpRightFromSquare} /></button>
              </Link>
          </div>
          <div className="nmJoin_image">
              <img src={aHappyFace} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Join