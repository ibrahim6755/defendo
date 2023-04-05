import React from 'react'
import './warrantyCoverageStyles.css'
import warrantyCoveragePic from '../../imgs/warrantyCoveragePic.png'

function WarrantyCoverage() {
    return (
        <div className="warranty-coverage-wrapper py-3">
            <div class="container m-0">
                <div class="div">
                    <h3>Liffe time warranty</h3>
                    <p>We only use high quality materials and real PVD Vacuum and Electroplating
                    </p>
                    <p> Our jewellery is water, heat, sweat resistant, so there is no discolouring or tarnishing under any
                        circumstances. If you start
                        to see any discoloring or tarnishing, we will replace the piece free of charge.</p>

                        <div className="read-more">
                            <a href="" className='text-center text-white text-decor'>Read More</a>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default WarrantyCoverage