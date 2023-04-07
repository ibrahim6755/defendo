import React from 'react'
import Carousel from '../../carousel/Carousel'
import JustDropped from '../../justDropped/JustDropped'
import OurVision from '../../ourVision/OurVision'
import ProductCategoryRow from '../../productCategories/ProductCategoryRow'
import WarrantyCoverage from '../../warrantyCoverage/WarrantyCoverage'
import OurInstaReviews from '../../ourInstaReviews/OurInstaReviews'
import CustomerReview from '../../customerReview/CustomerReview'

function Home() {
  return (
    <>
      <Carousel />
      <JustDropped />
      <OurVision />
      <ProductCategoryRow />
      <WarrantyCoverage />
      <OurInstaReviews />
      <CustomerReview />

    </>
  )
}

export default Home