export const skillTypeData = [
  {
    title: 'coreStack',
    content: 'frontendContent',
    delayAnimation: 0,
    images: [
      {
        img: 'react.png',
        label: 'reactJS',
        number: '95percent',
        bar: 95,
        delayAnimation: '0',
      },
      {
        img: 'nextJs.svg',
        label: 'nextJS',
        number: '85percent',
        bar: 85,
        delayAnimation: '100',
      },
      {
        img: 'ts.png',
        label: 'typeScript',
        number: '85percent',
        bar: 85,
        delayAnimation: '100',
      },
      {
        img: 'nodeJS.png',
        label: 'nodeJS',
        number: '85percent',
        bar: 85,
        delayAnimation: '100'
      }
    ]
  },
  {
    title: 'frontendDev',
    content: 'frontendContent',
    delayAnimation: 0,
    images: [
      {
        img: 'redux.png',
        label: 'redux',
        number: '80percent',
        bar: 80,
        delayAnimation: '150',
      },
      { img: 'mui.svg', label: 'mui', number: '80percent', bar: 80, delayAnimation: '250' },
      { img: '', label: 'vueJS', number: '80percent', bar: 80, delayAnimation: '250' },
    ]
  },

  {
    title: 'backendDev',
    content: 'backendDevContent',
    delayAnimation: 50,
    images: [
      { img: 'asp.png', label: 'ASP', number: '70percent', bar: 70, delayAnimation: '150' },
      { img: 'php.png', label: 'PHP', number: '90percent', bar: 90, delayAnimation: '200' },
      { img: 'wordpress.png', label: 'wordpress', number: '90percent', bar: 90, delayAnimation: '250' },
      { img: 'woocommerce.png', label: 'woocommerce', number: '90percent', bar: 90, delayAnimation: '300' },
    ]
  },
  {
    title: 'databaseDev',
    content: 'databaseDevContent',
    delayAnimation: 50,
    images: [

      { img: 'postgresql.svg', label: 'postgresql', number: '75percent', bar: 75, delayAnimation: '100' },
      { img: 'mongoDB.png', label: 'MongoDB', number: '75percent', bar: 75, delayAnimation: '100' },
      { img: 'graphQL.png', label: 'graphQL', number: '75percent', bar: 75, delayAnimation: '100' },
      { img: 'mysql.png', label: 'mySQL', number: '75percent', bar: 75, delayAnimation: '100' },
    ]
  },
  {
    title: 'versionControl',
    content: 'versionControlContent',
    delayAnimation: 200,
    images: [
      {
        img: 'gitlab.png',
        label: 'gitlab',
        number: '95percent',
        bar: 95,
        delayAnimation: '0',
      },
      {
        img: 'git.png',
        label: 'git',
        number: '95percent',
        bar: 95,
        delayAnimation: '0',
      },
      {
        img: 'jenkins.png',
        label: 'jenkins',
        number: '90percent',
        bar: 90,
        delayAnimation: '100',
      },
        {
          img: 'kubernetes.png',
          label: 'kubernetes',
      },
      {
        img: 'docker.png',
        label: 'docker',
    }]
  }
];

export const tagList = ['All', 'Platform', 'Ecommerce', 'Corporate', 'Campaign', 'Wordpress'];
export const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

