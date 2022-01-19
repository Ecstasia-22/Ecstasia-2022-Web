import './style.css'
import EventsBG from '../../Assets/EventsBG.png'
import Dance from '../../Assets/Dance.png'
import Drama from '../../Assets/Drama.png'
import FineArts from '../../Assets/FineArts.png'
import Games from '../../Assets/Games.png'
import Informals from '../../Assets/Informals.png'
import Literature from '../../Assets/Literature.png'
import Music from '../../Assets/Music.png'
import Photography from '../../Assets/Photography.png'
import { Link } from 'react-router-dom'
function Events() {
  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${EventsBG})` }}>
        <div className="card">
          <img src={Dance} alt="Dance" />
          <Link to="/music">
            <img src={Music} alt="Music" />
          </Link>
          <img src={Drama} alt="Drama" />
          <img src={Photography} alt="Photography" />
          <img src={Literature} alt="Literature" />
          <img src={Games} alt="Games" />
          <img src={FineArts} alt="FineArts" />
          <img src={Informals} alt="Informals" />
        </div>
      </div>
    </>
  )
}

export default Events
