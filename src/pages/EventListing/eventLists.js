//Music Images import
import musicCover from '../../Assets/MusicPage/Cover.png'
import musicWatermark from '../../Assets/MusicPage/Watermark.png'
import Funtakshari from '../../Assets/MusicPage/FuntakshariCard.png'
import melodicFiesta from '../../Assets/MusicPage/MelodicFiestaCard.png'
import plugAndPlay from '../../Assets/MusicPage/PlugPlayCard.png'
import sangeetTantra from '../../Assets/MusicPage/SangeetTantraCard.png'
import westernSerenity from '../../Assets/MusicPage/WesternSerenityCard.png'

//Dance Images Import
import danceCover from '../../Assets/DancePage/BackgroundDance.png'
import danceWatermark from '../../Assets/DancePage/Watermark.png'
import fusionFantasea from '../../Assets/DancePage/FusionFantasea.png'
import nott from '../../Assets/DancePage/NoTT.png'
import rhythmicDuo from '../../Assets/DancePage/RhythmicDuo.png'
import stepUp from '../../Assets/DancePage/StepUP.png'

//Drama Images Import
import dramaCover from '../../Assets/DramaPage/Cover.png'
import dramaWatermark from '../../Assets/DramaPage/Watermark.png'
import patherDabi from '../../Assets/DramaPage/PatherDabi.png'
import RoM from '../../Assets/DramaPage/RoM.png'
import adSpoof from '../../Assets/DramaPage/AdSpoof.png'
import Swabalambi from '../../Assets/DramaPage/Swabalambi.png'

//Photography Images Import
import photogCover from '../../Assets/PhotographyPage/Cover.png'
import photoWatermark from '../../Assets/PhotographyPage/Watermark.png'
import DtD from '../../Assets/PhotographyPage/DtD.png'
import filmFights from '../../Assets/PhotographyPage/FilmFights.png'
import reelsContest from '../../Assets/PhotographyPage/ReelsContest.png'
import perfectShutter from '../../Assets/PhotographyPage/PerfectShutter.png'
import Selcoholic from '../../Assets/PhotographyPage/Sel-coholic.png'

//Literature Images Import
import litCover from '../../Assets/LiteraturePage/Cover.png'
import litWatermark from '../../Assets/LiteraturePage/Watermark.png'
import Wizword from '../../Assets/LiteraturePage/Wizword.png'
import greyCells from '../../Assets/LiteraturePage/GreyCells.png'
import Knownsense from '../../Assets/LiteraturePage/Knownsense.png'
import WordyMuse from '../../Assets/LiteraturePage/WordyMuse.png'

//Sports Images Import
import sportsCover from '../../Assets/SportsPage/Cover.png'
import sportsWatermark from '../../Assets/SportsPage/Watermark.png'
import Badminton from '../../Assets/SportsPage/Badminton.png'
import Basketball from '../../Assets/SportsPage/Basketball.png'
import Chess from '../../Assets/SportsPage/Chess.png'
import Futsal from '../../Assets/SportsPage/Futsal.png'
import tableTennis from '../../Assets/SportsPage/TableTennis.png'

//FineArts Images Import
import artsCover from '../../Assets/FineArtsPage/Cover.png'
import artsWatermark from '../../Assets/FineArtsPage/Watermark.png'
import teeShades from '../../Assets/FineArtsPage/TeeShades.png'
import Rangolic from '../../Assets/FineArtsPage/Rangolic.png'
import Doodle from '../../Assets/FineArtsPage/Doodle.png'

import informalCover from '../../Assets/InformalsPage/Cover.png'
import Fame from '../../Assets/InformalsPage/Fame.png'
import humourUs from '../../Assets/InformalsPage/HumourUs.png'
import Memer from '../../Assets/InformalsPage/Memer.png'
import treasureHunt from '../../Assets/InformalsPage/TreasureHunt.png'

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
    ],
    others: [
      {
        color: '#F8B147',
        eventName: 'Fine arts',
        link: 'finearts'
      },
      {
        color: '#F78A2D',
        eventName: 'Dance',
        link: 'dance'
      },
      {
        color: '#960796',
        eventName: 'Literature',
        link: 'literature'
      }
    ]
  },
  {
    id: 2,
    name: 'Dance Events',
    cover: danceCover,
    waterMark: danceWatermark,
    category: 'dance',
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
        name: 'Step UP',
        description: 'Western Group Dance',
        image: stepUp,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Nrityar o Tale Tale',
        description: 'Eastern or Semiclassical Group Dance',
        image: nott,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ],
    others: [
      {
        color: '#61B5A9',
        eventName: 'Games',
        link: 'games'
      },
      {
        color: '#A498E2',
        eventName: 'Drama',
        link: 'drama'
      },
      {
        color: '#D24CF1',
        eventName: 'Music',
        link: 'music'
      }
    ]
  },
  {
    id: 3,
    name: 'Drama Events',
    cover: dramaCover,
    category: 'drama',
    waterMark: dramaWatermark,
    events: [
      {
        id: 1,
        name: 'Pather Dabi',
        description: 'Street Duet Dance',
        image: patherDabi,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Rang o Mancha',
        description: 'Stage Play Contest',
        image: RoM,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Ad Spoof',
        description: 'Ad spoof Contest',
        image: adSpoof,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Swabalambi',
        description: 'Monologue Contest',
        image: Swabalambi,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ],
    others: [
      {
        color: '#960796',
        eventName: 'Literature',
        link: 'literature'
      },
      {
        color: '#5E3E13',
        eventName: 'Photography',
        link: 'photography'
      },
      {
        color: '#FC34B0',
        eventName: 'Informals',
        link: 'informals'
      }
    ]
  },
  {
    id: 4,
    name: 'Photography Events',
    cover: photogCover,
    category: 'photography',
    waterMark: photoWatermark,
    events: [
      {
        id: 1,
        name: 'Dare to Dubb',
        description: 'Online Dubbing Contest ',
        image: DtD,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Film Flights',
        description: 'Online Short Flim Making Contest',
        image: filmFights,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Reel o Meter',
        description: 'Online Reel Making Contest',
        image: reelsContest,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Perfect Shutter',
        description: 'Online Photography Contest',
        image: perfectShutter,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 5,
        name: 'Artsy Lens',
        description: 'Online Selfie Contest',
        image: Selcoholic,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ],
    others: [
      {
        color: '#F8B147',
        eventName: 'Fine arts',
        link: 'finearts'
      },
      {
        color: '#960796',
        eventName: 'Literature',
        link: 'literature'
      },
      {
        color: '#A498E2',
        eventName: 'Drama',
        link: 'drama'
      }
    ]
  },
  {
    id: 5,
    name: 'Literature Events',
    category: 'literature',
    cover: litCover,
    waterMark: litWatermark,
    events: [
      {
        id: 1,
        name: 'Wizword',
        description: 'Online Creative Writing Contest',
        image: Wizword,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Grey Cells',
        description: 'Online Inter-school General Quiz Contest',
        image: greyCells,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Knownsense',
        description: 'Online Inter-college General Quiz Contest',
        image: Knownsense,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Wordy Muse',
        description: 'Online Poetry Contest ',
        image: WordyMuse,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ],
    others: [
      {
        color: '#F8B147',
        eventName: 'Fine arts',
        link: 'finearts'
      },
      {
        color: '#A498E2',
        eventName: 'Drama',
        link: 'drama'
      },
      {
        color: '#D24CF1',
        eventName: 'Music',
        link: 'music'
      }
    ]
  },
  {
    id: 6,
    name: 'Sports Events',
    category: 'games',
    cover: sportsCover,
    waterMark: sportsWatermark,
    events: [
      {
        id: 1,
        name: 'Shuttle Hustle',
        description: 'Badminton Contest',
        image: Badminton,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Hotshots',
        description: 'Basketball contest',
        image: Basketball,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Brainstrorm',
        description: 'Chess Contest',
        image: Chess,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'Futsal',
        description: 'Futsal Contest',
        image: Futsal,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 6,
        name: 'Whiff Whaff',
        description: 'Table Tennis Contests',
        image: tableTennis,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ],
    others: [
      {
        color: '#FC34B0',
        eventName: 'Informals',
        link: 'informals'
      },
      {
        color: '#F78A2D',
        eventName: 'Dance',
        link: 'dance'
      }
    ]
  },
  {
    id: 7,
    name: 'Fine Arts Events',
    category: 'finearts',
    cover: artsCover,
    waterMark: artsWatermark,
    events: [
      {
        id: 1,
        name: 'Tee Shades',
        description: 'T-Shirt Painting Contest',
        image: teeShades,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Color de Carousal',
        description: 'Rangoli Making Contest',
        image: Rangolic,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'Do a Doodle ',
        description: 'Doodle Making Contest',
        image: Doodle,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ],
    others: [
      {
        color: '#F78A2D',
        eventName: 'Dance',
        link: 'dance'
      },
      {
        color: '#D24CF1',
        eventName: 'Music',
        link: 'music'
      },
      {
        color: '#960796',
        eventName: 'Literature',
        link: 'literature'
      }
    ]
  },
  {
    id: 8,
    name: 'Informal Events',
    category: 'informals',
    cover: informalCover,
    waterMark: musicWatermark,
    events: [
      {
        id: 1,
        name: '60 Seconds to Fame',
        description: '',
        image: Fame,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 2,
        name: 'Humour Us',
        description: 'Open Mic Contest',
        image: humourUs,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 3,
        name: 'The-Meme-R',
        description: 'Online meme making Contest',
        image: Memer,
        hoveredImage: musicCover //replace this field with the hover image of the event
      },
      {
        id: 4,
        name: 'El Dorado',
        description: 'Tresasure Hunt',
        image: treasureHunt,
        hoveredImage: musicCover //replace this field with the hover image of the event
      }
    ],
    others: [
      {
        color: '#F8B147',
        eventName: 'Fine arts',
        link: 'finearts'
      },
      {
        color: '#F78A2D',
        eventName: 'Dance',
        link: 'dance'
      },
      {
        color: '#960796',
        eventName: 'Literature',
        link: 'literature'
      }
    ]
  }
]
