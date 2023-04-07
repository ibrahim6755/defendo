import React from 'react'
import './NewReleasesStyles.css'
import ProductCard from '../../productCard/ProductCard';
import SortingNabar from '../../sortingnavbar/SortingNabar';

function NewReleases() {

    return (
        <div className="new-releases-wrapper">
            <SortingNabar />
            <div className="row py-4 px-5">
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
                <div className="col-md-3">
                    <ProductCard />
                </div>
            </div>
        </div>

    )
}

export default NewReleases