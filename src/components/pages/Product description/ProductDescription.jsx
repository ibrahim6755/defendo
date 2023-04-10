import React from 'react'
import './ProductDescriptionStyles.css'
import { Link } from 'react-router-dom'
import productDesc1 from '../../../imgs/product-desc-1.jpeg'
import productDesc2 from '../../../imgs/product-desc-2.jpeg'

import reviewStar from '../../../imgs/reviewStar.png'
import QuantitySelector from '../../quantitySelector/QuantitySelector'

function ProductDescription() {
    return (
        <div className="product-description-wrapper">
            <div className="row p-3">
                <div className="col-md-3 left-col d-none d-md-block">
                    <div className="div">
                        <a href="#silver"><img className=' d-block' src={productDesc1} alt="" /></a>
                        <a href="#golden"><img className=' d-block' src={productDesc2} alt="" /></a>
                    </div>
                </div>
                <div className="col-md-4 align-items-start mid-col d-none d-md-block">
                    <Link to=""><img id='silver' className='my-4 d-block' src={productDesc1} alt="" /></Link>
                    <Link to=""><img id='golden' className='my-4 d-block' src={productDesc2} alt="" /></Link>

                </div>
                <div className="mob-col col-md-4 ">

                    <div className="carousel">
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={productDesc1} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={productDesc2} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 right-col align-items-start">
                    <h5 className="card-title text-start">44 CALIBER RING</h5>
                    <div className='mt-1 about'>
                        <div className="icons">
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
                    <p className="card-text text-start price mt-4">1,500.00pkr</p>
                    <hr />
                    <div className="ring-size">
                        <p>Ring Size:</p>
                        <div className="btn-group dropdown">
                            <button type="button" className="btn  dropdown-toggle w-100 p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                <h5 className='p-2'>16/ US 6</h5>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href=""> <h5 className='p-1 sizes m-2'>16/ US 6</h5></a></li>
                                <li><a href=""> <h5 className='p-1 sizes m-2'>16/ US 6</h5></a></li>
                                <li><a href=""> <h5 className='p-1 sizes m-2'>16/ US 6</h5></a></li>
                                <li><a href=""> <h5 className='p-1 sizes m-2'>16/ US 6</h5></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="ring-color mt-3">
                        <p>Color: {"Silver"}</p>
                        <div className="color-btn">
                            <a href="#golden"><button className='bg-warning p-3 me-3 w-10'></button></a>
                            <a href="#silver"><button className='bg-secondary p-3 me-3 w-10'></button></a>
                        </div>
                        <div className="quantity-selector mt-3 py-2">
                            <QuantitySelector />
                        </div>
                        <h5 className='p-2 add-cart text-center text-uppercase p-2 my-2 btn'>add to cart</h5>
                        <h5 className='p-2 buy-now text-center text-uppercase p-2 my-1 btn'>buy it now</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription