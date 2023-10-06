import React from 'react'
import './brand.css'
import img1 from '../../img/image 11.png'
import img2 from '../../img/image 13.png'
import img3 from '../../img/image 2.png'
import img4 from '../../img/image 3.png'
import img5 from '../../img/image 5.png'
import img6 from '../../img/image 9.png'

const Brand = () => {
  return (
    <div className='nmBrand'>
        <div className="nmBrand_container">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
    </div>
  )
}

export default Brand