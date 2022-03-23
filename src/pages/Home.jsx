import React from 'react'
import Content from '../components/Content'
import HeroSection from '../components/HeroSection'
import Topbar from '../components/Topbar'

const Home = () => {
  return (
    <div>
        <Topbar />
        <HeroSection />
        <Content />
    </div>
  )
}

export default Home