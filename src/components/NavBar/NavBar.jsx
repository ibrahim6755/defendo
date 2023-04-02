import React from 'react';
import './NavBarStyles.css';
import brandlogo from '../../imgs/brand-logo.png';

function NavBar() {
    return (
        <div className="nav-bar-wrapper">
           <div className="row px-5">
           <nav className="navbar navbar-expand-md  ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="col-md-4 col-lg-4">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="btn d-none d-md-block" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" >
                                    <i className="bi bi-list text-dark fs-2"></i>
                                </a>
                            </li>
                        </ul>
                        </div>
                       <div className="mid-nav col-md-4 col-lg-4">
                       <ul className="navbar-nav mb-2 mb-md-0 d-none d-sm-block">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <img className="ps-5" src={brandlogo} alt="Brand Logo" />
                                </a>
                            </li>
                        </ul>
                       </div>
                       <div className="right-nav col-md-4 col-lg-4">
                       <ul className="navbar-nav d-flex ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <i className="bi bi-person fs-3 fw-bold"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <i className="bi bi-search fs-4"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <i className="bi bi-bag fs-4"></i>
                                </a>
                            </li>
                        </ul>
                       </div>
                    </div>
                </div>
            </nav>
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
        </div>
    )
}

export default NavBar