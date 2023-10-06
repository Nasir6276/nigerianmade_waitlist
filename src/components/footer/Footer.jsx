import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './footer.css'
import nmLogo from '../../img/Layer_1.png'

const Footer = () => {
  return (
    <div className='nmFooter'>
        <div className="nmFooter_container">
          <div className="nmFooter_socials">
              <img src={nmLogo} alt="" />
              <div className="nmFooter_links">
                  <FontAwesomeIcon className='nmFooter_icons' icon={faFacebookF} />
                  <FontAwesomeIcon className='nmFooter_icons' icon={faTwitter} />
                  <FontAwesomeIcon className='nmFooter_icons' icon={faLinkedinIn} />
                  <FontAwesomeIcon className='nmFooter_icons' icon={faInstagram} />
              </div>
          </div>
          <hr />
          <p>
              Nigerian-made.com is the premier online destination for showcasing, 
              discovering, buying, and selling authentic Nigerian-made products. 
              Our platform is dedicated to showcasing the rich diversity and quality of 
              products made in Nigeria. By supporting local artisans, manufacturers and 
              entrepreneurs, you play a crucial role in empowering the nation's economy 
              and fostering sustainable growth.
          </p>
          <hr />
          <span>Copyright Nigerian-made.com, 2023. All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer