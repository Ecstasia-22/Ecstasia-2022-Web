import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import EventListing from './pages/EventListing'
import AboutUs from './pages/AboutUs'
import GalleryPage from './pages/Gallery'
import SocialIcons from './components/SocialIcons'
import Teams from './pages/Teams'
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route
            path="/aboutus"
            element={
              <>
                <SocialIcons />
                <AboutUs />
              </>
            }
          />
          {/**The :eventListing take the parameter from url dynamically */}
          <Route path="/events/:eventListing" element={<EventListing />} />
          <Route
            path="/gallery"
            element={
              <>
                <SocialIcons /> <GalleryPage />
              </>
            }
          />
          <Route
            path="/teams"
            element={
              <>
                <SocialIcons /> <Teams />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
