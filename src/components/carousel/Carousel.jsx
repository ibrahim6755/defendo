import { React, useState } from 'react'
import './CarouselStyles.css'
import mainWideCarousel from '../../imgs/mainWideCarousel.jpeg'
import mobileCarousel from '../../imgs/mobileCarousel.jpeg'
import {Link} from 'react-router-dom'
export default function Carousel() {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    return (

        <div className="carousel-wrapper">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='d-sm-none d-md-none mob w-100' src={mobileCarousel}/>
                        <div className="">
                            <img src={mainWideCarousel} className={`wide d-none d-sm-block w-100 fade-in ${isImageLoaded ? 'loaded' : ''}`} alt="..." onLoad={() => setIsImageLoaded(true)} />
                            <div className="overlay"></div>
                        </div>
                        <div className="carousel-caption d-md-block">
                        <Link to=""> <div className="btn text-light text-uppercase mx-2 my-3">shop new releases</div></Link>
                        <Link to=""> <div className="btn text-light text-uppercase mx-2 my-3">925 silver</div> </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
