import React from 'react'
import './FooterStyles.css'
import visa from '../../imgs/visa.png'
import creditCard from '../../imgs/credit-card.png'
function Footer() {
    return (
        <div className="footer-wrapper mt-5">
            <div className="row p-5 align-items-start ">
                <div className="col-md-4 text-start">
                    <p className='text-uppercase'>company</p>
                    <ul>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Warranty Coverage</a></li>
                        <li><a href="">Returns & Refunds</a></li>
                        <li><a href="">Shipping Policy</a></li>
                        <li><a href="">Privacy Ploicy</a></li>
                        <li><a href="">Search</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href=""> Refund policy</a></li>
                    </ul>
                </div>
                <div className="col-md-4 text-start">
                    <p className='text-uppercase'>shop</p>
                    <ul>
                        <li><a href="">Bracelets</a></li>
                        <li><a href="">Chains</a></li>
                        <li><a href="">Pendants</a></li>
                        <li><a href="">Rings</a></li>
                    </ul>
                </div>
                <div className="col-md-4 ">
                    <p className='text-uppercase'>join the team</p>
                    <p className='p-text'>Subscribe to receive updates, access to <br /> exclusive deals, and more.</p>
                    <input className='d-block p-2' type="email" placeholder='Enter Your Email address' />
                    <a href="" className="btn text-uppercase my-3">subscribe</a>
                </div>
            </div>
            <div className="row copyright-row px-5 py-4">
                <div className="col-md-6">
                    <p className='text-uppercase copyright'><i class="bi bi-c-circle text-light "></i> defendo</p>
                </div>
                <div className="col-md-6">
                    <div className="payments">
                    <img className='mx-2' src={visa} alt="" />
                    <img className='mx-2' src={creditCard} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Footer