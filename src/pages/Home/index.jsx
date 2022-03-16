import About from '../../components/Home/AboutUs/index.jsx'
import Footer from '../../components/Home/Footer/index.jsx'
import Gallery from '../../components/Home/Gallery/index.jsx'
import Hero from '../../components/Home/Hero/index.jsx'
import SocialIcons from '../../components/SocialIcons/index.jsx'

import { Grid } from '@mui/material'

import './home.css'
function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <SocialIcons />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default Home
