import React from 'react'
import AnnouncementBar from '../../announcement-bar/AnnouncementBar'
import './ContactUsStyles.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
        <>
            <AnnouncementBar />
            <NavBar />
           <div className="container">
           <div className="row">
            <div className="col-md-4 w-50">
            <div className="contact-us-wrapper">
                <h5 className='heading text-uppercase text-center my-5'>contact us</h5>
                <h5 className='question text-uppercase fw-bold'>how can you contact us?</h5>
                <p className='answer my-3'>Email us at contact@shoprusset.com</p>
                  <p className='answer'>We are confident that you'll find the answers you are looking for from our <Link to="">FAQs page</Link>, however if you do need to speak to us please email contact@shoprusset.com. Please only send 1
                    email with your query. If we receive multiple emails from you, your query will go to the back of the queue and will therefore take a significant amount of time longer to get back to you.</p>
                <h5 className='question text-uppercase fw-bold '>what information do we need to help you?</h5>
                <p className='answer my-4'>Be sure to include as much information as you can e.g./ order number (#123456) email address, pictures, etc. This will allow us to answer any questions you have as quickly as possible. </p>
                <div className="note">
                    <p>Please note that dispatch time from our warehouse is unaffected. If you experience unusual delay in delivery, it might be due to incomplete shipping details or stock discrepancies. Please get in touch with us in that case so we will try our best to offer a solution. </p>
                    <p>Warehouse: 110C, 10th commercial street, DHA phase 4, Karachi</p>
                    <p>WhatsApp: 0323-7277660</p>
                    <p>Email: contact@shoprusset.com</p>
                    <input type="text" placeholder='Your name'/><input type="email"placeholder='Your email' /> <br />
                    <input type="text" placeholder='Your message'/> <br />
                    <button>Send message</button>
                </div>
            </div>
            </div>
           </div>
           </div>

            <Footer/>
        </>
    )
}

export default ContactUs