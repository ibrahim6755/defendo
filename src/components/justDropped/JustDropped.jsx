import React from 'react'
import './justDroppedStyles.css'
import modelImg from '../../imgs/justDroppedModel.jpeg'
import droppedProduct from '../../imgs/droppedProduct.jpeg'
function JustDropped() {
  return (
    <div className="just-dropped-wrapper">
       <div className="title">
          <h3 className='text-uppercase text-center fs-6'><i class="bi bi-arrow-down-short"></i> just dropped <i class="bi bi-arrow-down-short"></i></h3>
        </div>
      <div className="container mt-5">
        <div className="view-product-wrapper">
         <div className="row">
          <div className="col-md-6">
          <div className="model-img">
            <img src={modelImg} alt=" Model Image" />
          </div>
          
          </div>
          <div className="col-md-6">
          <div className="product mx-5">
            <div class="card border-0">
              <img src={droppedProduct} class="card-img-top" alt="Product Image" />
              <div class="card-body">
                <h5 class="card-title text-uppercase text-center">44 CALIBER RING</h5>
                <p class="card-text text-center mb-4">1,500.00 PKR</p>
               <div className="button"> <a href="#" class="btn btn-dark text-uppercase text-center card-title text-light p-4 py-2">view this product</a></div>
              </div>
            </div>
          </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default JustDropped