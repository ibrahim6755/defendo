import React from 'react'
import './OurInstaReviewsStyles.css'
import review3 from '../../imgs/review3.png'
import review4 from '../../imgs/review4.png'
import review5 from '../../imgs/review5.png'
import review8 from '../../imgs/review8.png'
import review9 from '../../imgs/review9.png'
import {Link} from 'react-router-dom'

function OurInstaReviews() {
    return (
        <div className="our-insta-reviews-wrapper py-2">
            <div className="row">
                <h5 className='text-center '>CATCH UP WITH US ON INSTAGRAM <span>⚡️</span></h5>
                <div className="col-md-4">
                    <div className="row row-imgs py-4">
                        <div className="col-md-6 p-0">
                            <Link to=""><img className='w-100 my-2 px-2' src={review9} alt="" /></Link>
                            <Link to=""><img className='w-100 my-2 px-2' src={review8} alt="" /></Link>
                        </div>
                        <div className="col-md-6 p-0">
                            <Link to=""><img className='w-100 my-2 px-2' src={review3} alt="" /></Link>
                            <Link to=""><img className='w-100 my-2 px-2' src={review4} alt="" /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <Link to=""><img className='w-100' src={review5}  alt=""/></Link>
                </div>
                <div className="col-md-4">
                    <div className="row row-imgs">
                        <div className="col-md-6 p-0">
                            <Link to=""><img className='w-100 px-2 my-2 px-2' src={review4} alt="" /></Link>
                            <Link to=""><img className='w-100 px-2 my-2 px-2' src={review3} alt="" /></Link>
                        </div>
                        <div className="col-md-6 p-0">
                            <Link to=""><img className='w-100 my-2 px-2' src={review8} alt="" /></Link>
                            <Link to=""><img className='w-100 my-2 px-2' src={review9} alt="" /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurInstaReviews