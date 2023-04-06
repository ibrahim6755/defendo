import React from 'react'
import './NewReleasesStyles.css'

function NewReleases() {
    return (
        <div className="new-releases-wrapper">
            <div className="row">
                <h5 className='text-uppercase text-center my-5'>new releases</h5>
                <div className="sorting-navbar">
                    <div className="left-nav p-3 px-4">
                        <div className="grid-icon">
                            <i class="bi bi-grid-3x3-gap-fill fs-4"></i>
                        </div>
                    </div>
                    <div className="right-nav p-0 px-4 " >
                        <div className="sort p-3">
                            <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    sorting
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter p-3 ">
                        <button className="btn filter-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <span>filter</span>
                        </button>
                            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                                <div className="offcanvas-header pb-1">
                                    <h2 className="offcanvas-title" id="staticBackdropLabel">cart</h2>
                                    <button type="button" className="btn-close fs-6" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <hr />
                                <div className="offcanvas-body">
                                    <div className=' body-text text-center'>
                                        your cart is empty
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

export default NewReleases