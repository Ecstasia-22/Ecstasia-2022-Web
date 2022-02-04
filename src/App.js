import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import Music from './pages/EventListing'
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          {/**The :eventListing take the parameter from url dynamically */}
          <Route path="/events/:eventListing" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
