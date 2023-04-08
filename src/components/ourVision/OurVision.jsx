import React from 'react'
import './OurVisionStyles.css'
import visionMain from '../../imgs/visionmainpage.jpg'

function OurVision() {
    return (
        <div className="our-vision-wrapper">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={visionMain} className="d-block w-100" alt="" />
                        <div className="overlay"></div>
                        <div className="carousel-caption d-md-block">
                            <h5 className='mb-3'> THE VISION</h5>
                            <p>
                                ‘At DEFENDO, We are passionate about helping men express theorie Unique style and personality through high quality,stylish accessories.

                                Our vision is to go to the destination for men who want to elavte their style and stand out from the crowd.

                                We’re committed to offering a wide range of premium accessories that are both timeless and on trend,including, Chains, Rings, Pendants and Bracelets.

                                At DEFENDO, we believen that accessoires are not just add-on but an essential part of the modern men’s wardrobe.
                                We’re excited to be a part of this journey and can’t wait to see where it takes us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurVision