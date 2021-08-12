var config = {
    style: 'mapbox://styles/slurye/cks45ktjh4c5w18mekd26oq3w',
    accessToken: 'pk.eyJ1Ijoic2x1cnllIiwiYSI6ImNrN2Y5ZnhmMzAwazEzZXFvOHExM3AyaWcifQ.eLLKLarsBMQoTVMNo7cumA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Where can you find open seats for childcare in New Orleans?',
    subtitle: 'High-income neighborhoods struggle to find facilities with open seats',
    byline: 'By Sharon Lurye',
    footer: 'Source: Louisiana Department of Education',
    chapters: [
        {
            id: 'chap-1',
            alignment: 'left',
            hidden: false,
            title: 'Childcare Facilities in New Orleans and its Suburbs',
           // image: './path/to/image/source.png',
            description: 'White circles represent licensed childcare facilities with no availability. Blue circles represent facilities that do have open seats.',
            location: {
                center: [-90.06477, 29.97476],
                zoom: 4,
                pitch: 0,
                bearing: 0

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'nola-childcare-geocoded-9q5kuj',
                     type: 'vector',
                     opacity: 1
                 }, {
                    layer: 'nola-plus-neighbors-median-in-7mg9vw',
                    type: 'vector',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                    layer: 'nola-childcare-geocoded-9q5kuj',
                    opacity: 0,
                    type: 'vector',
                    layer: 'nola-plus-neighbors-median-in-7mg9vw',
                    opacity: 1,
                    type: 'vector'
                 }
            ]
        },
        {
            id: 'chap-2',
            alignment: 'right',
            hidden: false,
            title: 'Now add in income',
          //  image: './path/to/image/source.png',
            description: 'Neighborhoods in darker green have a higher median household income.',
            location: {
                center: [-90.06477, 29.98476],
                zoom: 11,
                pitch: 0,
                bearing: 0

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nola-childcare-geocoded-9q5kuj',
                    opacity: 0,
                    layer: 'nola-plus-neighbors-median-in-7mg9vw',
                    opacity: 1
                }
           ],
           onChapterExit: [
                {
                   layer: 'nola-childcare-geocoded-9q5kuj',
                   opacity: 1,
                   layer: 'nola-plus-neighbors-median-in-7mg9vw',
                   opacity: 1
                }
           ]
        },
        {
            id: 'chap-3',
            alignment: 'right',
            hidden: false,
            title: 'A battle for seats in higher-income neighborhoods',
        //    image: './path/to/image/source.png',
            description: 'In Lakeview, there\'s only a single childcare facility left with open seats.',
            location: {
                center: [-90.10921, 30.01131],
                zoom: 13.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chap-4',
            alignment: 'right',
            hidden: false,
            title: 'There are more open seats in lower-income neighborhoods like Algiers',
        //    image: './path/to/image/source.png',
            description: 'But is this because families there can\'t afford childcare to begin with?',
            location: {
                center: [-90.03626, 29.93991],
                zoom: 11.75,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chap-5',
            alignment: 'right',
            hidden: false,
            title: 'Families in New Orleans still have options',
        //    image: './path/to/image/source.png',
            description: 'The majority of the city is within a half-mile of a childcare facility with an open seat.',
            location: {
                center: [-90.06477, 29.97476],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chap-6',
            alignment: 'right',
            hidden: false,
            title: 'Rural parishes have fewer options',
        //    image: './path/to/image/source.png',
            description: 'In Plaquemines Parish, 20 miles separate these two childcare centers.',
            location: {
                center: [-89.68982, 29.48196],
                zoom: 9.12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
