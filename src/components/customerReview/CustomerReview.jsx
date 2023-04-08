import React, { useState, useEffect } from "react";
import './CustomerReviewStyles.css'
import reviewStar from '../../imgs/reviewStar.png'

function CustomerReview() {
    const [reviews] = useState([
        "PREMIUM QUALITY!",
        "The Ring and the whole packaging was amazing no cap. I would suggest russet anytime.Definitely going to buy Esker as well",
        "Amazing customer service!",
        "I have brought many items from Russet and they are all good quality never disappointed even once"
    ]);
    const [customers] = useState([
        "Aun Shakeel",
        "Eman",
        "Haider",
        "Hamza Zia"

    ]);
    const [currentReview, setCurrentReview] = useState(0);
    const [currentCustomer, setCurrentCustomer] = useState(0)

    const handlePreviousReview = () => {
        setCurrentReview((currentReview - 1 + reviews.length) % reviews.length);
    };

    const handleNextReview = () => {
        setCurrentReview((currentReview + 1) % reviews.length);
    };

    const handlePreviousCustomer = () => {
        setCurrentCustomer((currentCustomer - 1 + customers.length) % customers.length);
    };

    const handleNextCustomer = () => {
        setCurrentCustomer((currentCustomer + 1) % customers.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCustomer((currentCustomer + 1) % customers.length)
            setCurrentReview((currentReview + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentReview, reviews, customers, currentCustomer]);



    return (
        <div className="customer-review-wrapper">
            <div className="container d-block">
                <div className="row">
                    <div className="col-md-12">
                        <div className="customer-says">
                            <div className="left px-3 p-1">
                                <h5 className=" w-100 text-center"> See What Our Customer Have To Say</h5>
                            </div>
                            <div className="right">
                                <h5 className="m-0 p-0 me-1">
                                    <div className="icons b mx-2">
                                        <img className="star" src={reviewStar} alt="" />
                                        <img className="star" src={reviewStar} alt="" />
                                        <img className="star" src={reviewStar} alt="" />
                                        <img className="star" src={reviewStar} alt="" />
                                        <img className="star" src={reviewStar} alt="" />
                                    </div>
                                    Based On 1018 Reviews
                                </h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 p-4">
                        <div className="reviews">
                            <div className="customer">
                                <p className="fw-bold">{customers[currentCustomer]}</p>
                            </div>
                            <div className="icons b mx-2">
                                <img className="star" src={reviewStar} alt="" />
                                <img className="star" src={reviewStar} alt="" />
                                <img className="star" src={reviewStar} alt="" />
                                <img className="star" src={reviewStar} alt="" />
                                <img className="star" src={reviewStar} alt="" />
                            </div>
                        </div>
                        <div className="msg"><p>{reviews[currentReview]}</p></div>
                        <div className="d-flex justify-content-between mt-4">
                            <button onClick={handlePreviousReview && handlePreviousCustomer}>Previous</button>
                            <button onClick={handleNextReview && handleNextCustomer}>Next</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CustomerReview