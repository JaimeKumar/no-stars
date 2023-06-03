import { useEffect, useRef } from 'react';
import $ from 'jquery';
import { v4 as uuid } from 'uuid';
import { useJsApiLoader } from '@react-google-maps/api';

import './App.css';
import logo from './titleLogo.svg';
import logoN from './logoN.svg';
import pinBlack from './locationPinBlack.svg'
import Slide from './Slide';
import Guest from './Guest';
import Map from './Map';

function App() {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDS5VkMQi0b1EwIjf5lr15cvm-cc-XepD4"
  })

  const rooms = [
    {
      name: 'Red Room',
      location: 'North London',
      text: 'Our flagship Red Room boasts all you need for a world-class recording. Built in 2016, it has been overloaded with industry-leading equipment. Featuring a velvet quilted vocal booth, with a separate screen to help you monitor recordings. Our vintage outboard gear makes this our best studio for vocals, giving them the warmth and presence to sit beautifully on your song.',
      img: 'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/12/IMG_5958-1024x768.jpg',
      gallery: [
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/elementor/thumbs/LJED5257-p7tyj43fad1d2q89vboyhpekhezu0b8pqyczejg5qe.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/elementor/thumbs/LJED5265-p7tyj43fad1d2q89vboyhpekhezu0b8pqyczejg5qe.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/elementor/thumbs/XG8A7362-scaled-p7tyj5z3o13xpy5jkci7moxho6qkfpg6f7nyd3dddy.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/IMG_1886-scaled.jpg'
      ],
      button: 'red',
      pulse: '',
      gear: [
        [
          'Outboard Gear',
          'Universal Audio UAD-2 Satellite Octo x2',
          'Avalon VT-737',
          'Tube Tech CL1B',
          'Neve 1073DPD',
          'Teletronics LA2A',
          'Universal Audio 1176'
        ],
        [
          'Instruments',
          'Yamaha B1 Piano',
          'Gibson Les Paul Guitar',
          'J&D Bass Guitar',
          'AKAI MPD 232',
          'Native Instrumental Komplete Kontrol 49'
        ],
        [
          'Softwares',
          'Logic X',
          'Protools Ultimate',
          'Cubase',
          'Propellahead Reason 10',
          'FULL UAD Audio Plug set',
          'Apple iMac 5K Retina Display',
        ],
        ['Microphone', 'Neumann U87'],
        ['Interface', 'Apogee Ensemble Thunderbolt']
      ],
      category: '1. Red Room',
      id: uuid()
    },
    {
      name: 'White Room',
      location: 'North London',
      text: 'Our White Room is our most frequently used writing and production room. The all white aesthetics are both calming and inspiring. Fully equipped to handle all you recording needs, our White Room is perfectly set up to turn your best ideas into reality.',
      img: 'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/11/IMG_3699-1024x768.jpg',
      gallery: [
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/elementor/thumbs/IMG_3709-scaled-pfktqxy5sal3l7dsmkqzdotiwe3a1t5h9fal0aiz2e.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/11/IMG_3692-300x225.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/11/IMG_3685-scaled.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/11/E756DE07-8462-42E0-BB58-23AFEC8EEE36.jpg'
      ],
      button: 'white',
      pulse: ' darkPulse',
      gear: [
        [
          'Outboard Gear',
          'Universal Audio UAD-2 Satellite Octo',
          'Avalon VT-737',
          'Tube Tech CL1B',
          'Neve 1073'
        ],
        [
          'Speakers',
          'Genelec 8341',
          'Yamaha HS7'
        ],
        [
          'Instruments',
          'Yamaha YDP 163 Digital Piano',
          'Native Instruments Maschine Studio',
          'Gibson Les Paul Guitar',
          'J&D Bass Guitar'
        ],
        [
          'Softwares',
          'Logic X',
          'Protools Ultimate',
          'Cubase',
          'Propellahead Reason 10',
          'FULL UAD audio Plug set',
          'Apple iMac 4K Retina Display'
        ],
        ['Microphone', 'Neumann U87']
      ],
      category: '2. White Room',
      id: uuid()
    },
    {
      name: 'Silver Room',
      location: 'West London',
      text: 'The Silver Room is our newest and largest studio. Built in 2018, it features sloping ceilings and a live room large enough to accommodate a band. Following with our velvet themed booths, the space is professionally treated with Vicoustic panels throughout. The building has a small lounge area downstairs from the studio, with free on road parking.',
      img: 'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/11/IMG_3213-1024x768.jpg',
      gallery: [
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/IMG_1415-768x576.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/IMG_1414-300x225.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/IMG_9693-scaled.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/elementor/thumbs/IMG_1961-scaled-p7tyj35pnzg628kb786b110r7u6brrj7tz5bojg2bk.jpg'
      ],
      button: 'silver',
      pulse: ' darkPulse',
      gear: [
        ['Speakers', 'Yamaha HS7', 'Focal Twins'],
        [
          'Instruments',
          'Native Instrumental Komplete Kontrol 49',
          'Akai MPC',
          'Gibson Les Paul Guitar',
          'J&D Bass Guitar',
          'Harp'
        ],
        [
          'Softwares',
          'Logic X',
          'Protools Ultimate',
          'Cubase',
          'Propellahead Reason 10',
          'FULL UAD audio Plug set',
          'Apple iMac 4K Retina Display'
        ],
        ['Microphone', 'Neumann U87'],
        ['Audio Interface', 'Universal Audio UAD-2 Apollo 8p', 'Avalon VT-737'],
      ],
      category: '3.%20Silver%20Room%20',
      id: uuid()
    },
    {
      name: 'Grey Room',
      location: 'North London',
      text: 'Our grey room is our most affordable yet! From just £10 per hour, its perfect for writing, production and recording. This calm and relaxing space hosts a Neumann microphone into a universal audio interface. All set up and ready for you to explore your next idea! Book now.',
      img: 'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/IMG_2431-1024x768.jpg',
      gallery: [
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/elementor/thumbs/XG8A7340-2-scaled-p7tyj51ut3m43bi7isn73m5wjyt0z2daxbvp3ep5ow.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/IMG_2601-768x576.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/elementor/thumbs/IMG_2600-scaled-p7tyj43fad1d2q89vboyhpekhezu0b8pqyczejg5qe.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/IMG_2430-2-768x576.jpg'
      ],
      button: 'purple',
      pulse: '',
      gear: [
        [
          'Grey Room Gear',
          'Neumann TLM-103',
          'Universal Audio Apollo Twin x',
          'Yamaha HS5',
          'Yamaha YDP-S54'
        ]
      ],
      category: '4. Grey Room',
      id: uuid()
    },
    {
      name: 'Podcast Room',
      location: 'North London',
      text: 'Our podcast room has some of the best equipment of its class. With a host of SM7b microphones, we make sure your voice is heard loud and clear. We offer a 55inch monitor to place your own logo in your podcast and cement your brand. Also, all our podcast sessions include free audio mixing and free filming with our 6k Camera!',
      img: 'https://nostars.uk/wp-content/uploads/2021/05/A6A85494-163C-49A6-9C6A-F65E72E0973E.jpg',
      gallery: [
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/04/podcast-img-2.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/IMG_2188-768x661.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/281DEBFE-C67E-47AE-9ED6-4AD91AB0F9F8.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/elementor/thumbs/IMG_2385-scaled-p7tyj35l3j02r49n0tabx7n3w14gsm4zetphx9hjwm.jpg'
      ],
      button: 'yellow',
      pulse: ' darkPulse',
      gear: [
        [
          'Podcast Room Gear',
          'Apple M1 Mac Mini',
          'Logic Pro X',
          '6x SURE SM7B Microphones',
          '6x Audio Tecnica Headphones',
          '55inch Samsung The Frame display',
          '6K Black Magic Pocket Camera',
          'Live Streaming Available on request'
        ]
      ],
      category: '5. Podcast Room',
      id: uuid()
    },
    {
      name: 'Black Room',
      location: 'North London',
      text: 'Our Brand New Black room brings even more affordability to our studios yet! From just £10 per hour, it’s perfect for writing, production and recording. This calm and relaxing space hosts a Neumann microphone into a universal audio interface. All setup and ready for you to explore your next idea! Book now.',
      img: 'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/02/IMG_4453-scaled.jpg',
      gallery: [
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/02/IMG_4450-1024x768.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/02/IMG_4453-1024x768.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/02/IMG_4458-1024x768.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2021/05/LJED5265-1024x683.jpg'
      ],
      button: 'red',
      pulse: '',
      gear: [
        [
          'Black Room Gear',
          'Neumann TLM-1',
          'Universal Audio Apollo Twin x',
          'Yamaha HS5',
          'Yamaha YDP-S54'
        ]
      ],
      category: '5. Black Room',
      id: uuid()
    },
    {
      name: 'Podcast Pro Room',
      location: 'North London',
      text: 'Take your podcast to the next level with our Podcast Pro Room. Featuring a beautiful wave LED background, free audio mixing using the best in class microphones and computer softwares, free 3x camera filming, make-up area, professional lighting and photography screen, this room is sure to take care of all you professional podcast needs.',
      img: 'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/06/IMG_5052-1024x768.jpg',
      gallery: [
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/elementor/thumbs/IMG_5054-scaled-ppowxrjut7qowc47inc7o9byro0l8wyvhr72giqx3a.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/06/IMG_5013-scaled.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/06/IMG_5015-300x225.jpg',
        'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/06/IMG_5021-scaled.jpg'
      ],
      button: 'blue',
      pulse: '',
      gear: [
        [
          'Podcast Room Gear',
          'Apple M1 Mac mini',
          'Logic Pro X',
          '8x SURE SM7B Microphones',
          '6x Audio Tecnica Headphones',
          'Samsung The Frame display',
          '3x 6K Black Magic Pocket Camera',
          'Live Streaming Available on request',
          'Make Up Area',
          'Photography Area'
        ]
      ],
      category: '6. Podcast Pro Room',
      id: uuid()
    }
  ]

  const homeLinks = [
    {
      img: 'https://nostars.uk/wp-content/uploads/2022/06/IMG_5054-scaled.jpg',
      name: 'Podcast Packages',
      text: 'Save money with our top-tier Podcast studio package deals. Click to find out more.',
      link: 'linkpodcastpackages'
    },
    {
      img: 'https://nostars.uk/wp-content/uploads/2021/11/IMG_3692-scaled.jpg',
      name: 'Studio Packages',
      text: 'Save money with our excellent range of studio packages. Click to find out more.',
      link: 'linkstudiopackages'
    },
    {
      // img: 'https://nostars.uk/wp-content/uploads/2021/05/IMG_1415-scaled.jpg',
      img: 'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/02/IMG_4454-1024x768.jpg',
      name: 'Gift Vouchers',
      text: 'Give the gift of music! Studio & Podcast gift vouchers available now. Click for more.',
      link: 'linkvouchers'
    }
  ]

  const guests = [
    {
      img: 'https://nostars.uk/wp-content/uploads/2021/04/01.jpg',
      text: 'Skepta recording in our Red Room',
      link: rooms[0].id,
      id: uuid()
    },
    {
      img: 'https://nostars.uk/wp-content/uploads/2021/04/02.jpg',
      text: 'Ghetts recording in our Red Room',
      link: rooms[0].id,
      id: uuid()
    },
    {
      img: 'https://nostars.uk/wp-content/uploads/2021/04/06.jpg',
      text: 'Dizzee Rascal recording in our Red room',
      link: rooms[0].id,
      id: uuid()
    },
    {
      img: 'https://nostars.uk/wp-content/uploads/2021/04/03.jpg',
      text: 'Stormzy in our Red Room',
      link: rooms[0].id,
      id: uuid()
    },
    {
      img: 'https://nostars.uk/wp-content/uploads/2021/04/04.jpg',
      text: 'Angel recording in our Silver Room',
      link: rooms[2].id,
      id: uuid()
    },
    {
      img: 'https://nostars.uk/wp-content/uploads/2021/04/05.jpg',
      text: 'Ghetts and Dave in our Silver Room',
      link: rooms[2].id,
      id: uuid()
    },
    {
      img: 'https://nostars.uk/wp-content/uploads/2021/04/08.jpg',
      text: '@poetscorneruk in our White Room',
      link: rooms[1].id,
      id: uuid()
    },
    {
      img: 'https://nostars.uk/wp-content/uploads/2021/04/09.jpg',
      text: 'Fredo and G Money in our Red Room',
      link: rooms[2].id,
      id: uuid()
    }    
  ]

  const blogPosts = [
    {
      title: 'The benefits of recording in a professional music studio',
      subtitle: 'The Benefits of Recording In a professional Music Studio Recording in a professional music studio offers a wide range of benefits for musicians...',
      img: 'https://nostars.uk/wp-content/uploads/2023/02/istockphoto-1064740070-612x612-1.jpg',
      link: 'https://nostars.uk/the-benefits-of-recording-in-a-professional-music-studio/',
      date: 'February 28, 2023'
    },
    {
      title: 'The Importance of Music and Sound effects in Podcasts​',
      subtitle: 'The Importance of Music and Sound effects in Podcasts Music and sound effects can greatly enhance the listening experience for your video podcast...',
      img: 'https://cdn-daboc.nitrocdn.com/NjAuFbRRIZQLkdPKRIeyFNieRKneuiuO/assets/static/optimized/rev-f48965d/wp-content/uploads/2022/06/IMG_5052-1024x768.jpg',
      link: 'https://nostars.uk/elementor-3831/',
      date: 'February 28, 2023'
    },
    {
      title: 'How to Keep Your Video Podcast Audience Interested',
      subtitle: 'Keeping your audience engaged is crucial to the success of your video podcast. In this blog post, we will discuss strategies for maximizing engagement, including...',
      img: 'https://nostars.uk/wp-content/uploads/2023/02/IMG_A991364C9F6B-1-243x300.jpeg',
      link: 'https://nostars.uk/how-to-keep-your-video-podcast-audience-interested/',
      date: 'February 18, 2023'
    },
    {
      title: 'Maximising your recording potential with a sound engineer',
      subtitle: 'Maximizing your recording potential with a sound engineer is crucial for any musician looking to produce high-quality recordings...',
      img: 'https://nostars.uk/wp-content/uploads/2023/02/FCAE0DD1-FFA4-4F0D-965F-899B238A1039-300x238.jpg',
      link: 'https://nostars.uk/maximising-your-recording-potential-with-a-sound-engineer/',
      date: 'February 18, 2023'
    },
    {
      title: 'Podcast Top Tips and Tactics That Can Help You Grow',
      subtitle: 'You have just started your podcast and you want it to be the best it can be. But how can you make sure that all...',
      img: 'https://nostars.uk/wp-content/uploads/2021/04/podcast-b21-300x163.png',
      link: 'https://nostars.uk/podcast-top-tips-and-tactics-that-can-help-you-grow/',
      date: 'May 27, 2021'
    },
    {
      title: 'Looking for a music Studio? Here Is How Colour Psychology Can Help You Make the Right Pick!',
      subtitle: 'Does sitting in a yellow room make you feel happy? Do you feel relaxed and calm when surrounded by a grey interior design?',
      img: 'https://nostars.uk/wp-content/uploads/2021/04/studios-b31-300x198.png',
      link: 'https://nostars.uk/looking-for-a-music-studio-here-is-how-colour-psychology-can-help-you-make-the-right-pick/',
      date: 'May 27, 2021'
    },
    {
      title: 'Ghetts ‘Conflict of Interest’ Album recorded at Nostars Studios',
      subtitle: 'With a career spanning almost twenty years, Ghetts (aka Justin Clarke), is firmly holding onto the spotlight. His long legendary status has provided fans with',
      img: 'https://nostars.uk/wp-content/uploads/2021/06/ghetts-300x190.png',
      link: 'https://nostars.uk/ghetts-conflict-of-interest-album-recorded-at-nostars-studios/',
      date: 'May 27, 2021'
    },
  ]

  const slidePos = useRef(6);
  const slideDir = useRef(1);
  const slideOn = useRef(false);
  var slideTimer;

  function resize() {
    $('#root').css({height: window.innerHeight});
    console.log('window height: ' + window.innerWidth);
  }

  useEffect(() => {
    resize();
    startSlide();
  }, []);

  $(window).on('resize', resize);

  function pushSlide() {
    let amt = slidePos.current * -100;
    $('.slideshow').css({left: amt + '%'});
  }

  function startSlide() {
    slideOn.current = true;
    slideTimer = setInterval(() => {
      if ((slidePos.current + slideDir.current > 6) || (slidePos.current + slideDir.current < 0)) {
        slideDir.current *= -1;
      }
      slidePos.current += slideDir.current;
      pushSlide();
    }, 7000)
  }

  function moveSlide(e) {
    if (e.target.id === 'slideLeft') {
      if (slidePos.current > 0) {
        slidePos.current--;
      }
    } else {
      if (slidePos.current < 6) {
        slidePos.current++;
      }
    }
    
    pushSlide();
    pauseSlide();
  }

  function pauseSlide() {
    clearInterval(slideTimer);
    setTimeout(() => {
      if (!slideOn.current) {
        startSlide();
      }
    }, 10000);
  }

  function navScroll(e) {
    $(`#${e.target.id.slice(4)}`)[0].scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  function allRoomsFunc() {
    navScroll({target: {id: 'linkstudios'}})
  }

  function expandRoom(id) {
    $(`#${id}roomInfo`).addClass('infoExpand')
    $(`#${id}small4`).addClass('showGrid')
    $(`#${id}list`).addClass('showList')
    $(`#${id}roomBlock`).css({height: '1000px'})
    $(`#${id}collapse`).addClass('showList');
    setTimeout(() => {
      $(`#${id}roomBlock`).css({height: 'fit-content'})
    }, 750)
  }

  function collapseRoom(id) {
    $(`#${id}roomBlock`).css({height: '1200px'})
    setTimeout(() => {
      $(`#${id}roomBlock`).css({height: '400px'})
      $(`#${id}roomInfo`).removeClass('infoExpand')
      $(`#${id}small4`).removeClass('showGrid')
      $(`#${id}list`).removeClass('showList')
      $(`#${id}collapse`).removeClass('showList');

    }, 50)
  }

  function buttonClick(id) {
    expandRoom(id);
    $(`#${id}roomBlock`)[0].scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  function openImg(img) {
    $('.largeImg').attr('src', img);
    $('.imgCont').css('display', 'flex');
  }
  
  function closeLargeImg() {
    $('.imgCont').css('display', 'none');
  }

  function expandBlog() {
    $('.blogCont').css('height', 'auto')
    $('#expandBlog').css('display', 'none')
  }

  function openMenu() {
    $('.app').toggleClass('openMenu')
  }

  return (
    <div className="app">
      <div id="navMenuBG"></div>
      <div className="navbar">
        <div id="navMenu" onClick={openMenu}>
          ≣
        </div>
        <img id='linkhome' className="navLogo" src={logo} alt='no stars logo' onClick={navScroll}></img>
        <ul>
          <div id='linkabout' className="navLink" onClick={navScroll}>ABOUT US</div>
          <div id='linkstudios' className="navLink" onClick={navScroll}>STUDIOS</div>
          <div id='linkblog' className="navLink" onClick={navScroll}>BLOG</div>
          <div id='linkcontact' className="navLink" onClick={navScroll}>CONTACT US</div>
        </ul>
        <div id="navMenuHide" onClick={openMenu}>➜</div>
      </div>

      <div className="pages">
        <div id='home' className="page">
          <div className="slideCont">
            <div id='slideLeft' className="slideButton" onClick={moveSlide}>
              《
            </div>
            <div id='slideRight' className="slideButton right" onClick={moveSlide}>
              》
            </div>
            {/* <div className="fade main"></div> */}
            {/* <div className="fade rev main"></div> */}
            <div className="slideshow">
              {rooms.map((room) => {
                return <Slide key={room.id} slide={room} allRoomsFunc={allRoomsFunc} buttonClick={buttonClick} />
              })}
            </div>
          </div>
          <div className="homeBottom">
              <div className='container' id='homeLinkCont'>
                {homeLinks.map((link) => {
                  return (
                    <div className="homeLink" onClick={() => {navScroll({target: {id: link.link}})}} >
                      <div className="fillMask"></div>
                      <img src={link.img} />
                      <div className="fillBubble"></div>
                      <div className="homeLinkText">
                        <h5>{link.name}</h5>
                        <p>{link.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
          </div>
        </div>

        <div id='about' className="page">
          <div className="container">
            <div className="aboutInfo">
              <h1>About Us</h1>
              <div className="aboutText">
                Built in 2016 by industry acclaimed producer/artist PEP, Nostars Studios was created to bridge the gap between high end music studios and affordability. <br/><br/>
                “Artists are more self-sufficient than ever. We are able to independently create and release music on the same platforms as the some of the biggest artists worldwide. However, independent acts often do not have the same budget or resources to match up sonically with major label acts. That’s where we come in.” - Pep <br/><br/>
                Alongside a team of experienced engineers, our aim is to deliver you the best sound in a comfortable environment. Our high-end equipment allows your songs to stand out from the crowd and our pricing means you won’t be breaking the bank in the process. We have created a space where managers, producers and engineers feel confident in bringing their clients, knowing that the best results will always be delivered. Find out more on our studio options here.
              </div>
            </div>
            <div id='aboutImg' style={{backgroundImage: `url(${logoN})`}}></div>
          </div>

          <div id="guestsCont">
            <h1>Our Guests</h1>
            <div id="guestGrid">
              {guests.map(guest => {
                return <Guest key={guest.id} guest={guest} clickGuest={buttonClick} />
              })}
            </div>
            {/* <div className="guestsRow">
              {guests.slice(0, 4).map(guest => {
                return <Guest key={guest.id} guest={guest} clickGuest={buttonClick} />
              })}
            </div>
            <div className="guestsRow">
              {guests.slice(4, 8).map(guest => {
                return <Guest key={guest.id} guest={guest} clickGuest={buttonClick} />
              })}
            </div> */}
          </div>
          
        </div>

        <div id='studios' className="page">
            <div className="container">
              <div className="rooms">
              <h1>Our Rooms</h1>
                {rooms.map((room, i) => {
                  let topClass = 'roomTop';
                  if ((i % 2) === 1) topClass += ' roomReverse'
                  return (
                    <div id={`${room.id}roomBlock`} className="roomBlock">
                      <div className={topClass}>
                        <div className="roomGallery">
                          <img className='roomBlockImg' src={room.img} alt={room.name} onClick={() => {openImg(room.img)}} />
                          <div id={`${room.id}small4`} className="small4" style={{left: (((i + 1) % 2) * 200) - 100 + '%'}}>
                            {room.gallery.map(img => {
                              let thisStyle = {paddingLeft: `${((i+1) % 2) * 5}%`, paddingRight: `${(i % 2) * 5}%`, width: '100%'};
                              return (
                                <div style={thisStyle}>
                                  <div className="smallImgCont" style={{backgroundImage: `url(${img})`}} onClick={() => {openImg(img)}}>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        <div id={`${room.id}roomInfo`} className="roomInfo">
                          <h1>{room.name}</h1>
                          <h3><img src={pinBlack} alt="location" />{room.location}</h3>
                          <p>{room.text}</p>
                          <button className='roomButton' onClick={() => {expandRoom(room.id)}}>BOOK NOW</button>
                        </div>
                      </div>
                      <div className="roomExpand">
                        <div className="gearHalf">
                          <div id={`${room.id}list`} className="gearList">
                            {room.gear.map(list => {
                              return (
                                <>
                                  <h1>{list[0]}</h1>
                                  <hr />
                                  {list.slice(1).map(item => {
                                    return(
                                      <div className="listRow">
                                        <div className="tick"></div>
                                        {item}
                                      </div>
                                    )
                                  })}
                                </>
                              )
                            })}
                        </div>
                        </div>
                        <div className="gearHalf">
                            <iframe className='bookRoom' loading="lazy" title="Schedule Appointment" width="100%" height="100%" frameBorder="0" src={`https://app.acuityscheduling.com/schedule.php?owner=21042378&appointmentType=category:${room.category}`}></iframe>
                        </div>
                        <div id={`${room.id}collapse`} className="collapseButton" onClick={() => {collapseRoom(room.id)}}>︿</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
        </div>

        <div id='blog' className="page">
          <div className="containerCol">
            <h1>Blog</h1>
            <div className="blogCont">
              {blogPosts.map(blog => {
                return(
                  <a href={blog.link} className='blogPost'>
                    <div className="blogImg" style={{backgroundImage: `url(${blog.img})`}}></div>
                    <div className="blogText">
                      <h3>{blog.title}</h3>
                      <p>{blog.subtitle}</p>
                      <i>Read more</i>
                      <div className="blogFooter">
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
            <div id='expandBlog' onClick={expandBlog}><i>See all blog posts...</i></div>
          </div>
        </div>
        
        <div id='contact' className="page" style={{height: '100%'}}>
          <div className="containerCol" style={{height: '100%'}}>
            <h1>Contact Us</h1>
            <div className='contactSplit'>
              <div className="contactIcons">
                <div className='contactBlock'>
                  <p><strong>The Information phone line is open:</strong></p>
                  <p>Mon &#8211; Fri between 11:00am &#8211; 11:00pm</p>
                  <p>Sat &amp; Sun between 11:00am &#8211; 6:00pm</p>
                  <p>Need Us? Call Us.</p>
                </div>
                
                <div className='contactBlock'>
                  <a href="tel:02071128808">
                    <div className="iconsRow">
                      <div className="iconBox">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                      </div>
                      <span>02071128808</span>
                    </div>
                  </a>
                  
                  <a href="tel:07538841234">
                    <div className="iconsRow">
                      <div className="iconBox">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                      </div>
                      <span>07538841234</span>
                    </div>
                  </a>
                  
                  <a href="mailto:studios@nostars.uk">
                    <div className="iconsRow">
                      <div className="iconBox">
                        <svg style={{transform: 'scale(0.9)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                      </div>
                      <span>studios@nostars.uk</span>
                    </div>
                  </a>
                </div>

                <div className='contactBlock'>
                  <a href="https://www.instagram.com/nostars.studios/?hl=en">
                    <div className="iconsRow">
                      <div className="iconBox">
                        <svg style={{transform: 'scale(1.15)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                      </div>
                      <span>@nostars.studios</span>
                    </div>
                  </a>
                  
                  <a href="https://twitter.com/@nostarsstudios">
                    <div className="iconsRow">
                      <div className="iconBox">
                        <svg style={{transform: 'translate(1px, 1px)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                      </div>
                      <span>@nostarsstudios</span>
                    </div>
                  </a>
                  
                  <a href="https://www.facebook.com/nostarsstudios">
                    <div className="iconsRow">
                      <div className="iconBox">
                        <svg style={{transform: 'translate(0px, 4px) scale(1.25)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                      </div>
                      <span>/nostarsstudios</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mapContainer">
                <Map isLoaded={isLoaded} />
              </div>
            </div>
          </div>
        </div>

        
        <div id='studiopackages' className="page">
          <div className="containerCol">
            <h1>Package Deals</h1>
            <div className="packageCont" style={{height: '1230px'}}>
              <iframe title='studioFrame' id='studioFrame' className='studioPackages' loading="lazy" src="https://app.acuityscheduling.com/catalog.php?owner=21042378&#038;category=Music+Studio+Packages"></iframe>
              <div className="packageImgs" id='studioPackImgs'>
                <div className="packImgCont">
                  <div className='option photo1' style={{background: `url(${rooms[0].img}) center/cover`}}></div>
                  <div className='option photo2' style={{background: `url(${rooms[1].img}) center/cover`}}></div>
                </div>

                <div className="packImgCont" style={{marginTop: '30px'}}>
                  <div className='option photo1' style={{background: `url(${rooms[3].img}) center/cover`}}></div>
                  <div className='option photo2' style={{background: `url(${rooms[5].img}) center/cover`}}></div>
                </div>
                
                <div className="packImgCont" style={{marginTop: '30px', background: `url(${rooms[2].img}) center/cover`}}> </div>
              </div>
            </div>
          </div>
        </div>

        <div id='podcastpackages' className="page">
          <div className="containerCol">
            {/* <h1>Podcast Packages</h1> */}
            <div className="packageCont">
              <iframe title='podcastFrame' id='podcastFrame' className='studioPackages' loading="lazy" src="https://app.acuityscheduling.com/catalog.php?owner=21042378&#038;category=Podcast+Package" height="800"></iframe>
              <div className="packageImgs">
                <div id='podPack1' className="podcastPackImg" style={{background: `url(${rooms[6].img}) center/cover`}}></div>
                <div id='podPack2' className="podcastPackImg" style={{background: `url(${rooms[4].img}) center/cover`, marginTop: '30px'}}></div>

              </div>
            </div>
          </div>
        </div>

        <div id='vouchers' className="page">
            <div className="containerCol">
              <h1>Gift Vouchers</h1>
              <i>Vouchers can be redeemed in your cart in lieu of payment.</i>
              <div className="packageCont">
                <iframe title='studioVoucherFrame' id='studioVoucherFrame' loading="lazy" src="https://app.acuityscheduling.com/catalog.php?owner=21042378&#038;category=Music+Studio+Gift+Vouchers" width="100%" height="1500" frameBorder='0'></iframe>
              </div>
            </div>
        </div>
      
        <div id="footer">
          <div className="container" style={{alignItems: 'center'}}>
            <img id='footerhome' className="navLogo" src={logo} alt='no stars logo' style={{transform: 'scale(0.9)'}} onClick={navScroll}></img>
            
            <div id="footerContact">
              <a href="mailto:studios@nostars.uk">
                <svg style={{transform: 'scale(0.9)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                <span>studios@nostars.uk</span>
              </a>

              <a href="tel:02071128808">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                <span>02071128808</span>
              </a>
              
              <a href="tel:07538841234">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                <span>07538841234</span>
              </a>
            </div>
            
            <ul>
              <div id='linkabout' className="navLink" onClick={navScroll}>ABOUT US</div>
              <div id='linkstudios' className="navLink" onClick={navScroll}>STUDIOS</div>
              <div id='linkblog' className="navLink" onClick={navScroll}>BLOG</div>
              <div id='linkcontact' className="navLink" onClick={navScroll}>CONTACT US</div>
            </ul>
          </div>
          <p style={{position: 'absolute', bottom: '0', fontSize: '0.7rem', color: '#777'}}>© All Rights Reserved 2023, Jaime Kumar</p>
        </div>
      </div>

      <div className="imgCont">
          <div className="closeLargeImg" onClick={closeLargeImg}>✖</div>
          <img className="largeImg" alt=''></img>
      </div>
    </div>
  );
}

export default App;