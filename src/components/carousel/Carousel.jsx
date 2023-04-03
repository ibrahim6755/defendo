import React from 'react'
import './CarouselStyles.css'
import mainCarouselImg from '../../imgs/main-carousel-img.jpg'

export default function Carousel() {
    return (
        <div className="carousel-wrapper">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={mainCarouselImg} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <div className="btn text-dark text-uppercase mx-2">shop new releases</div>
                            <div className="btn text-dark text-uppercase mx-2">925 silver </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
