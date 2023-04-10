import React from 'react'
import './ProductDescriptionStyles.css'
import {Link} from 'react-router-dom'
import productDesc1 from '../../../imgs/product-desc-1.jpeg'
import productDesc2 from '../../../imgs/product-desc-2.jpeg'

function ProductDescription() {
  return (
    <div className="product-description-wrapper">
        <div className="row p-2">
            <div className="col-md-3 left-col">
                <div className="div">
                <Link to=""><img className=' d-block' src={productDesc1} alt="" /></Link>
                <Link to=""><img className=' d-block' src={productDesc2} alt="" /></Link>
                </div>
            </div>
            <div className="col-md-4 align-items-start mid-col">
                <Link to=""><img className='my-4 d-block' src={productDesc1} alt="" /></Link>
                <Link to=""><img className='my-4 d-block' src={productDesc2} alt="" /></Link>
            </div>
            <div className="col-md-5 align-items-start">
                <Link to=""><img className='w-25 d-block my-3' src={productDesc1} alt="" /></Link>
                <Link to=""><img className='w-25 d-block my-3' src={productDesc2} alt="" /></Link>
            </div>
        </div>
    </div>
  )
}

export default ProductDescription