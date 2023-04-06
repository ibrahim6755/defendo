import React from 'react'
import './OurInstaReviewsStyles.css'
import review1 from '../../imgs/review1.png'
import review2 from '../../imgs/review2.png'
import review3 from '../../imgs/review3.png'
import review4 from '../../imgs/review4.png'
import review5 from '../../imgs/review5.png'
import review6 from '../../imgs/review6.png'
import review7 from '../../imgs/review7.png'
import review8 from '../../imgs/review8.png'
import review9 from '../../imgs/review9.png'
import review10 from '../../imgs/review10.png'

function OurInstaReviews() {
    return (
        <div className="our-insta-reviews-wrapper py-2">
            <div className="row">
                <h5 className='text-center '>CATCH UP WITH US ON INSTAGRAM <span>⚡️</span></h5>
                <div className="col-md-4">
                    <div className="row row-imgs py-4">
                        <div className="col-md-6 p-0">
                            <a href=""><img className='w-100 my-2 px-2' src={review9} alt="" /></a>
                            <a href=""><img className='w-100 my-2 px-2' src={review8} alt="" /></a>
                        </div>
                        <div className="col-md-6 p-0">
                            <a href=""><img className='w-100 my-2 px-2' src={review3} alt="" /></a>
                            <a href=""><img className='w-100 my-2 px-2' src={review4} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <a href=""><img className='w-100' src={review5} alt="" /></a>
                </div>
                <div className="col-md-4">
                    <div className="row row-imgs">
                        <div className="col-md-6 p-0">
                            <a href=""><img className='w-100 px-2 my-2 px-2' src={review4} alt="" /></a>
                            <a href=""><img className='w-100 px-2 my-2 px-2' src={review3} alt="" /></a>
                        </div>
                        <div className="col-md-6 p-0">
                            <a href=""><img className='w-100 my-2 px-2' src={review8} alt="" /></a>
                            <a href=""><img className='w-100 my-2 px-2' src={review9} alt="" /></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurInstaReviews