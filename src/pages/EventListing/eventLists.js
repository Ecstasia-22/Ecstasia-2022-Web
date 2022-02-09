import musicCover from '../../Assets/MusicPage/Cover.png'
import musicWatermark from '../../Assets/MusicPage/Watermark.png'
import Funtakshari from '../../Assets/MusicPage/FuntakshariCard.png'
import melodicFiesta from '../../Assets/MusicPage/MelodicFiestaCard.png'
import plugAndPlay from '../../Assets/MusicPage/PlugPlayCard.png'
import sangeetTantra from '../../Assets/MusicPage/SangeetTantraCard.png'
import westernSerenity from '../../Assets/MusicPage/WesternSerenityCard.png'

import danceCover from '../../Assets/DancePage/BackgroundDance.png'
import faceOff from '../../Assets/DancePage/FaceOFF.png'
import fusionFantasea from '../../Assets/DancePage/FusionFantasea.png'
import nott from '../../Assets/DancePage/NoTT.png'
import rhythmicDuo from '../../Assets/DancePage/RhythmicDuo.png'
import stepUp from '../../Assets/DancePage/StepUP.png'

export const eventLists = [
  {
    id: 1,
    name: 'Music Events',
    category: 'music',
    cover: musicCover,
    waterMark: musicWatermark,
    events: [
      {
        id: 1,
        name: 'Funtakshari',
        description: 'Antaksari',
        image: Funtakshari,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Melodic Fiesta',
        description: 'Battle of rock and fusion band',
        image: melodicFiesta,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Plug and Play',
        description: 'Instrumental Music contest',
        image: plugAndPlay,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Sangeet Tantra',
        description: 'Eastern Solo Singing Contest',
        image: sangeetTantra,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 5,
        name: 'Western Serenity',
        description: 'Antaksari',
        image: westernSerenity,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ]
  },
  {
    id: 2,
    name: 'Dance Events',
    cover: danceCover,
    waterMark: musicWatermark,
    events: [
      {
        id: 1,
        name: 'Rhythmic Duo',
        description: 'Duet Dance',
        image: rhythmicDuo,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Fusion Fantasea',
        description: 'Western or Bollywood Group Dance',
        image: fusionFantasea,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Face OFF',
        description: 'Solo Dance Face-off',
        image: faceOff,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Step UP',
        description: 'Western Group Dance',
        image: stepUp,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 5,
        name: 'Nrityar o Tale Tale',
        description: 'Eastern or Semiclassical Group Dance',
        image: nott,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ]
  },
  {
    id: 3,
    name: 'Dance Events',
    cover: musicCover,
    waterMark: musicWatermark,
    events: [
      {
        id: 1,
        name: 'Pather Dabi',
        description: 'Street Duet Dance',
        image: Funtakshari,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Rang o Mancha',
        description: 'Stage Play Contest',
        image: melodicFiesta,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Ad Spoof',
        description: 'Ad spoof Contest',
        image: plugAndPlay,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Swabalambi',
        description: 'Monologue Contest',
        image: sangeetTantra,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ]
  },
  {
    id: 4,
    name: 'Photography Events',
    cover: musicCover,
    waterMark: musicWatermark,
    events: [
      {
        id: 1,
        name: 'Dare to Dubb',
        description: 'Online Dubbing Contest ',
        image: Funtakshari,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Flim Flights',
        description: 'Online Short Flim Making Contest',
        image: melodicFiesta,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Reel o Meter',
        description: 'Online Reel Making Contest',
        image: plugAndPlay,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Perfect Shutter',
        description: 'Online Photography Contest',
        image: sangeetTantra,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 5,
        name: 'Artsy Lens',
        description: 'Online Selfie Contest',
        image: westernSerenity,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ]
  },
  {
    id: 5,
    name: 'Literature Events',
    cover: musicCover,
    waterMark: musicWatermark,
    events: [
      {
        id: 1,
        name: 'Wizword',
        description: 'Online Creative Writing Contest',
        image: Funtakshari,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Grey Cells',
        description: 'Online Inter-school General Quiz Contest',
        image: melodicFiesta,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Knownsense',
        description: 'Online Inter-college General Quiz Contest',
        image: plugAndPlay,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Wordy Muse',
        description: 'Online Poetry Contest ',
        image: sangeetTantra,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ]
  },
  {
    id: 6,
    name: 'Sports Events',
    cover: musicCover,
    waterMark: musicWatermark,
    events: [
      {
        id: 1,
        name: 'Shuttle Hustle',
        description: 'Badminton Contest',
        image: Funtakshari,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Hotshots',
        description: 'Basketball contest',
        image: melodicFiesta,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Cue Marvel',
        description: 'Billiards Contest',
        image: plugAndPlay,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Brainstrorm',
        description: 'Chess Contest',
        image: sangeetTantra,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 5,
        name: 'Futsal',
        description: 'Futsal Contest',
        image: sangeetTantra,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 6,
        name: 'Whiff Whaff',
        description: 'Table Tennis Contests',
        image: sangeetTantra,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ]
  },
  {
    id: 7,
    name: 'Fine Arts Events',
    cover: musicCover,
    waterMark: musicWatermark,
    events: [
      {
        id: 1,
        name: 'Tee Shades',
        description: 'T-Shirt Painting Contest',
        image: Funtakshari,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Maskopedia',
        description: 'Mask Painting Contest',
        image: melodicFiesta,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Color de Carousal',
        description: 'Rangoli Making Contest',
        image: plugAndPlay,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Do a Doodle ',
        description: 'Doodle Making Contest',
        image: sangeetTantra,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ]
  },
  {
    id: 8,
    name: 'Informal Events',
    cover: musicCover,
    waterMark: musicWatermark,
    events: [
      {
        id: 1,
        name: '60 Seconds to Fame',
        description: '',
        image: Funtakshari,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Humour Us',
        description: 'Open Mic Contest',
        image: melodicFiesta,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'The-Meme-R',
        description: 'Online meme making Contest',
        image: plugAndPlay,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'El Dorado',
        description: 'Tresasure Hunt',
        image: sangeetTantra,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ]
  }
]
