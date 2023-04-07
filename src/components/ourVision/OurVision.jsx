import React from 'react'
import './OurVisionStyles.css'
import ourvisionImg from '../../imgs/vision.jpeg'

function OurVision() {
    return (
        <div className="our-vision-wrapper">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ourvisionImg} className="d-block w-100" alt=""/>
                        <div className="overlay"></div>
                        <div className="carousel-caption d-md-block">
                            <h5 className='mb-3'> THE VISION</h5>
                            <p>Based in Karachi, we visualize to change the jewelry industry
                                in the country forever. Russet pushes jewelry techniques, form and function
                                like no other. An obsession for constant progression and innovation has allowed
                                us to create unrivalled pieces with the highest levels of quality and durability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurVision