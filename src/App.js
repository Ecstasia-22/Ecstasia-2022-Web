import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import EventListing from './pages/EventListing'
import AboutUs from './pages/AboutUs'

import EventDetail from './pages/EventDetail/index.jsx'

import GalleryPage from './pages/Gallery/index.jsx'
import SocialIcons from './components/SocialIcons/index.jsx'

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

          <Route path="/events/:eventListing/:eventDetail" element={<EventDetail />} />

          <Route
            path="/gallery"
            element={
              <>
                <SocialIcons /> <GalleryPage />
              </>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
