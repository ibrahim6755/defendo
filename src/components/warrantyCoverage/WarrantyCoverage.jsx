import React from 'react'
import './warrantyCoverageStyles.css'
import {Link} from 'react-router-dom'

function WarrantyCoverage() {
    return (
        <div className="warranty-coverage-wrapper py-3">
            <div className="container m-0">
                <div className="div">
                    <h3>Liffe time warranty</h3>
                    <p>We only use high quality materials and real PVD Vacuum and Electroplating
                    </p>
                    <p> Our jewellery is water, heat, sweat resistant, so there is no discolouring or tarnishing under any
                        circumstances. If you start
                        to see any discoloring or tarnishing, we will replace the piece free of charge.</p>

                        <div className="read-more">
                            <Link to="" className='text-center text-white text-decor'>Read More</Link>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default WarrantyCoverage