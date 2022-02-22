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
          <Link to="/events/dance">
            <img src={Dance} alt="Dance" />
          </Link>
          <Link to="/events/music">
            <img src={Music} alt="Music" />
          </Link>
          <Link to="/events/drama">
            <img src={Drama} alt="Drama" />
          </Link>
          <Link to="/events/photography">
            <img src={Photography} alt="photography" />
          </Link>
          <Link to="/events/literature">
            <img src={Literature} alt="Literature" />
          </Link>
          <Link to="/events/games">
            <img src={Games} alt="Games" />
          </Link>
          <Link to="/events/finearts">
            <img src={FineArts} alt="FineArts" />
          </Link>
          <Link to="/events/informals">
            <img src={Informals} alt="informals" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Events
