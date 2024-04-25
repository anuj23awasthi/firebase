import React from 'react'




const Contact = () =>{
   







  return (
    <div className='outer-container'>
        <p>contact form</p>
        <form className='contactform'>
            <label>full name</label>
            <input type='text'placeholder="Enter your full name"/>

            <label>Email Address</label>
            <input type='text'placeholder="Enter your email"/>

            <label>message</label>
            <textarea type='text'placeholder="Enter your message">
            </textarea>


        </form>
        <button>submit</button>
    </div>
  )
}

export default Contact