import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faBrush, faGem, faStar, faShieldHalved, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './goals.css'

const Goals = () => {
  return (
    <div className='nmGoals'>
        <div className="nmGoals_container">
            <div className="nmGoals_header">
                <h1>Things that set us apart</h1>
                <p>
                    Innovation, Culture, Craftsmanship, Sustainability, Local Pride, 
                    Excellence, Empowerment, Heritage, Creativity, Authenticity
                </p>
            </div>
            <div className="nmGoals_items">
                <div className="nmGoals_items-single">
                    <div className="nmGoals_items-header">
                        <FontAwesomeIcon className='nmGoals_icons' icon={faChartLine} />
                        <h2>Supporting Economic Growth</h2>
                    </div>
                    <p>
                        By showcasing and promoting Nigerian products, we contribute 
                        to the growth of the local economy helping to create jobs 
                        and stimulate economic development in Nigeria.
                    </p>
                </div>
                <div className="nmGoals_items-single">
                    <div className="nmGoals_items-header">
                        <FontAwesomeIcon className='nmGoals_icons' icon={faBrush} />
                        <h2>Celebrating Nigerian Craftsmanship</h2>
                    </div>
                    <p>
                        Experience the artistry and ingenuity that define Nigerian-made 
                        products. Each item carries with it a piece of our cultural heritage, 
                        telling a story of resilience, creativity, and unparalleled craftsmanship.
                    </p>
                </div>
                <div className="nmGoals_items-single">
                    <div className="nmGoals_items-header">
                        <FontAwesomeIcon className='nmGoals_icons' icon={faGem} />
                        <h2>Unleashing Hidden Treasures</h2>
                    </div>
                    <p>
                        Discover hidden gems and unique items that cannot be found elsewhere. From 
                        traditional handwoven textiles to contemporary designs infused with Nigerian aesthetics, 
                        our marketplace is a treasure trove of exclusive finds waiting to be explored.
                    </p>
                </div>
                <div className="nmGoals_items-single">
                    <div className="nmGoals_items-header">
                        <FontAwesomeIcon className='nmGoals_icons' icon={faStar} />
                        <h2>Building Trust and Credibility</h2>
                    </div>
                    <p>
                        For businesses and entrepreneurs, we build trust and credibility with both domestic 
                        and international explorers signifying a commitment to quality and authenticity 
                        associated with Nigerian products and services.
                    </p>
                </div>
                <div className="nmGoals_items-single">
                    <div className="nmGoals_items-header">
                        <FontAwesomeIcon className='nmGoals_icons' icon={faShieldHalved} />
                        <h2>Increased Visibility</h2>
                    </div>
                    <p>
                        Businesses  and products showcased benefit from increased online visibility, 
                        leading to better sales, higher revenues, improved online reputation, 
                        marketing efficiency, and expanded customer reach.
                    </p>
                </div>
                <div className="nmGoals_items-single">
                    <div className="nmGoals_items-header">
                        <FontAwesomeIcon className='nmGoals_icons' icon={faUserPlus} />
                        <h2>Promoting Local Innovation</h2>
                    </div>
                    <p>
                        Showcasing Nigerian-made products and services through a website can encourage 
                        innovation and entrepreneurship within the country. It can serve as a 
                        platform to highlight and support local talent and innovation
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goals