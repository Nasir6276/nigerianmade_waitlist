import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './footer.css'
import nmLogo from '../../img/Layer_1.png'

const Footer = () => {
  return (
    <div className='nmFooter'>
        <div className="nmFooter_container">
          <div className="nmFooter_socials">
              <img src={nmLogo} alt="" />
              <div className="nmFooter_links">
                  <a href="https://www.facebook.com/profile.php?id=61552071142231"><FontAwesomeIcon className='nmFooter_icons' icon={faFacebook} /></a>
                  <a href="https://x.com/NigerianMade_x?t=HkifMP1p7e_2SdMVs_gODA&s=09"><FontAwesomeIcon className='nmFooter_icons' icon={faXTwitter} /></a>
                  <a href="https://www.linkedin.com/company/nigerian-made-com/"><FontAwesomeIcon className='nmFooter_icons' icon={faLinkedinIn} /></a>
                  <a href="https://instagram.com/nigerianmade.ig?igshid=NzZhOTFlYzFmZQ"><FontAwesomeIcon className='nmFooter_icons' icon={faInstagram} /></a>
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