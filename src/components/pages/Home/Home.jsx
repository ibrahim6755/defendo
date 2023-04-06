import React from 'react'
import AnnouncementBar from '../../announcement-bar/AnnouncementBar'
import NavBar from '../../NavBar/NavBar'
import Carousel from '../../carousel/Carousel'
import JustDropped from '../../justDropped/JustDropped'
import OurVision from '../../ourVision/OurVision'
import ProductCategoryRow from '../../productCategories/ProductCategoryRow'
import WarrantyCoverage from '../../warrantyCoverage/WarrantyCoverage'
import OurInstaReviews from '../../ourInstaReviews/OurInstaReviews'
import CustomerReview from '../../customerReview/CustomerReview'
import Footer from '../../footer/Footer'

function Home() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />
      <Carousel />
      <JustDropped />
      <OurVision />
      <ProductCategoryRow />
      <WarrantyCoverage/>
      <OurInstaReviews/>
      <CustomerReview/>
      <Footer/>
    </>
  )
}

export default Home