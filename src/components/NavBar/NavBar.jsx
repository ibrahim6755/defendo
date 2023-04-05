import React from 'react';
import './NavBarStyles.css';
import brandlogo from '../../imgs/brand-logo.png';

function NavBar() {
    return (
        <div className="nav-bar-wrapper sticky-top bg-body-tertiary">
            <div className="col-md-4  left-nav">
                <ul className=" mb-md-0">
                    <li className='list-style-none'>
                        <a className="btn  d-md-block text-decor" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" >
                            <i className="bi bi-list text-dark fs-4"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mid-nav col-md-4 p-0 ">
                <ul className="p-0">
                    <li className='list-style-none'>
                        <a className='text-decor' aria-current="page" href="#">
                            <img  src={brandlogo} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="right-nav col-md-4 pe-2">
                <ul className=" right-nav-ul me-3 mb-2 mb-md-0">
                    <li className='list-style-none mx-2 person'>
                        <a className='text-decor' aria-current="page" href="#">
                            <i className="bi bi-person fs-3 fw-bold text-dark"></i>
                        </a>
                    </li>
                    <li className='list-style-none mx-2 search'>
                        <a className='text-decor' aria-current="page" href="#">
                            <i className="bi bi-search fs-5 fw-bold text-dark"></i>
                        </a>
                    </li>
                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        <i className="bi bi-bag fs-5 fw-bold text-dark "></i>
                    </button>

                    <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
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
                </ul>
                <div className="dropdown d-none">
                    <button className="dropdown-toggle fs-3 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                    </button>
                    <ul className="dropdown-menu">
                        <li className='list-style-none mx-2 person'>
                            <a className='text-decor' aria-current="page" href="#">
                                <i className="bi bi-person fs-3 fw-bold text-dark"><span className='ms-1'>Account</span></i>
                            </a>
                        </li>
                        <li className='list-style-none mx-2 search'>
                            <a className='text-decor' aria-current="page" href="#">
                                <i className="bi bi-search fs-5 fw-bold text-dark"><span className='ms-1'>Search</span></i>
                            </a>
                        </li>
                        <li className='list-style-none mx-2 cart '>
                            <button className="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                <i className="bi bi-bag fs-5 fw-bold text-dark "><span className='ms-2'>Cart</span></i>
                            </button>

                            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
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
                        </li>
                    </ul>
                </div>
            </div>




            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header mb-4">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body m-0  py-5 px-4">
                    <a className='py-5 ' href="">Home</a>
                    <hr />
                    <a className='py-5 ' href="">NEW RELEASES</a>
                    <hr />
                    <button className="accordion-button d-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div className="shop-cat"><div className="category ">SHOP BY CATEGORY</div><div className="icon"><i className="bi bi-plus-lg fs-6"></i></div></div>
                    </button>
                    <div className="accordion " id="accordionExample">
                        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                            <div className="about mb-0 px-3">
                                <a className='d-block my-1 py-2 text-uppercase' href=""> chains</a>
                                <a className='d-block my-1 py-2 text-uppercase' href="">pendants</a>
                                <a className='d-block my-1 py-2 text-uppercase' href=""> rings</a>
                                <a className='d-block my-1 py-2 text-uppercase' href=""> bracelets</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <a className='py-5 ' href="">EXTRAS</a>
                    <hr />
                    <a className='py-5 ' href="">COMING SOON</a>
                    <hr />
                    <div className="about mt-4">
                        <a className='d-block my-3' href="">Contact Us</a>
                        <a className='d-block my-3' href="">FAQs</a>
                        <a className='d-block my-3' href="">Warranty Coverage</a>
                        <a className='d-block my-3' href="">Returns & Refunds</a>
                        <a className='d-block my-3' href="">Account</a>
                    </div>
                </div>
                <div className="offcanvas-footer">
                    <hr className='m-1 w-100' />
                    <div className="social-media py-2">
                        <a href=""><i className="bi bi-facebook fs-6"></i></a>
                        <a href=""><i className="bi bi-instagram fs-6"></i></a>
                        <a href=""><i className="bi bi-tiktok fs-6"></i></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NavBar