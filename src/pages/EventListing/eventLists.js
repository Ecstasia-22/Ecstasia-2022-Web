import musicCover from '../../Assets/MusicPage/Cover.png'
import musicWatermark from '../../Assets/MusicPage/Watermark.png'
import Funtakshari from '../../Assets/MusicPage/FuntakshariCard.png'
import melodicFiesta from '../../Assets/MusicPage/MelodicFiestaCard.png'
import plugAndPlay from '../../Assets/MusicPage/PlugPlayCard.png'
import sangeetTantra from '../../Assets/MusicPage/SangeetTantraCard.png'
import westernSerenity from '../../Assets/MusicPage/WesternSerenityCard.png'

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
                description : 'Antaksari',
                image: Funtakshari,
                hoveredImage: musicCover, //replace this field with the hover image of the event
            },
            {
                id: 2,
                name: 'Melodic Fiesta',
                description : 'Battle of rock and fusion band',
                image: melodicFiesta,
                hoveredImage: musicCover, //replace this field with the hover image of the event
            },
            {
                id: 3,
                name: 'Plug and Play',
                description : 'Instrumental Music contest',
                image: plugAndPlay,
                hoveredImage: musicCover, //replace this field with the hover image of the event
            },
            {
                id: 4,
                name: 'Sangeet Tantra',
                description : 'Eastern Solo Singing Contest',
                image: sangeetTantra,
                hoveredImage: musicCover, //replace this field with the hover image of the event
            },
            {
                id: 5,
                name: 'Western Serenity',
                description : 'Antaksari',
                image: westernSerenity,
                hoveredImage: musicCover, //replace this field with the hover image of the event
            },
        ]
    },
    {
        id: 2,
        name: 'Dance Events',
        cover: musicCover,
        waterMark: musicWatermark,
        events: [
            {
                id: 1,
                name: 'Funtakshari',
                description : 'Antaksari',
                image: Funtakshari,
                hoveredImage: musicCover, //replace this field with the hover image of the event
            },
        ]
    },
]