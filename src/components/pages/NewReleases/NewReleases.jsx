import React from 'react'
import './NewReleasesStyles.css'
import {Link} from 'react-router-dom'

function NewReleases() {
    return (
        <div className="new-releases-wrapper">
            <div className="row">
                <h5 className='text-uppercase text-center my-5'>new releases</h5>
                <div className="sorting-navbar">
                    <div className="left-nav p-3 px-4">
                        <div className="grid-icon">
                            <i className="bi bi-grid-3x3-gap-fill fs-4"></i>
                        </div>
                    </div>
                    <div className="right-nav p-0 px-4 " >
                        <div className="sort p-3">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>sort</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item text-uppercase" to="#">Features</Link></li>
                                    <li><Link className="dropdown-item text-uppercase" to="#"> best selling</Link></li>
                                    <li><Link className="dropdown-item text-uppercase" to="#">  alphabetically, a-z</Link></li>
                                    <li><Link className="dropdown-item text-uppercase" to="#">alphabetically, z-a</Link></li>
                                    <li><Link className="dropdown-item text-uppercase" to="#">price,low to high</Link></li>
                                    <li><Link className="dropdown-item text-uppercase" to="#">price,high to low</Link></li>
                                    <li><Link className="dropdown-item text-uppercase" to="#">date,old to new</Link></li>
                                    <li><Link className="dropdown-item text-uppercase" to="#">date,new to old</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter p-3 ">
                            <button className="btn filter-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                <span>filter</span>
                            </button>
                            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                                <div className="offcanvas-header pb-1">
                                <h2 class="offcanvas-title" id="staticBackdropLabel">filters</h2>
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