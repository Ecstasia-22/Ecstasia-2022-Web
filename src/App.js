import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar'
import CONTENT_BODY from './Content_Body'
import ABOUT from './About'
import GALLERY from './Gallery'
function App() {
  return (
    <>
      <Navbar />
      <CONTENT_BODY />
      <GALLERY />
      <ABOUT />
    </>
  )
}

export default App
