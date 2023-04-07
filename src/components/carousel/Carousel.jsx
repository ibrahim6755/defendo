import { React, useState } from 'react'
import './CarouselStyles.css'
import mainWideCarousel from '../../imgs/mainWideCarousel.jpeg'
import mobileCarousel from '../../imgs/mobileCarousel.jpeg'
import carousel2 from '../../imgs/carousel-2.jpg'
import carousel3 from '../../imgs/carousel-3.jpg'

import { Link } from 'react-router-dom'
export default function Carousel() {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    return (

        <div className="carousel-wrapper">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img className='d-sm-none d-md-none mob w-100' src={mobileCarousel} alt="" />
                    <img src={mainWideCarousel} className={`wide d-none d-sm-block w-100 fade-in ${isImageLoaded ? 'loaded' : ''}`} alt="" onLoad={() => setIsImageLoaded(true)} />
                    <div className="overlay"></div>
                    <div className="carousel-caption d-md-block">
                            <Link to="" className="btn btn-light text-uppercase text-dark m-3">Shop new releases</Link>
                            <Link to="" className="btn btn-light text-uppercase text-dark m-3">925 silver </Link>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel2} class="d-block w-100" alt="" />
                        <div className="carousel-caption d-md-block">
                            <Link to="" className="btn btn-light text-uppercase text-dark m-3">Shop new releases</Link>
                            <Link to="" className="btn btn-light text-uppercase text-dark m-3">925 silver </Link>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel3} class="d-block w-100" alt="" />
                        <div className="carousel-caption d-md-block">
                            <Link to="" className="btn btn-light text-uppercase text-dark m-3">Shop new releases</Link>
                            <Link to="" className="btn btn-light text-uppercase text-dark m-3">925 silver </Link>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}