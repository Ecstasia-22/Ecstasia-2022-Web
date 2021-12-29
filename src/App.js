import './App.css'
import Navbar from './Navbar'
import CONTENT_BODY from './Content_Body'
import ABOUT from './pages/About/About'
import GALLERY from './pages/Gallery/Gallery'
import EVENTS from './pages/Events/Events'
import PARTNERS from './Partners'
import REGISTER from './Register'
import ABOUTUS from './pages/About/AboutUs'
import CONTACT from './pages/Contact/Contact'
import NEWSFEED from './NewsFeed'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function Home() {
  return (
    <>
      <CONTENT_BODY />
      <GALLERY />
      <ABOUT />
    </>
  )
}
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="./pages/Events/Events" element={<EVENTS />} />
          <Route path="./pages/Gallery/Gallery" element={<GALLERY />} />
          <Route path="/Partners" element={<PARTNERS />} />
          <Route path="/Register" element={<REGISTER />} />
          <Route path="./pages/About/AboutUs" element={<ABOUTUS />} />
          <Route path="./pages/Contact/Contact" element={<CONTACT />} />
          <Route path="/NewsFeed" element={<NEWSFEED />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
