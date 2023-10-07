import React, { useState } from 'react'
import './faq.css'
import { Link } from 'react-router-dom'

const Faq = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
        return setSelected(null)
        }

        setSelected(i)
    }
  return (
    <div className='nmFaq'>
        <div className="nmFaq_container">
          <div className="nmFaq_header">
              <h1>Frequently Asked Questions</h1>
              <p>
              Here are some of the common question that we feel might help you.
              </p>
          </div>
          {data.map((item, i) => (
              <div className="nmFaq_questions">
                  <div className="nmFaq_title" onClick={() => toggle(i)}>
                  <h2>{item.title}</h2>
                  <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <hr />
                  <div className={selected === i ? 'nmFaq_show' : 'nmFaq_comment'}>
                  <p>{item.comment}</p>
                  </div>
              </div>
          ))}
          <div className="nmSignup">
            <h1>Sign up for Early access</h1>
            <p>Never miss out on any of our amazing offers from discounted stores to trending products, you get to hear about it first from us.</p>
            <Link to='/buysell' style={{textDecoration: 'none'}}>
              <button>Get early access</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

const data = [
    {
      title: ' What is Nigerian-Made.com?',
      comment: 'Nigerian-Made.com is a platform dedicated to promoting and celebrating authentic products and services that are proudly made in Nigeria. We showcase the diversity and quality of Nigerian craftsmanship, innovation, and entrepreneurship.'
    },
    {
      title: 'How can I feature my product or service on Nigerian-Made.com?',
      comment: 'To feature your product or service on our platform, please stay tuned to our channel by visit our "Get Early Access" page and follow the provided guidelines. We will get in touch with you upon our official launch.'
    },
    {
      title: 'Is Nigerian-Made.com an online marketplace?',
      comment: 'Nigerian-Made.com is primarily a showcase and promotional platform. While we highlight Nigerian-made products and services, transactions and purchases typically occur on the websites or stores of the respective businesses featured.'
    },
    {
      title: 'Can I trust the quality of products and services listed on Nigerian-Made.com?',
      comment: 'We aim to feature reputable businesses and products; however, we recommend conducting your research and due diligence before making any purchase. Customer reviews and ratings, where available, can be helpful in making informed decisions.'
    },
    {
      title: 'Do you have a physical store or location?',
      comment: 'Nigerian-Made.com operates primarily as an online platform, and we do not have physical stores or locations. You can access our website from anywhere with an internet connection.'
    },
    {
      title: 'How can I stay updated with the latest Nigerian-made products and news?',
      comment: 'You can stay informed by subscribing to our newsletter, following us on social media, and regularly visiting our website. We also feature blog posts and articles about noteworthy Nigerian-made products and trends.'
    },
    {
      title: ' Is Nigerian-Made.com affiliated with the any specific brands?',
      comment: 'Nigerian-Made.com is an independent platform and not directly affiliated with any specific brands. We aim to support and promote a wide range of Nigerian businesses and products.'
    },
    {
      title: 'Can I advertise my business on Nigerian-Made.com?',
      comment: 'Yes, we will offer  advertising opportunities for businesses looking to reach our audience upon launch. Our advertising team will provide more information on available advertising options.'
    },
    {
      title: 'How can I contact Nigerian-Made.com for further inquiries?',
      comment: 'You can reach out to us through our "Contact Us" page, where you will find our contact information and a contact form. We strive to respond to inquiries promptly.'
    },
    {
      title: '. Is Nigerian-Made.com accessible outside of Nigeria?',
      comment: 'Yes, Nigerian-Made.com is accessible worldwide. We welcome visitors and supporters from both within Nigeria and around the globe who are interested in Nigerian-made products and services.'
    },
  ]

export default Faq