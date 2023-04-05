import { React, useState } from 'react'
import './CarouselStyles.css'
import mainCarousel from '../../imgs/mainCarousel.jpeg'

export default function Carousel() {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    return (

        <div className="carousel-wrapper">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="wide">
                            <img src={mainCarousel} className={` d-none d-lg-block  w-100 fade-in ${isImageLoaded ? 'loaded' : ''}`} alt="..." onLoad={() => setIsImageLoaded(true)} />
                            <div className="overlay"></div>
                        </div>
                        <div className="carousel-caption d-md-block">
                            <div className="btn text-light text-uppercase mx-2">shop new releases</div>
                            <div className="btn text-light text-uppercase mx-2">925 silver </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
