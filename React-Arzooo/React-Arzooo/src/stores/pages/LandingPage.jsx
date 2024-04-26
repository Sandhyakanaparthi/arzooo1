

import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <img className='image' src="/banner.jpeg" alt="" />
      <Products />
      <Footer />
    </div>
  )
}

export default LandingPage