import {React,useState} from 'react'
import './CarouselStyles.css'
import mainCarouselImg from '../../imgs/main-carousel-img.jpg'
import mobileCarousel from '../../imgs/mobile-carousel.png'

export default function Carousel() {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    return (
        <div className="carousel-wrapper">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={mobileCarousel} className={`mob d-none w-100 fade-in ${isImageLoaded ? 'loaded' : ''}`} alt="..." onLoad={() => setIsImageLoaded(true)} />
                        
                    <img src={mainCarouselImg} className={` wide w-100 fade-in ${isImageLoaded ? 'loaded' : ''}`} alt="..." onLoad={() => setIsImageLoaded(true)} />

                        <div class="carousel-caption d-md-block">
                            <div className="btn text-dark text-uppercase mx-2">shop new releases</div>
                            <div className="btn text-dark text-uppercase mx-2">925 silver </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
