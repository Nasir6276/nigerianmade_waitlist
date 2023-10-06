import React from 'react'
import './sell.css'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Sell = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <div className="nmSell">
            <div className="nmSell_container">
                <div className="nmSell_progress">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nmSell_header">
                    <h1>OK, how about Categories?</h1>
                    <p>
                        Select up to 3 categories of products that you want 
                        to showcase to the World.
                    </p>
                </div>
                <div className="nmSell_categories">
                    {data.map ((item, i) => (
                        <div className='nmSell_wrapper'>
                            <label>
                                <input type="checkbox" name="category" value={item.value} />
                                <span>{item.name}</span>
                            </label>
                        </div>
                    ))}
                    <p>Not listed? Please tell us what you would like see on Nigerian-made.com</p>
                    <div className="nmSell_nListed">
                        <input type="text" placeholder='Specify category'/>
                    </div>
                </div>
                <button>
                    <Link to='/thanks' style={{textDecoration: 'none', color:'inherit'}}>
                        Submit
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

export default Sell