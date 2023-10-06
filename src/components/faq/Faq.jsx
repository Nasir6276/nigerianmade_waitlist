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
      title: 'Question 1 goes here',
      comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are...There are many variations.'
    },
    {
      title: 'Question 1 goes here',
      comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are...There are many variations.'
    },
    {
      title: 'Question 1 goes here',
      comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are...There are many variations.'
    },
    {
      title: 'Question 1 goes here',
      comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are...There are many variations.'
    },
    {
      title: 'Question 1 goes here',
      comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are...There are many variations.'
    },
  ]

export default Faq