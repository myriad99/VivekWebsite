import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-header">
                Contact
            </div>
            <div className="contact-info">
                <div className="contact-entry">
                    <div className="email contact-info">
                        <div className="email-header">Email</div>
                        <p> vivekjyoti24@gmail.com</p>
                    </div>
                    <div className="linkedin contact-info">
                        <div className="linkedin-header"> LinkedIn </div>
                        <p>
                            <a href="https://www.linkedin.com/in/vivekjyotib">linkedin.com/in/vivekjyotib</a>
                        </p>
                    </div>
                    <div className="portfolium contact-info">
                        <div className="portfolium-header">Portfolium </div>
                        <p>
                            <a href="https://www.portfolium.com/vivekjyoti24">portfolium.com/vivekjyoti24</a>
                        </p>
                    </div>
                    <div className="phone contact-info">
                        <div className="phone-number">Phone</div>
                        <p>(443) 949-4151</p>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
