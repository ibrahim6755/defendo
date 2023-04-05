import React from 'react'
import AnnouncementBar from '../../announcement-bar/AnnouncementBar'
import NavBar from '../../NavBar/NavBar'
import Carousel from '../../carousel/Carousel'
import JustDropped from '../../justDropped/JustDropped'
import OurVision from '../../ourVision/OurVision'
import ProductCategoryRow from '../../productCategories/ProductCategoryRow'

function Home() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />
      <Carousel />
      <JustDropped />
      <OurVision />
      <ProductCategoryRow />
    </>
  )
}

export default Home