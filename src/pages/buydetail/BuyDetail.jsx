import React, { useState } from 'react'
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
        <Navbar />
        <div className="nmBuyDetail">
        <div className="nmBuyDetail_container">
                <div className="nmBuyDetail_progress">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nmBuyDetail_header">
                    <h1>Before we get your Insights</h1>
                    <p>
                      Kindly share these details to enable us to provide you with a 
                      personalized experience and to ensure that your response doesn't escape attention.
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
                    Email Address
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

export default BuyDetail