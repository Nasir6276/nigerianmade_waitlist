import React, { useState } from 'react'
import './buysell.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const BuySell = () => {
    const [transact, setTransact] = useState('buysell');

  return (
    <div>
        <Navbar />
        <div className="nmBuySell">
            <div className="nmBuySell_container">
                <div className="nmBuySell_progress">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nmBuySell_header">
                    <h1>What would you like?</h1>
                    <p>
                        Tell us what we should prepare for you ahead of our 
                        product launch, we are super excited to get you onboard.
                    </p>
                </div>
                <div className="nmBuySell_radio">
                    <div className="nmBuySell_select">
                        <label className='nmBuySell_custom'>
                            I would like to Buy
                            <input type="radio" value="buyDetail" name="transact" onChange={e=>setTransact(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <p>
                        I want to explore, discover and buy from the wide range of 
                        Nigerian-made Products from verified vendors. 
                    </p>
                </div>
                <div className="nmBuySell_radio">
                    <div className="nmBuySell_select">
                        <label className='nmBuySell_custom'>
                            I would like to Sell
                            <input type="radio" value="sellDetail" name="transact" onChange={e=>setTransact(e.target.value)}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <p>
                        I want to showcase and sell my authentic Nigerian-made Products 
                        to a  dynamic and thriving network of customers. 
                    </p>
                </div>
                <Link to={`/${transact}`} style={{textDecoration: 'none', color:'inherit'}}>
                    <button>
                        Continue
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BuySell