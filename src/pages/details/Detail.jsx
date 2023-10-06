import React, { useState } from 'react'
import './detail.css'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'

const BASE_URL = 'https://api.nigerian-made.com/api'

const Details = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [businessType, setBusinessType] = useState(''); 
  const [error, setError] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post(`${BASE_URL}/seller`, {
        fullName,
        email,
        businessName,
        businessLocation,
        businessType
      });    
      res.data && window.location.replace('/sell')
    } catch (error) {
      setError(true)
    }
  }
  
  return (
    <div>
        <Announcement />
        <Navbar />
        <div className="nmDetail">
        <div className="nmDetail_container">
                <div className="nmDetail_progress">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nmDetail_header">
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
                  <label>
                    Business Name
                    <div>
                      <input 
                        type="text" 
                        id="b_name" 
                        placeholder='Business Name'
                        onChange={e=> setBusinessName(e.target.value)}
                     />
                    </div>
                  </label>
                  <label>
                    Business Location
                    <div>
                      <input 
                        type="text" 
                        id="b_location" 
                        placeholder='State, City' 
                        onChange={e=> setBusinessLocation(e.target.value)}
                      />
                    </div>
                  </label>
                  <label>
                    Business type
                    <div>
                      <input 
                        type="text" 
                        id="b_type" 
                        placeholder='Your Business Type' 
                        onChange={e=> setBusinessType(e.target.value)}
                      />
                    </div>
                  </label>
                  <div className='nmDetail_create'>
                      <input type="checkbox" />
                      <p>Create an account for me upon launch.</p>
                  </div>
                  <button type='submit'>
                    Continue
                  </button>
                  {error && <span style={{color: 'red', fontSize: '14px'}}>something went wrong! confirm credentials and try again</span>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Details