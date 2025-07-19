import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://jobik05.github.io/MyShop/#/',
      githurl: 'https://github.com/jobik05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://jobik05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/jobik05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://jobik05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/jobik05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/jobik05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://jobik05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/jobik05/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://jobik05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/jobik05/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://jobik05.github.io/Blog-Book/',
      githurl: 'https://github.com/jobik05/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://jobik05.github.io/COVOID-19/',
      githurl: 'https://github.com/jobik05/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://jobik05.github.io/React-Weather/',
      githurl: 'https://github.com/jobik05/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/jobik05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/jobik05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/jobik05/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/jobik05/My-Personal-Portfolio',
      mediumlink: 'https://jobikothari05.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://jobikothari05.medium.com/',
      githurl: 'https://github.com/jobik05',
      mediumlink: 'https://jobikothari05.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://jobikothari05.medium.com/',
      githurl: 'https://github.com/jobik05/Matrimonial-Website.git',
      mediumlink: 'https://jobikothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Senior Software Engineer (L3) with 7+ years of experience in front-end development .
  Specialized in Angular (v2+), JavaScript, and responsive UI/UX implementation`

  about = "Passionate about innovation and solving complex problems through clean and scalable code. I enjoy mentoring, leading development teams, and constantly learning new technologies. I approach every challenge with a positive mindset and a sharp focus on delivering high-quality results."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
  { id: '1', skill: 'Angular (v2+)', progress: '90%' },
  { id: '2', skill: 'TypeScript & JavaScript', progress: '85%' },
  { id: '3', skill: 'HTML5 / CSS3 / SCSS', progress: '85%' },
  { id: '4', skill: 'API Integration & RESTful Services', progress: '80%' },
  { id: '5', skill: 'RxJS & Reactive Forms', progress: '80%' },
  { id: '6', skill: 'Responsive UI Design', progress: '80%' },
  { id: '7', skill: 'Unit Testing (Jasmine, Karma)', progress: '75%' },
  { id: '8', skill: 'Version Control (Git, GitHub)', progress: '85%' },
  { id: '9', skill: 'Release Planning & Deployment', progress: '90%' },
  { id: '10', skill: 'Sprint Estimation & Task Allocation', progress: '90%' },
  { id: '11', skill: 'Team Mentoring & Code Reviews', progress: '90%' },
  { id: '12', skill: 'Technical Decision Making / POCs', progress: '90%' }
];



  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2016 - 2018',
      'education': 'Master\'s Degree',
      'stream': 'Master of Computer Application',
      'institution': 'Mar Athanasios College For Advanced Studies, Thiruvalla',
      'info': `Mar Athanasios College For Advanced Studies Tiruvalla (MACFAST) is a premier post graduate research institute, established in 2001 with the objective of moulding eminent professionals over the years to confront the challenging demands of the corporate world and the world of science & technology. MACFAST is affiliated to Mahatma Gandhi University, Kottayam and approved by All India Council for Technical Education (AICTE), New Delhi.`,
      'website':'https://macfast.org/'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2016',
      'education': 'Bachelor\'s Degree',
      'stream': 'BSc Computer Science',
      'institution': 'Indira Gandhi college of Arts and Science, Kothamangalam',
      'info': ``,
      'website':'https://www.igcass.ac.in/'
    },
    {
      'id': '3',
      'from_to_year': '2011 - 2013',
      'education': 'Higher Secondary  School',
      'stream': 'Computer Science',
      'institution': 'Institute of Human Resources Development (IHRD)',
      'info': `The Institute of Human Resources Development (IHRD) is an autonomous institution established by the Government of Kerala, having a network of more than 90 institutions, including Engineering Colleges, Polytechnic Colleges, Schools, Colleges of Applied Science, Skill Development Centres and Regional Centres spread all over Kerala.`,
      'website': 'http://14.139.189.75/'
    }
  ];
  exprienceData: any = [
    {
      id: 3,
      company: 'Zerone Consulting Pvt Ltd',
      location: 'Ernakulam - Infopark',
      timeline: 'Dec 2024 to Present',
      role: 'Senior Software Engineer - L3',
      logo:'assets/images/Zerone-Consulting-logo-profile.jpg',
      logourl:'https://www.zerone-consulting.com/assets/img/logo-tagline-white.svg',
      website:'https://www.zerone-consulting.com/',
      work: 'Led front-end architecture using Angular, enabling scalable UI for a B2B e-commerce solution. Implemented release pipelines, estimations, and mentored 8+ team members.'

    },
    {
      id: 2,
      company: 'Faya',
      location: 'Trivandrum - Technopark',
      timeline: 'Sept 2022 to Dec 2024',
      role: 'Angular Developer',
      logo:'assets/images/faya-logo.jpg',
      logourl:'https://fayausa.com/wp-content/themes/faya/assets/img/faya.png',
      website:'https://fayausa.com/',
      work: 'Developed a content management system with Angular, integrating dynamic meta handling and structured data for SEO. Resulted in improved search visibility and performance.'

    },
    {
      id: 1,
      company: 'CodeWork Solutions',
      location: 'Ernakulam - Infopark',
      timeline: 'Oct 2016 - Sept 2022',
      role: 'Software Developer',
      website:'https://codework-solutions.com/',
      work: `Built Angular-based dashboards for enterprise clients with real-time data integration and modular widgets. Enhanced user interaction and reduced reporting time.`
    },


  ]

  extraCircularInfo: any = [
    {
      img: 'assets/images/jo1.jpeg',
    },
    // {
    //   img: 'assets/images/14.jpeg',
    // },
    {
      img: 'assets/images/3.jpeg',
    },
    {
      img: 'assets/images/10.jpeg',
    },
    {
      img: 'assets/images/4.jpeg',
    },
    // {
    //   img: 'assets/images/13.jpeg',
    // },
    {
      img: 'assets/images/6.jpeg',
    },
    // {
    //   img: 'assets/images/15.jpeg',
    // },
    {
      img: 'assets/images/9.jpeg',
    },
  ]
}
