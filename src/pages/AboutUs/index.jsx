import './style.css'
import uemLogo from '../../Assets/uemLogo.jpg'
import ecstasiaLogo from '../../Assets/ecstasiaLogo.jpg'
import Footer from '../../components/Footer/index.jsx'
function AboutUs() {
  return (
    <>
      <div className="headerUem">About UEM Kolkata</div>
      <div className="aboutUem">
        <div className="aboutUem2">
          <img src={uemLogo} classname="uemlogo" alt="uemlogo" />
          <div className="text">
            UEM Kolkata was established in the year 2014 by Act No 25 of Govt of West
            Bengal. Students of this university are always on the spot with the top
            corporates. UEM Kolkata has been awarded to be in "AAA" category in NPTEL
            program (IIT Kharagpur and IIT Madras).
          </div>
        </div>
      </div>
      <div className="aboutUem text">
        The IEM-UEM group is a renowned educational group amongst the organizations
        focusing on academic attainment keeping industry at the centre. Exquisite
        standards have been set by IEM-UEM group regarding the depletion of technical and
        management assests. The strong foundation of IEM-UEM group has helped to rise the
        standards and attain fame and recognition all over the country. It aims to serve
        the country by enabling the future generation to attain great success with
        self-sufficiency.
      </div>
      <div className="headerEcstasia">About Ecstasia</div>
      <div className="aboutEcstasia">
        <div className="aboutEcstasia2">
          <div className="text2">
            ECSTASIA is a land of celebration of talents. It is a cultural fest where
            artists and players gather around to share their expertise with everyone.
            Ecstasia is filled with a lot of activities like games and sports, music,
            drama, dance, literacy events, fine arts, photography and even online
            competitions. It is the celebration of uniqueness.
          </div>
          <img src={ecstasiaLogo} classname="ecstasiaLogo" alt="ecstasialogo" />
        </div>
      </div>
      <div className="aboutEcstasia text">
        Join us on the fourth edition of Ecstasia, March 2022, organized by UEM Kolkata.
        Let us all gather and make this a significant moment of our life.
      </div>
      <div className="headerUem">Our Theme</div>
      <div className="headerUem" style={{ padding: '5px' }}>
        The Times of Yore
      </div>
      <div className="aboutUem text">
        UEMK is organizing ECSTASIA with the theme "The Times of Yore". Why not relive our
        memories from our favourite TV channels, favourite food and books, to our
        favourite songs that made our childhood memorable? There is a saying-'Old is
        gold', we become emotional when we recollect the past or bygone days of our life.
        We plunge into blissful memories and ecstasy. Let us mix our memorable times of
        yore with the present significant moment of our life with a nostalgic recollection
        of former times as our expertise by joining us, this march ECSTASIA'22.
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default AboutUs
