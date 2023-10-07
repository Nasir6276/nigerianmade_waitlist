import React, { useState } from 'react'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import './buydetail.css'
import axios from 'axios'

const BASE_URL = 'https://api.nigerian-made.com/api'

const BuyDetail = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post(`${BASE_URL}/buyer`, {
        fullName,
        email,
      });    
      res.data && window.location.replace('/buy')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div>
        <Announcement />
        <Navbar />
        <div className="nmBuyDetail">
        <div className="nmBuyDetail_container">
                <div className="nmBuyDetail_progress">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nmBuyDetail_header">
                    <h1>One more thing</h1>
                    <p>
                      Please provide your information below for us to keep you 
                      posted about our key activities (launch date etc.)
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <label>
                    Full Name
                    <div>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder='Enter your name' 
                        onChange={e=> setFullName(e.target.value)}
                      />
                    </div>
                  </label>
                  <label>
                    Email Addresse
                    <div>
                      <input 
                        type="text" 
                        id="email"
                        placeholder='Email Address' 
                        onChange={e=> setEmail(e.target.value)}
                      />
                    </div>
                  </label>
                  <div className='nmBuyDetail_create'>
                      <input type="checkbox" />
                      <p>Create an account for me upon launch.</p>
                  </div>
                  <Link to='/buy' style={{textDecoration: 'none'}}>
                    <button type='submit'>
                      Continue
                    </button>
                  </Link>
                  {error && <span style={{color: 'red', fontSize: '14px'}}>something went wrong! confirm credentials and try again</span>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default BuyDetail