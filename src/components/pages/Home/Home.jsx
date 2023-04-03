import React from 'react'
import AnnouncementBar from '../../announcement-bar/AnnouncementBar'
import NavBar from '../../NavBar/NavBar'
import Carousel from '../../carousel/Carousel'

function Home() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />
      <Carousel/>
    </>
  )
}

export default Home