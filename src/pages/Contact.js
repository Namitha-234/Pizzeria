import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide'  style={{backgroundImage:`url(${PizzaLeft})`}}>

        </div>
        <div className='rightSide'></div>
      <h1>Contact Us</h1>
      <form id='contact-form' method='POST'>
        <label htmlFor='name'>Full Name</label>
        <input name='name' placeholder='Enter full name...' type='text'></input>
        <label htmlFor='email'>E-mail</label>
        <input name='email' placeholder='Enter e-mail...' type='email'></input> 
        <label htmlFor='message'>Message</label>
        <textarea rows='6' placeholder='Enter Message...' name='message' required></textarea>
        <button type='submit'>Send Message</button>



      </form>
    </div>
  )
}

export default Contact
