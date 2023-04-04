import React from 'react';
import './NavBarStyles.css';
import brandlogo from '../../imgs/brand-logo.png';

function NavBar() {
    return (
        <div className="nav-bar-wrapper">
            <div className="row mb-0">
                <div className="container-fluid p-0">
                    <div className="col-md-4  left-nav">
                        <ul className=" mb-md-0">
                            <li className='list-style-none'>
                                <a className="btn  d-md-block text-decor" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" >
                                    <i className="bi bi-list text-dark fs-2"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mid-nav col-md-4 ">
                        <ul className="p-0">
                            <li className='list-style-none'>
                                <a className='text-decor' aria-current="page" href="#">
                                    <img className=" pt-3" src={brandlogo} alt="Brand Logo" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right-nav col-md-4 pe-2">
                        <ul className=" right-nav-ul me-3 mb-2 mb-md-0">
                            <li className='list-style-none mx-2 person'>
                                <a className='text-decor' aria-current="page" href="#">
                                    <i className="bi bi-person fs-2 fw-bold text-dark"></i>
                                </a>
                            </li>
                            <li className='list-style-none mx-2 search'>
                                <a className='text-decor' aria-current="page" href="#">
                                    <i className="bi bi-search fs-4 fw-bold text-dark"></i>
                                </a>
                            </li>
                            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                <i className="bi bi-bag fs-4 fw-bold text-dark "></i>
                            </button>

                            <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                                <div class="offcanvas-header pb-1">
                                    <h2 class="offcanvas-title" id="staticBackdropLabel">cart</h2>
                                    <button type="button" class="btn-close fs-6" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <hr />
                                <div class="offcanvas-body">
                                    <div className=' body-text text-center'>
                                        your cart is empty
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <a className='py-5' href="">Home</a>
                    <hr />
                    <a className='py-5' href="">NEW RELEASES</a>
                    <hr />
                    <div className="shop"> <a href="">SHOP BY CATEGORY</a> <a href=""><i class="bi bi-plus-lg fs-6"></i></a></div>
                    <hr />
                    <a className='py-5' href="">EXTRAS</a>
                    <hr />
                    <a className='py-5' href="">COMING SOON</a>
                    <hr />
                    <div className="about ">
                        <a className='d-block my-4' href="">Contact Us</a>
                        <a className='d-block my-4' href="">FAQs</a>
                        <a className='d-block my-4' href="">Warranty Coverage</a>
                        <a className='d-block my-4' href="">Returns & Refunds</a>
                        <a className='d-block my-4' href="">Account</a>
                    </div>
                </div>
                <div className="offcanvas-footer">
                    <hr />
                    <div className="social-media">
                        <a href=""><i class="bi bi-facebook fs-6"></i></a>
                        <a href=""><i class="bi bi-instagram fs-6"></i></a>
                        <a href=""><i class="bi bi-tiktok fs-6"></i></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NavBar