import React from 'react'
import './FAQsStyles.css'

function FAQs() {
    return (
        <div className="faqs-wrapper p-5">
            <div className="row mb-4">
                <h5 className='text-center fw-bold'>Frequently Asked Questions</h5>
            </div>
            <div className="row ">
                <div className="accordion accordion-flush w-75" id="accordionFlushExample">
                    <p className='my-4 para'>Check most frequently asked questions here, if you still need help then please contact us at contact@shopdefendo.com</p>
                    <h5 className='fw-bold text-uppercase'>generl + company</h5>
                    <div className="accordion-item my-2 ">
                        <h2 className="accordion-header ">
                            <button className="accordion-button collapsed text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                What kind of accessories do you offer?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">We offer a wide range of premium accessories for men, including Chains, Bracelets, Rings and Pendants.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed  text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                What sets your accessories apart from others on the market?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Our accessories are designed with a focus on quality,style n versatility. N these are also designed to be versatile and adaptable to a range of styles n certain occasions.</div>
                        </div>
                    </div>
                    <div className="accordion-item my-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Do you offer international shipping?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body"> No, we are currently dealing in Pakistan only.
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row my-4">
                <div className="accordion accordion-flush w-75" id="accordionFlushExample">
                    <h5 className='fw-bold text-uppercase'>MATERIALS + PRODUCTS</h5>
                    <div className="accordion-item my-2 ">
                        <h2 className="accordion-header ">
                            <button className="accordion-button collapsed text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Are your products sustainable?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Yes, we are committed to sustainability n ethical business practices.

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed  text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                How do I know what size to order for ur accessories?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">We provide detailed sizing information on each product page to help uh determine the best size of ur needs. If you have any questions or need additional assistance,our customer service team is always happy to help.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-4">
                <div className="accordion accordion-flush w-75" id="accordionFlushExample">
                    <h5 className='fw-bold text-uppercase'>RETURNS + EXCHANGES</h5>
                    <div className="accordion-item my-2 ">
                        <h2 className="accordion-header ">
                            <button className="accordion-button collapsed text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                What is your return policy?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">We want you to be completely satisfied with your purchase. Our refund and return policy lasts 15 days. If 15 days have passed since ur purchase,we can not offer you exchange or refund.

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed  text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                How can I contact customer care?
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">You can contact our customer driver teams by email or phone.
                                We are available Monday to Saturday, from 9am to 5pm PST.
                                Please see our contact page for more information.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs