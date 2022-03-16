import About from '../../components/Home/AboutUs/index.jsx'
import Footer from '../../components/Home/Footer/index.jsx'
import Gallery from '../../components/Home/Gallery/index.jsx'
import Hero from '../../components/Home/Hero/index.jsx'
import SocialIcons from '../../components/SocialIcons/index.jsx'

import './home.css'
function Home() {
  return (
    <>
      <Hero />
      <div className="home">
        <SocialIcons />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default Home
