import React from 'react'
import './buy.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Buy = () => {
  return (
    <div>
        <Navbar />
        <div className="nmBuy">
            <div className="nmBuy_container">
                <div className="nmBuy_progress">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nmBuy_header">
                    <h1>All set! Let's know your interest</h1>
                    <p>
                        Select up to 5 product categories that interests 
                        you and we will have them ready for you to explore.
                    </p>
                </div>
                <div className="nmBuy_categories">
                    {data.map ((item, i) => (
                        <div className='nmBuy_wrapper'>
                            <label>
                                <input type="checkbox" name="category" value={item.value} />
                                <span>{item.name}</span>
                            </label>
                        </div>
                    ))}
                    <p>Not listed? Please tell us what you would like to showcase to the World.</p>
                    <div className="nmBuy_nListed">
                        <input type="text" placeholder='Enter Custom category'/>
                    </div>
                </div>
                <button>
                    <Link to='/thanks' style={{textDecoration: 'none', color:'inherit'}}>
                        Continue
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

const data = [
    {
        name: 'Food Items',
        value: 'food_item' 
    },
    {
        name: 'Household Items',
        value: 'household_items' 
    },
    {
        name: 'Organic Supplies',
        value: 'organic_supplies' 
    },
    {
        name: 'Furniture',
        value: 'furniture' 
    },
    {
        name: 'Spices',
        value: 'spices' 
    },
    {
        name: 'Handcrafted Shoes',
        value: 'handcrafted_shoes' 
    },
    {
        name: 'Fabrics',
        value: 'fabrics' 
    },
    {
        name: 'Beverages',
        value: 'beverages' 
    },
    {
        name: 'Electronics',
        value: 'electronics' 
    },
    {
        name: 'Packaging',
        value: 'packaging' 
    },
    {
        name: 'Accessories',
        value: 'accessories' 
    },
]

export default Buy