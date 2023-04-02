import React from 'react';
import './NavBarStyles.css';
import brandlogo from '../../imgs/brand-logo.png';

function NavBar() {
    return (
        <div className="nav-bar-wrapper">
            <nav className="navbar navbar-expand-md  ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" >
                                <i className="bi bi-list text-dark fs-2"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-md-0 d-none d-sm-block">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <img className="ps-5" src={brandlogo} alt="Brand Logo" />
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                <i className="bi bi-person fs-3 fw-bold"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                <i className="bi bi-search fs-3"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                <i className="bi bi-bag fs-3"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        Offcanvas
                    </h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </div>
            </div>
        </div>
    )
}

export default NavBar