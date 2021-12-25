import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'
import CONTENT_BODY from './Content_Body'
import ABOUT from './About'
import GALLERY from './Gallery'
import EVENTS from './Events'
import PARTNERS from './Partners'
import REGISTER from './Register'
import ABOUTUS from './AboutUs'
import CONTACT from './Contact'
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
          <Route path="/Events" element={<EVENTS />} />
          <Route path="/Gallery" element={<GALLERY />} />
          <Route path="/Partners" element={<PARTNERS />} />
          <Route path="/Register" element={<REGISTER />} />
          <Route path="/AboutUs" element={<ABOUTUS />} />
          <Route path="/Contact" element={<CONTACT />} />
          <Route path="/NewsFeed" element={<NEWSFEED />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
