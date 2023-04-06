import React from 'react'
import './productCardCoverStyles.css'
import chainsCoverPic from '../../imgs/chainsCoverPic.png'

function ProductCardCover() {
    return (
        <div className="product-card-cover-wrapper">
            <a href="">
            <div className="card mb-3 border-0">
                <div className="cover-pic"><img src={chainsCoverPic} alt="" /></div>
                <div className="card-body">
                <h5 className='card-text text-light text-uppercase fs-16'>made for 24/7 wear</h5>
                    <h3 className="card-title text-light text-uppercase fs-16 ">chains</h3>
                    <button href="#" className="btn btn-light text-uppercase text-dark ">View products</button>
                </div>
            </div>
            </a>
        </div>
    )
}

export default ProductCardCover