export const categoryListContent = [{
  img: 'sniff-frolic-home.jpg',
  title: 'Sniff & Frolic Ecommerce Platform',
  slug: 'sniff-and-frolic-ecommerce',
  category: 'Ecommerce',
  delayAnimation: '0',
  content: {
    companyName: 'Sniff & Frolic (Side Project)',
    projectDate: '2025',
    description: [
      'Sniff & Frolic is a product-focused Ecommerce platform built for a pet lifestyle brand, combining brand storytelling with practical and user-friendly shopping experiences.',
      'The frontend is built with Next.js, focusing on reusable UI components, clear page structures, and performance-aware rendering to support both marketing content and product discovery.',
      'The platform integrates with WooCommerce via REST APIs to retrieve and manage product data, categories, pricing, and inventory, allowing the frontend to remain decoupled from the CMS layer.',
      'Special attention was given to data mapping and normalization between WooCommerce responses and frontend components, ensuring flexibility for future feature expansion and content changes.',
      'This project reflects a product-oriented development approach, balancing technical structure, UX considerations, and real-world Ecommerce requirements.'
    ],
    hashtags: [
      'Next.js',
      'Ecommerce',
      'Frontend Architecture',
      'Component-based UI',
      'Product-focused Development',
      "Payment Integration",
      'UX/UI',
      'Javascript ES6+'
    ],
    imgItems: [
      {
        img: 'sniff-frolic-home.jpg',
        title: 'Sniff & Frolic Homepage',
        category: 'Sniff & Frolic',
        imgLink: '',
        delayAnimation: '0',
      },
      {
        img: 'sniff-frolic-product.jpg',
        title: 'Product Listing & Detail Pages',
        category: 'Sniff & Frolic Ecommerce',
        imgLink: '',
        delayAnimation: '0',
      }
    ],
    links: ['https://app.sniffnfrolic.com/'],
    liveLinks: [
      {
        title: 'Sniff & Frolic',
        url: 'https://app.sniffnfrolic.com/',
      }
    ],
    gitLink: [
      {
        title: 'Source Code',
        url: 'https://github.com/ahstop1112/sniff-n-frolic-nextjs-store',
      }
    ],
  },
  },
  {
    img: 'perrycheung-corporate.jpg',
    title: 'Perry Cheung Personal Website',
    slug: 'perrycheung-corporate',
    category: 'Corporate',
    delayAnimation: '0',
    content: {
      companyName: 'perrycheung.com',
      projectDate: '2024',
      description: [
        'PerryCheung.com is my personal portfolio website which is showing my portfolio and the details of each project.',
        'Using various technologies include ReactJS (Hooks), MUI, GIT',
      ],
      hashtags: [
        'Coding Architecture',
        'Single Page Application',
        'ReactJS',
        'MUI',
        'Javascript ES6+',
        'Github',
      ],
      imgItems: [
        {
          img: 'perrycheung-corporate.jpg',
          title: 'PerryCheung.com',
          category: 'PerryCheung.com',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'perrycheung-corporate-2.jpg',
          title: 'PerryCheung.com Portfolio',
          category: 'PerryCheung.com Portfolio',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: ['https://www.perrycheung.com/'],
      liveLinks: [{
        title: 'PerryCheung.com',
        url: 'https://www.perrycheung.com/',
      },{
        title: 'PerryCheung.com Portfolio',
        url: 'https://www.perrycheung.com/portfolio',
      }],
      gitLink: [{
        title: 'Source Code',
        url: 'https://github.com/ahstop1112/perrycheung.com/',
      }],
    },
  },
  {
    img: 'simplicity-cms-system.jpg',
    title: 'Simplicity Content Management System',
    slug: 'simplicity-cms-system',
    category: 'Platform',
    delayAnimation: '0',
    content: {
      companyName: 'Radical I/O',
      projectDate: '2024',
      description: [
        'Simplicity is a Content Management System with non-technical user friendly interface for helping Government (District of North Vancouver) users to maintain their corporate websites and reducing the operating time.',
        'Using various technologies include ReactJS (Hooks), TypeScript, MUI, RESTful API Integration, BitBucket, GIT',
      ],
      hashtags: [
        'Coding Architecture',
        'Single Page Application',
        'ReactJS',
        'TypeScript', 
        'MUI',
        'Javascript ES6+',
        'Figma',
        'Restful API Integration',
        'Unit Testing',
        'JEST',
      ],
      imgItems: [
        {
          img: 'simplicity-cms-system.jpg',
          title: 'Simplicity',
          category: 'simplicity',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'simplicity-cms-system-2.jpg',
          title: 'Dnv.org Revamp',
          category: 'dnv.org',
          imgLink: '',
          delayAnimation: '0',
        },
      ],
      links: ['https://www.simplicitycms.ca/', 'https://dnv.org'],
      liveLinks: [{
        title: 'About Simplicity',
        url: 'https://www.simplicitycms.ca/',
      },{
        title: 'Dnv.org Revamp',
        url: 'https://dnv.org',
      }],
      gitLink: [],
    },
  },
  {
    img: 'haitong-internal-system.jpg',
    title: 'Haitong Operating System',
    slug: 'haitong-operating-system',
    category: 'Platform',
    delayAnimation: '0',
    content: {
      companyName: 'Hatong International Securities Limited',
      projectDate: '2022',
      description: [
        'OP+ is a Trading Operation system which is built from scratch for helping internal agents maintain client’s trading records and reduce over 70% operating time and tones of the email.',
        'Using various technologies include ReactJS (Hooks), MUI, RESTful API Integration, Unit Testing (JEST, Enzyme), Jenkins, GIT',
      ],
      hashtags: [
        'Coding Architecture',
        'Single Page Application',
        'ReactJS',
        'TypeScript', 
        'MUI',
        'Javascript ES6+',
        'UX/UI Design',
        'Restful API Integration',
        'Unit Testing',
        'JEST',
      ],
      imgItems: [
        {
          img: 'haitong-internal-system.jpg',
          title: 'In-house 01',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
        {
          img: 'haitong-internal-system.jpg',
          title: 'In-house 02',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '100',
        }
      ],
      links: [],
      liveLinks: [],
      gitLink: [],
    },
  },
  {
    img: 'haitong-securities-corporate-website.jpg',
    title: 'Haitong Securities International Corporate Website',
    slug: 'haitong-securities-corporate-website',
    category: 'Corporate',
    delayAnimation: '100',
    content: {
      companyName: 'Hatong International Securities Limited',
      projectDate: '2022',
      description: [
        'Helping content update, style fine tune and adding SEO on existing Haitong Corporate Website.',
        'Using various technologies include ReactJS (Hooks), TypeScript, MUI, RESTful API Integration, Jenkins, GIT',
      ],
      hashtags: ['ReactJS', 'TypeScript', 'MUI', 'CSS', 'Restful API Integration'],
      imgItems: [
        {
          img: 'haitong-securities-corporate-website.jpg',
          title: 'In-house 01',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'haitong-securities-corporate-website.jpg',
          title: 'In-house 01',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: [],
      liveLinks: ['http://htisec.com'],
      gitLink: [],
    },
  },
  {
    img: 'serai-supply-chain-platform.jpg',
    title: 'Serai B2B platform',
    slug: 'serai-b2b-platform',
    category: 'Platform',
    delayAnimation: '100',
    content: {
      companyName: 'Serai Limited (HSBC Group, closed at 2022)',
      projectDate: '2020',
      description: [
        'Serai B2B platform is a social sharing application like Facebook for allowing suppliers to register and share their company information with each other',
        'Using various technologies include ReactJS, Redux, MUI, NodeJS (Express), RESTful API Integration, Unit Testing (JEST, Enzyme, Cypress), GIT, AWS (EC2 / S3)',
      ],
      hashtags: [
        'Coding Architecture',
        'ReactJS',
        'TypeScript',
        'MUI',
        'Javascript ES6+',
        'Redux',
        'NodeJS',
        'MongoDB',
        'GraphQL',
        'd3.js',
        'AWS',
      ],
      imgItems: [
        {
          img: 'serai-supply-chain-platform.jpg',
          title: 'In-house 01',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
        {
          img: 'serai-supply-chain-platform2.jpg',
          title: 'In-house 02',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '100',
        },
      ],
      links: [],
      liveLinks: [
        {
          title: 'About Serai',
          url: 'https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template',
        },
        {
          title: 'News',
          url: 'https://incubees.com/serai-strenghtens-global-position-launches-digital-solutions/',
        }
      ],
      gitLink: '',
    },
  },
  {
    img: 'ipms-property-managment-platform.jpg',
    title: 'IPMS Property Management platform',
    slug: 'ipms-property-managment-platform',
    category: 'Platform',
    delayAnimation: '100',
    content: {
      companyName: 'IPMS (Freelance)',
      projectDate: '2022',
      description: [
        'IPMS CMS is a Property Management platform which is built from scratch for supporting the IPMS Property Mobile app’s content update, including the estate, building, floor, unit, facilities, even the notices and billings, etc.',
        'Using various technologies include ReactJS, Typescript, MUI, RESTful API Integration',
      ],
      hashtags: ['Coding Architecture', 'ReactJS', 'MUI', 'TypeScript', 'UX/UI Design', 'AWS'],
      imgItems: [
        {
          img: 'ipms-property-managment-platform.jpg',
          title: 'Listing Records',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
        {
          img: 'ipms-property-managment-platform2.jpg',
          title: 'Edit Record',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '100',
        }
      ],
      links: [],
      liveLinks: [],
      gitLink: '',
    },
  },
  {
    img: 'fayfay-content-management-panel.jpg',
    title: 'Fayfay.com Content Management platform',
    slug: 'fayfay-content-management-platform',
    category: 'Platform',
    delayAnimation: '100',
    content: {
      companyName: 'Fayfay.com Limited (Closed)',
      projectDate: '2019',
      description: [
        'Fayfay.com CMS is a internal Content Management System which is built from scratch for managing the main site, including all Create, Read, Update, Delete functions',
        'Using various technologies include ReactJS, MUI, RESTful API Integration',
      ],
      hashtags: [
        'Coding Architecture',
        'ReactJS',
        'MUI',
        'Javascript ES6+',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'AWS',
      ],
      imgItems: [
        {
          img: 'fayfay-content-management-panel.jpg',
          title: 'Listing Records',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'fayfay-content-management-panel.jpg',
          title: 'Listing Records',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: [
        'https://e.vnexpress.net/news/travel/places/visiting-vietnam-is-easier-with-new-online-booking-platform-3854055.html',
        'https://travmedia.com/showPRPreview/100061914',
      ],
      liveLinks: [{ title: 'About Serai', url: 'https://www.facebook.com/Fayfaycom/' }],
      gitLink: '',
    },
  },
  {
    img: 'fayfay-ecommerce-website.jpg',
    title: 'Fayfay.com Travel Experiences Ecommerce Website',
    slug: 'fayfay-ecommerce-website',
    category: 'Ecommerce',
    delayAnimation: '100',
    content: {
      companyName: 'Fayfay.com Limited (Closed)',
      projectDate: '2019',
      description: [
        'Fayfay.com is a Vietnam based Ecommerce platform for selling joyful and attractive experiences to tourists like Agoda.',
        'Using various technologies include ReactJS, Redux, SASS, NodeJS (Express), MongoDB, RESTful API Integration, Stripe API Integration, Google analytics, Chatbot, GIT, AWS (EC2 / S3)',
      ],
      hashtags: ['Coding Architecture', 'ReactJS', 'MUI', 'NodeJS', 'ExpressJS', 'MongoDB', 'AWS'],
      imgItems: [
        {
          img: 'fayfay-ecommerce-website.jpg',
          title: 'Listing Records',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'fayfay-ecommerce-website.jpg',
          title: 'Listing Records',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: [
        'https://e.vnexpress.net/news/travel/places/visiting-vietnam-is-easier-with-new-online-booking-platform-3854055.html',
        'https://travmedia.com/showPRPreview/100061914',
      ],
      liveLinks: [{ title: 'Fayfay.com', url: 'https://www.facebook.com/Fayfaycom/' }],
      gitLink: '',
    },
  },
  {
    img: 'prada-totem-game.jpg',
    title: 'Prada Totem IPad Game for reatil store promotion',
    slug: 'prada-totem-game',
    category: 'Campaign',
    delayAnimation: '100',
    content: {
      companyName: 'Prada (Freelance)',
      projectDate: '2021',
      description: [
        'Prada Totem Game was a store campaign for the customers who can draw and win the limited edition souvenir.',
        'Using various technologies include ReactJS, CSS3 Animation and deployed to Digital Ocean',
      ],
      hashtags: ['Coding Architecture', 'ReactJS', 'CSS3 Animation', 'Digital Ocean'],
      imgItems: [
        {
          img: 'prada-totem-game.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'prada-totem-game.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
      ],
      links: [],
      liveLinks: [],
      gitLink: '',
    },
  },
  {
    img: 'esteen-lauder-ecommerce-website.jpg',
    title: 'Esteen Lauder Ecommerce Website',
    slug: 'esteen-lauder-ecommerce-website',
    category: 'Ecommerce',
    delayAnimation: '100',
    content: {
      companyName: 'Esteen Lauder (Isobar Hong Kong)',
      projectDate: '2015',
      description: [
        'Esteen lauder ecommerce website was one of the most famous skincare products which built by Isobar digital agency',
        'Using various technologies include  PHP Framework, Modern Javascript and deployed to AWS',
      ],
      hashtags: ['PHP Framework (Lavarel)', 'JQuery', 'HTML5', 'AWS'],
      imgItems: [
        {
          img: 'esteen-lauder-ecommerce-website.jpg',
          title: 'Home Page',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'esteen-lauder-ecommerce-website.jpg',
          title: 'Home Page',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
      ],
      links: [],
      liveLinks: [{ title: 'Esteen Lauder Website', url: 'https://www.esteelauder.com.hk/en-hk/' }],
      gitLink: '',
    },
  },
  {
    img: 'audi-progressive-like-you-campaign.jpg',
    title: 'Audi "Progressive. Like Audi like You"',
    slug: 'audi-progressive-like-you-campaign',
    category: 'Campaign',
    delayAnimation: '100',
    content: {
      companyName: 'Audi (Isobar Hong Kong)',
      projectDate: '2014',
      description: [
        'Hong Kong Audi "Progressive. Like Audi Like You" campaign was one of the most famous skincare products which built by Isobar digital agency',
        'Using various technologies include  PHP Framework, Modern Javascript and deployed to Digital Ocean',
      ],
      hashtags: ['Coding Architecture', 'ReactJS', 'Javascript', 'AWS'],
      imgItems: [
        {
          img: 'audi-progressive-like-you-campaign.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
        {
          img: 'audi-progressive-like-you-campaign2.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
        {
          img: 'audi-progressive-like-you-campaign3.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
      ],
      links: ['https://www.youtube.com/watch?v=LaBMkoYBD2A'],
      liveLinks: [{ title: 'Audi Campaign', url: 'https://www.youtube.com/watch?v=LaBMkoYBD2A' }],
      gitLink: '',
    },
  },
  {
    img: 'uniqlo-re-jean-campaign.jpg',
    title: 'Uniqlo 10 years Re-Jean DIY Workshop Campaign',
    slug: 'uniqlo-re-jean-campaign',
    category: 'Campaign',
    delayAnimation: '100',
    content: {
      companyName: 'Uniqlo (Isobar Hong Kong)',
      projectDate: '2015',
      description: [
        'This was one of the largest campaign of Uniqlo 10 years anniversary, I helped to build the online game and support all SEO stuffs, e.g. Adding meta tags, keywords, Google Analytics, Google Tag Manager, Facebook API integartion',
        'How to Play: Users login with their facebook account, selected their favourite Unqilo Jeans, designed their jeans with provided patterns and graphics, uploaded to thier own Facebook page and win the Jeans.',
        'Using various technologies include  PHP Framework (Yii), Canavs, HTML5, JQuery and deployed to AWS',
      ],
      hashtags: [
        'Coding Architecture',
        'PHP Framework Yii',
        'Canavs',
        'HTML5',
        'CSS3',
        'JQuery',
        'SEO',
        'Google Analytics',
        'Google Tag Manager',
        'AWS',
      ],
      imgItems: [
        {
          img: 'uniqlo-re-jean-campaign.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'uniqlo-re-jean-campaign.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
      ],
      links: ['https://www.facebook.com/uniqlo.hk/posts/1105680792795407/?paipv=0&eav=AfY6O6EhgavUqp9MrmJtKK5PtpE6DwyPSAJYiXNeGNmRS26UEKdXlpJmHw_e7JJR0rM&_rdr'],
      liveLinks: [
        {
          title: 'Uniqlo Facebook Post',
          url: 'https://www.facebook.com/uniqlo.hk/posts/1105680792795407/?paipv=0&eav=AfY6O6EhgavUqp9MrmJtKK5PtpE6DwyPSAJYiXNeGNmRS26UEKdXlpJmHw_e7JJR0rM&_rdr',
        },
      ],
      gitLink: '',
    },
  },
  {
    img: 'uniqlo-air-ism-campaign.jpg',
    title: 'Uniqlo AIRism Campaign',
    slug: 'uniqlo-air-ism-campaign',
    category: 'Campaign',
    delayAnimation: '100',
    content: {
      companyName: 'Uniqlo (Isobar Hong Kong)',
      projectDate: '2015',
      description: [
        'This was one of the campaign of Uniqlo 10 years anniversary for promoting the "AIRism" clothes. I helped to create the page and support all SEO stuffs, e.g. Adding meta tags, keywords, Google Analytics, Google Tag Manager, etc',
        'Using various technologies include  PHP Framework (Yii), Canavs, HTML5, JQuery and deployed to AWS',
      ],
      hashtags: ['PHP Framework Yii', 'Canavs', 'HTML5', 'CSS3', 'JQuery', 'SEO, AWS'],
      imgItems: [
        {
          img: 'uniqlo-air-ism-campaign.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'uniqlo-air-ism-campaign.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: ['https://www.facebook.com/IsobarHK/photos/a.167265903309358/831823886853553/'],
      liveLinks: [
        {
          title: 'Uniqlo Facebook Post',
          url: 'https://www.facebook.com/IsobarHK/photos/a.167265903309358/831823886853553/',
        },
      ],
      gitLink: '',
    },
  },
  {
    img: 'the-penisula-corporate-website.jpg',
    title: 'The Penisula (Hong Kong) Corporate Website',
    slug: 'the-penisula-corporate-website',
    category: 'Corporate',
    delayAnimation: '100',
    content: {
      companyName: 'The Penisula Hotels (Isobar Hong Kong)',
      projectDate: '2015',
      description: [
        'Uniqlo',
        'Using various technologies include  PHP Framework (Yii), Canavs, HTML5, JQuery and deployed to Digital Ocean',
      ],
      hashtags: ['PHP Framework Laravel', 'HTML5', 'CSS3', 'JQuery', 'SEO', 'AWS'],
      imgItems: [
        {
          img: 'the-penisula-corporate-website.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'the-penisula-corporate-website.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: ['https://www.peninsula.com/en/hong-kong/5-star-luxury-hotel-kowloon'],
      liveLinks: [
        {
          title: 'The Peninsula Corporate Website',
          url: 'https://www.peninsula.com/en/hong-kong/5-star-luxury-hotel-kowloon',
        },
      ],
      gitLink: '',
    },
  },
  {
    img: 'hkjc-beijing-clubhouse-corporate-website.jpg',
    title: 'Hong Kong Jockey Club - Beijing Clubhouse Corporate Website',
    slug: 'hkjc-beijing-clubhouse-corporate-website',
    category: 'Corporate',
    delayAnimation: '100',
    content: {
      companyName: 'Hong Kong Jockey Club',
      projectDate: '2018',
      description: [
        'The Hong Kong Jockey Club has a rich history spanning over 130 years. In 2008, the first Membership Clubhouse outside Hong Kong opened its doors in China’s capital city, Beijing, providing Members with a popular place to develop their business and social networks. ',
        'Using various technologies include ASP.NET, ReactJS for the Enquiry Form, CSS3 Animation, HTML5, JQuery',
      ],
      hashtags: ['ASP.NET', 'ReactJS', 'CSS3 Animation', 'HTML5', 'JQuery', 'SEO', 'AWS'],
      imgItems: [
        {
          img: 'hkjc-beijing-clubhouse-corporate-website.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'hkjc-beijing-clubhouse-corporate-website.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
      ],
      links: ['https://www.beijingclubhouse.com/en-US/index.aspx'],
      liveLinks: [
        {
          title: 'HKJC Beijing Clubhouse Corporate Website',
          url: 'https://www.beijingclubhouse.com/en-US/index.aspx',
        },
      ],
      gitLink: '',
    },
  },
  {
    img: 'hkjc-corporate-website.jpg',
    title: 'Hong Kong Jockey Club Corporate Website',
    slug: 'hkjc-corporate-website',
    category: 'Corporate',
    delayAnimation: '100',
    content: {
      companyName: 'Hong Kong Jockey Club',
      projectDate: '2018',
      description: [
        'The Hong Kong Jockey Club is a world-class horse racing club that acts continuously for the betterment of the society.',
        'hkjc.com is a large-scale revamp project for presenting HKJC various business, e.g. Racing, Membership, Charities. Also, it includes the Content Management System and the Customer Relationship System behind the scense.',
        'Using various technologies include ASP.NET (team site forms), SASS, JQuery and CSS3 Anmiations',
      ],
      hashtags: ['Coding Architecture', 'ASP.NET', 'Team Site', 'CSS3 Animations', 'JQuery'],
      imgItems: [
        {
          img: 'hkjc-corporate-website.jpg',
          title: 'Home Page',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
        {
          img: 'hkjc-corporate-website2.jpg',
          title: 'Membership Home Page',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
        {
          img: 'hkjc-corporate-website3.jpg',
          title: 'Racing Home Page',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: ['https://www.hkjc.com/home/english/index.aspx'],
      liveLinks: [
        {
          title: 'Hong Kong Jockey Club Corporate Website',
          url: 'https://www.hkjc.com/home/english/index.aspx',
        },
      ],
      gitLink: '',
    },
  },
  {
    img: 'hkjc-membership-exclusive-ecommerce-website.jpg',
    title: 'Hong Kong Jockey Club Membership Exclusive Shopping Ecommerce Website',
    slug: 'hkjc-membership-exclusive-ecommerce-website',
    category: 'Ecommerce',
    delayAnimation: '100',
    content: {
      companyName: 'Hong Kong Jockey Club',
      projectDate: '2018',
      description: [
        'Exclusive Shopping is a Ecommerce website for HKJC members for buying the seasonal products, e.g. moon cakes or rice cakes.',
        'The part of frontend was built in AngularJS and using the Magento API for displaying products details. In addition, the products and promotions were maintained with the Magento Admin Panel.',
        'Using various technologies include  Magento API and AngularJS',
      ],
      hashtags: ['Magento API', 'AngularJS', 'ASP.NET'],
      imgItems: [
        {
          img: 'hkjc-membership-exclusive-ecommerce-website.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'hkjc-membership-exclusive-ecommerce-website.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: ['https://member.hkjc.com/member/english/exclusive-shopping/festive/index_cny_ordering.aspx#/'],
      liveLinks: [
        {
          title: 'Membership Exclusive Shopping Website',
          url: 'https://member.hkjc.com/member/english/exclusive-shopping/festive/index_cny_ordering.aspx#/',
        },
      ],
      gitLink: '',
    },
  },
  {
    img: 'lightlinks-interior-design-house-corporate-website.jpg',
    title: 'LIGHTLINKS Corporate Website',
    slug: 'lightlinks-interior-design-house',
    category: 'Corporate',
    delayAnimation: '100',
    content: {
      companyName: 'LIGHTLINKS International Limited (Freelance)',
      projectDate: '2020',
      description: [
        "LIGHTLINKS INTERNATIONAL LIMITED was founded in Hong Kong and Tokyo to provide professional lighting design and consulting services for wide range of projects. LIGHTLINKS's design philosophy is literally based on the LINKAGE.",
        'Using various technologies include ReactJS, CSS3 Animation',
      ],
      hashtags: ['Single Page Application', 'CSS3 Animation', 'JavaScript'],
      imgItems: [
        {
          img: 'lightlinks-interior-design-house-corporate-website.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        },
        {
          img: 'lightlinks-interior-design-house-corporate-website2.jpg',
          title: 'Simple Game Interface',
          category: 'In-house',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: ['https://lightlinksltd.com/'],
      liveLinks: [
        {
          title: 'LIGHTLINKS Corporate Website',
          url: 'https://lightlinksltd.com/',
        },
      ],
      gitLink: '',
    },
  },
  {
    img: 'lsnp-hk-ecommerce-website.jpg',
    title: 'LSNP Hong Kong Ecommerce Website',
    slug: 'lsnp-hk-ecommerce-website',
    category: 'Ecommerce',
    delayAnimation: '100',
    content: {
      companyName: 'LSNP Hong Kong',
      projectDate: '2019',
      description: [
        'HomeoBeau Ecommerce site which is selling hair care products, including product description, product ranking.',
        'Updated: The cart was removed and redirected to HKTvMall.com',
        'Using various technologies include PHP Framework (Yii)',
      ],
      hashtags: ['PHP Framework (Yii)'],
      imgItems: [
        {
          img: 'lsnp-hk-ecommerce-website.jpg',
          title: 'Product Page',
          category: '',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'lsnp-hk-ecommerce-website.jpg',
          title: 'Product Page',
          category: '',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: [],
      liveLinks: [
        {
          title: 'LSNP Hong Kong Ecommerce Website',
          url: 'https://www.lsnp.hk/',
        },
      ],
      gitLink: '',
    },
  },
  {
    img: 'homeobeau-ecommerce-website.jpg',
    title: 'HomeoBeau Ecommerce Website',
    slug: 'homeobeau-ecommerce-website',
    category: 'Ecommerce',
    delayAnimation: '100',
    content: {
      companyName: 'HomeoBeau (Freelance)',
      projectDate: '2021',
      description: [
        'HomeoBeau Ecommerce site which is selling Japan skin care product, including product description, product ranking and Amazon payment gateway',
        'Using various technologies include Woocommerce, Amazon Payment Gateway',
      ],
      hashtags: ['PHP Framework (Woocommerce)', 'Amazon Payment', 'AWS'],
      imgItems: [
        {
          img: 'homeobeau-ecommerce-website.jpg',
          title: 'Product Page',
          category: '',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'homeobeau-ecommerce-website.jpg',
          title: 'Product Page',
          category: '',
          imgLink: '',
          delayAnimation: '0',
        }
      ],
      links: [],
      liveLinks: [
        {
          title: 'HomeObeau Ecommerce Website',
          url: 'https://www.homeobeau.com/',
        },
      ],
      gitLink: '',
    },
  },
  {
    img: 'future-animation-wordpress.jpg',
    title: 'Future Animation',
    slug: 'future-animation-wordpress',
    category: 'Wordpress',
    delayAnimation: '0',
    content: {
      companyName: 'Freelance',
      projectDate: '2024',
      description: [
        'Future Animation is a user-friendly event information website which is organized by HK Government and built with Wordpress and using related wordpress plugins, e.g. ElementorUI, WPForms, Polylang and Yoast SEO, etc',
        'Using various technologies include Wordpress PHP framework and CSS',
      ],
      hashtags: [
        'Wordpress',
        'Single Page Application',
        'Responsive Design',
        'CSS',
        'Elementor UI',
        'WPForms',
        'Polylang',
        'Yoast SEO',
        'Google Analytics',
      ],
      imgItems: [
        {
          img: 'future-animation-wordpress.jpg',
          title: 'Future Animation',
          category: 'Future Animation',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'future-animation-wordpress-album.jpg',
          title: 'Lightbox Album',
          category: 'Future Animation Album',
          imgLink: '',
          delayAnimation: '0',
        },
      ],
      links: ['https://futureanimation.com.hk/en/home-en/', 'https://futureanimation.com.hk/en/annecy-Festival-2024-album-en/'],
      liveLinks: [{
        title: 'Future Animation',
        url: 'https://futureanimation.com.hk/en/home-en/',
      },
        {
        title: 'Future Animation Album',
        url: 'https://futureanimation.com.hk/en/annecy-Festival-2024-album-en/',
      }],
      gitLink: [],
    },
  },
  {
    img: 'go-illustrator-wordpress.jpg',
    title: 'Go Illustratror',
    slug: 'go-illustrator-wordpress',
    category: 'Wordpress',
    delayAnimation: '0',
    content: {
      companyName: 'Freelance',
      projectDate: '2024',
      description: [
        'Go Illustrator is a user-friendly event information website which is organized by HK Government and built with Wordpress and using related wordpress plugins, e.g. ElementorUI, WPForms, Polylang and Yoast SEO, etc',
        'Using various technologies include Wordpress PHP framework and CSS',
      ],
      hashtags: [
        'Wordpress',
        'Single Page Application',
        'Responsive Design',
        'CSS',
        'Elementor UI',
        'WPForms',
        'Polylang',
        'Yoast SEO',
        'Google Analytics',
      ],
      imgItems: [
        {
          img: 'go-illustrator-wordpress.jpg',
          title: 'Go Illustratror',
          category: 'Go Illustratror',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'go-illustrator-wordpress-competitions.jpg',
          title: 'Go Illustratror Competitions',
          category: 'Go Illustratror Competitions',
          imgLink: '',
          delayAnimation: '0',
        },
      ],
      links: ['https://goillustrators.hk/en/', 'https://goillustrators.hk/competitions-en/'],
      liveLinks: [{
        title: 'Go Illustratror',
        url: 'https://goillustrators.hk/en/',
      },
        {
        title: 'Go Illustratror Competitions',
        url: 'https://goillustrators.hk/competitions-en/',
      }],
      gitLink: [],
    },
  },
  {
    img: 'hkfmf-wordpress.jpg',
    title: 'THE FIRST HONG KONG FILM MUSIC FIESTA',
    slug: 'hkfmf-wordpress',
    category: 'Wordpress',
    delayAnimation: '0',
    content: {
      companyName: 'Freelance',
      projectDate: '2024',
      description: [
        'THE FIRST HONG KONG FILM MUSIC FIESTA (HKFMF) is a user-friendly event information website which is organized by HK Government and built with Wordpress and using related wordpress plugins, e.g. ElementorUI, WPForms, Polylang and Yoast SEO, etc',
        'Using various technologies include Wordpress PHP framework and CSS',
      ],
      hashtags: [
        'Wordpress',
        'Single Page Application',
        'Responsive Design',
        'CSS',
        'Elementor UI',
        'WPForms',
        'Polylang',
        'Yoast SEO',
        'Google Analytics',
      ],
      imgItems: [
        {
          img: 'hkfmf-wordpress.jpg',
          title: 'THE FIRST HONG KONG FILM MUSIC FIESTA',
          category: 'THE FIRST HONG KONG FILM MUSIC FIESTA',
          imgLink: '',
          delayAnimation: '0',
        },{
          img: 'hkfmf-wordpress-acknowledgement.jpg',
          title: 'THE FIRST HONG KONG FILM MUSIC FIESTA (HKFMF) Acknowledgement',
          category: 'THE FIRST HONG KONG FILM MUSIC FIESTA (HKFMF) Acknowledgement',
          imgLink: '',
          delayAnimation: '0',
        },
      ],
      links: ['https://hkfmf.com.hk/en/', 'https://hkfmf.com.hk/en/acknowledgement-en/'],
      liveLinks: [{
        title: 'THE FIRST HONG KONG FILM MUSIC FIESTA (HKFMF) ',
        url: 'https://hkfmf.com.hk/en/',
      },
        {
        title: 'THE FIRST HONG KONG FILM MUSIC FIESTA (HKFMF) Acknowledgement',
        url: 'https://hkfmf.com.hk/en/acknowledgement-en/',
      }],
      gitLink: [],
    },
  },
];
