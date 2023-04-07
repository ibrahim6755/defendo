import React from 'react'
import './NewReleasesStyles.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import ProductCard from '../../productCard/ProductCard';

function NewReleases() {

    const [fillWidth, setFillWidth] = useState(0);

    const handleMouseDown = (event) => {
        const rangeBar = event.target.getBoundingClientRect();
        const offsetX = event.clientX - rangeBar.left;
        const rangeBarWidth = rangeBar.width;

        const handleMouseMove = (event) => {
            let newOffset = event.clientX - rangeBar.left - offsetX;
            if (newOffset < 0) {
                newOffset = 0;
            } else if (newOffset > rangeBarWidth) {
                newOffset = rangeBarWidth;
            }
            const newFillWidth = (newOffset / rangeBarWidth) * 100;
            setFillWidth(newFillWidth);
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };
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
                            <button className="btn text-uppercase" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <span>filters</span> </button>

                            <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                <div className="offcanvas-header p-4">
                                    <h5 className="offcanvas-title text-uppercase" id="offcanvasScrollingLabel">filters</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body m-0">
                                    <ul className='p-0 px-2 '>
                                        <li><h5 className='text-uppercase'>availabilty</h5></li>
                                        <li><Link className='my-2' to="">In stock (30)</Link></li>
                                        <li><Link className='my-2' to="">Out of stock (31) </Link></li>
                                    </ul>
                                    <h5 className='text-uppercase px-2 mt-4'>price</h5>
                                   <div className="price-range">
                                   <div
                                        className="price-range-bar"
                                        onMouseDown={handleMouseDown}
                                        style={{ cursor: "pointer" }}
                                    ><div
                                            className="price-range-bar-fill"
                                            style={{ width: `${fillWidth}%` }}
                                        ></div>
                                    </div>
                                   </div>
                                   <div className="rupees mt-3">
                                    <div className="low ">
                                        <div className="rs">
                                            <h4 className='m-0 p-1'>Rs</h4>
                                        </div>
                                        <div className="min">
                                           <h4 className='m-0 p-1'>0</h4>
                                        </div>
                                    </div>
                                    -
                                    <div className="high ">
                                        <div className="rs">
                                        <h4 className='m-0 p-1'>Rs</h4>
                                        </div>
                                        <div className="max">
                                        <h4 className='m-0 p-1'>6000</h4>
                                        </div>
                                    </div>
                                   </div>
                                </div>
                                <div className="offcanvas-footer p-4">
                                   <button className='p-2'>results</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
                <div className="col-md-3">
                <ProductCard/>
                </div>
            </div>
        </div>

    )
}

export default NewReleases