import React from 'react'
import './contacts.css'

const Contact = () => {
    const map= 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.782056431878!2d121.04276141440681!3d14.554452182108914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8fa00b4306d%3A0x6f1a2c10154fb6b0!2s2nd%20Ave%20%26%2031st%20Street%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1656126427954!5m2!1sen!2sph" width="1000" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <div>
       <section id='contact' className='contacts padding'>
            <div className='container shadow flex'>
                <div className='left row'>
                    <iframe src={map}></iframe>
                </div>
                <div className='right row'>
                    <h1>Contact Us</h1>
                    <p>I want to receive commercial communications and marketing information from Intellias by electronic means of communication (including Phone and e-mail).</p>
                    <div className='items grid2'>
                        <div className='box'>
                            <h4>Address:</h4>
                            <p>31st St cor 2nd Ave BGC, Taguig</p>
                        </div>
                        <div className='box'>
                            <h4>Email:</h4>
                            <p>inquire@dotdesign.com</p>
                        </div>
                        <div className='box'>
                            <h4>Phone:</h4>
                            <p>08-123-4567</p>
                        </div>
                    </div>

                    <form>
                        <div className='flex'>
                            <input type='text' placeholder='Name' />
                            <input type='email' placeholder='Email' />
                        </div>
                        <input type='text' placeholder='Message' />
                        <textarea col='30' rows='10'>
                        Tell us more about the project
                        </textarea>
                        <button className='contact-btn'>Send Message</button>
                    </form> 
                   
                </div>
            </div>
       </section>
    </div>
  )
}

export default Contact