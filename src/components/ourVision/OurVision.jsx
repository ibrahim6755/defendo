import React from 'react'
import './OurVisionStyles.css'
import ourvisionImg from '../../imgs/ourVision.png'

function OurVision() {
    return (
        <div className="our-vision-wrapper">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={ourvisionImg} class="d-block w-100" alt="..." />
                        <div className="overlay"></div>
                        <div class="carousel-caption d-none d-md-block">
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