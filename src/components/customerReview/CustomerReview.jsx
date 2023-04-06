import React, { useState, useEffect } from "react";
import './CustomerReviewStyles.css'

function CustomerReview() {
    const [reviews, setReviews] = useState([
        "PREMIUM QUALITY!",
        "The Ring and the whole packaging was amazing no cap. I would suggest russet anytime.Definitely going to buy Esker as well",
        "Amazing customer service!",
        "I have brought many items from Russet and they are all good quality never disappointed even once"
    ]);
    const [customers,setCustomers] = useState([
        "Aun Shakeel",
        "Eman",
        "Haider",
        "Hamza Zia"

    ]);
    const [currentReview, setCurrentReview] = useState(0);
    const [currentCustomer, setCurrentCustomer] = useState(0)
    const [currentReviewPlus, setcurrentReviewPlus] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCustomer((currentCustomer +1) % customers.length)
            setCurrentReview((currentReview + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentReview, reviews,customers,currentCustomer]);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCustomer((currentCustomer +1) % customers.length)
            setcurrentReviewPlus((currentReviewPlus + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentReviewPlus, reviews,customers]);


    return (
        <div className="customer-review-wrapper">
            <div className="container d-block">
                <div className="row">
                    <div className="col-md-12">
                        <div className="customer-says">
                            <div className="left px-3 py-2">
                                <h5 className=" w-100 text-center"> See What Our Customer Have To Say</h5>
                            </div>
                            <div className="right">
                            <h5 className="m-0 p-0 me-1">
                                <div className="icons mx-2">
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                 <span class="material-symbols-outlined">star</span>
                                </div>
                            Based On 1018 Reviews
                            </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 p-4">
                    <p className="fw-bold">{customers[currentCustomer]}</p>
                        <div className="reviews">
                            <div className="msg"><p>{reviews[currentReview]}</p></div>
                            <div className="rating-icon">
                            <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                 <span class="material-symbols-outlined">star</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 p-4">
                    <p className="fw-bold">{customers[currentCustomer]}</p>
                        <div className="reviews">
                            <p>{reviews[currentReviewPlus]}</p>
                            <div className="rating-icon">
                            <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                <span class="material-symbols-outlined">star</span>
                                 <span class="material-symbols-outlined">star</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview