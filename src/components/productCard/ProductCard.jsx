import React from 'react'
import './ProductCardStyles.css'
import cardimg from '../../imgs/card1.png'
import { Link } from 'react-router-dom'
import reviewStar from '../../imgs/reviewStar.png'

function ProductCard() {


    return (
        <div className="product-card-wrapper">
            <div className="card border-0">
                <Link to="/product=description"><img src={cardimg} className="card-img-top" alt="" /></Link>
                <div className="card-body">
                    <h5 className="card-title text-center">44 CALIBER RING</h5>
                    <div className='mt-2 about'>
                        <div className="icons mx-2">
                            <img className="star" src={reviewStar} alt="" />
                            <img className="star" src={reviewStar} alt="" />
                            <img className="star" src={reviewStar} alt="" />
                            <img className="star" src={reviewStar} alt="" />
                            <img className="star" src={reviewStar} alt="" />
                        </div>
                        <div className="text">
                            <p className='review'>1 review</p>
                        </div>
                    </div>
                    <p className="card-text text-center price">1,500.00pkr</p>
                    <div className="colors mt-3">
                        <Link to="" className="btn btn-primary m-1 p-2"></Link> <Link to="#" className=" m-1 btn btn-warning  p-2"></Link> <Link to="#" className=" m-1 btn btn-dark  p-2"></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard