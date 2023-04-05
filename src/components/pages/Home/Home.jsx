import React from 'react'
import AnnouncementBar from '../../announcement-bar/AnnouncementBar'
import NavBar from '../../NavBar/NavBar'
import Carousel from '../../carousel/Carousel'
import JustDropped from '../../justDropped/JustDropped'

function Home() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />
      <Carousel/>
      <JustDropped/>
    </>
  )
}

export default Home