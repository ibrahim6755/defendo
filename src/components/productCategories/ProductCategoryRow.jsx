import React from 'react'
import './productCategoryRowStyles.css'
import ProductCardCover from '../productCardCover/ProductCardCover'


function ProductCategoryRow() {
  return (
    <div className="product-category-row-wrapper p-3 pb-0">
       <div className="row p-2">
        <div className="col-md-4 col-sm 4 p-2">
        <ProductCardCover/>
        </div>
        <div className="col-md-4 col-sm 4 p-2">
        <ProductCardCover/>
        </div>
        <div className="col-md-4 col-sm 4 p-2">
        <ProductCardCover/>
        </div>
       </div>
    </div>
  )
}

export default ProductCategoryRow