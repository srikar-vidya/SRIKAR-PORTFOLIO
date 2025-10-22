// import React, { Component } from 'react';
// import ReactGA from 'react-ga4';

// export class AboutVivek extends Component {

//     constructor() {
//         super();
//         this.screens = {};
//         this.state = {
//             screen: () => { },
//             active_screen: "about", // by default 'about' screen is active
//             navbar: false,
//         }
//     }

//     componentDidMount() {
//         this.screens = {
//             "about": <About />,
//             "education": <Education />,
//             "skills": <Skills />,
//             "projects": <Projects />,
//             "resume": <Resume />,
//         }

//         let lastVisitedScreen = localStorage.getItem("about-section");
//         if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
//             lastVisitedScreen = "about";
//         }

//         // focus last visited screen
//         this.changeScreen(document.getElementById(lastVisitedScreen));
//     }

//     changeScreen = (e) => {
//         const screen = e.id || e.target.id;

//         // store this state
//         localStorage.setItem("about-section", screen);

//         // google analytics
//         ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


//         this.setState({
//             screen: this.screens[screen],
//             active_screen: screen
//         });
//     }

//     showNavBar = () => {
//         this.setState({ navbar: !this.state.navbar });
//     }

//     renderNavLinks = () => {
//         return (
//             <>
//                 <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
//                     <img className=" w-3 md:w-4" alt="about vivek" src="./themes/Yaru/status/about.svg" />
//                     <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
//                 </div>
//                 <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
//                     <img className=" w-3 md:w-4" alt="vivek' education" src="./themes/Yaru/status/education.svg" />
//                     <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
//                 </div>
//                 <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
//                     <img className=" w-3 md:w-4" alt="vivek' skills" src="./themes/Yaru/status/skills.svg" />
//                     <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
//                 </div>
//                 <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
//                     <img className=" w-3 md:w-4" alt="vivek' projects" src="./themes/Yaru/status/projects.svg" />
//                     <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
//                 </div>
//                 <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
//                     <img className=" w-3 md:w-4" alt="vivek's resume" src="./themes/Yaru/status/download.svg" />
//                     <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
//                 </div>
//                 <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
//                     <iframe src="https://github.com/sponsors/vivek9patel/button" title="Sponsor vivek9patel" width={"100%"} height={"100%"} ></iframe>
//                 </div>
//             </>
//         );
//     }

//     render() {
//         return (
//             <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
//                 <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
//                     {this.renderNavLinks()}
//                 </div>
//                 <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
//                     <div className=" w-3.5 border-t border-white"></div>
//                     <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
//                     <div className=" w-3.5 border-t border-white"></div>
//                     <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
//                         {this.renderNavLinks()}
//                     </div>
//                 </div>
//                 <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
//                     {this.state.screen}
//                 </div>
//             </div>
//         );
//     }
// }

// export default AboutVivek;

// export const displayAboutVivek = () => {
//     return <AboutVivek />;
// }


// function About() {
//     return (
//         <>
//             <div className="w-20 md:w-28 my-4 bg-white rounded-full">
//                 <img className="w-full" src="./images/logos/bitmoji.png" alt="Vivek Patel Logo" />
//             </div>
//             <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
//                 <div>my name is <span className="font-bold">Vivek Patel</span> ,</div>
//                 <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Frontend Engineer!</span></div>
//             </div>
//             <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
//                 <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
//                 <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
//             </div>
//             <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
//                 <li className=" list-pc">I'm a <span className=" font-medium">Graduate Student</span> currently pursuing Computer Science. I've completed my 6 month SWE intern at <u className=' cursor-pointer '> <a href="https://en.wikipedia.org/wiki/HackerRank" target={"_blank"}>HackerRank</a> </u>, and now I'm looking for full-time frontend engineer roles! ( Hit me up <a className='text-underline' href='mailto:vivek.p9737@gmail.com'><u>@vivek.p9737@gmail.com</u></a> :) )</li>
//                 <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
//                 <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books, playing minecraft or watching <a href="https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A" target="_blank" rel="noreferrer"> tom scott's videos.</a></li>
//                 <li className=" mt-3 list-star"> And I also have interest in Deep Learning & Computer Vision!</li>
//             </ul>
//         </>
//     )
// }
// function Education() {
//     return (
//         <>
//             <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
//                 Education
//                 <div className="absolute pt-px bg-white mt-px top-full w-full">
//                     <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
//                     <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
//                 </div>
//             </div>
//             <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
//                 <li className="list-disc">
//                     <div className=" text-lg md:text-xl text-left font-bold leading-tight">
//                         Arizona State University
//                     </div>
//                     <div className=" text-sm text-gray-400 mt-0.5">2022 - 2024</div>
//                     <div className=" text-sm md:text-base">Computer Science</div>
//                     <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 4.0/4.0</div>
//                 </li>
//                 <li className="list-disc">
//                     <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
//                         Pandit Deendayal Energy University - PDEU
//                     </div>
//                     <div className=" text-sm text-gray-400 mt-0.5">2018 - 2022</div>
//                     <div className=" text-sm md:text-base">Computer Engineering</div>
//                     <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 9.35/10</div>
//                 </li>
//                 <li className="list-disc mt-5">
//                     <div className=" text-lg md:text-xl text-left font-bold leading-tight">
//                         Class 12<sup>th</sup>
//                     </div>
//                     <div className=" text-sm text-gray-400 mt-0.5">2016 - 2018</div>
//                     <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
//                     <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 94.1%</div>
//                 </li>
//             </ul>
//         </>
//     )
// }
// function Skills() {
//     return (
//         <>
//             <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
//                 Technical Skills
//                 <div className="absolute pt-px bg-white mt-px top-full w-full">
//                     <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
//                     <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
//                 </div>
//             </div>
//             <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
//                 <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
//                     I've worked with a wide variety of programming languages & frameworks.
//                 </li>
//                 <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
//                     <div> My areas of expertise are <strong className="text-ubt-gedit-orange">front-end development, React.js & javascript!</strong></div>
//                 </li>
//                 <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
//                     <div>Here are my most frequently used</div>
//                 </li>
//             </ul>
//             <div className="w-full md:w-10/12 flex mt-4">
//                 <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
//                 <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
//             </div>
//             <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
//                 <div className="px-2 w-1/2">
//                     <div className="flex flex-wrap justify-center items-start w-full mt-2">
//                         <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="vivek javascript" />
//                         <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="vivek c++" />
//                         <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="vivek python" />
//                         <img className="m-1" src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white" alt="vivek dart" />
//                         <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="vivek HTML" /></a>
//                         <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="vivek SASS" className="m-1" />
//                         <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="vivek git" className="m-1" />
//                         <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="vivek firebase" className="m-1" />
//                     </div>
//                 </div>
//                 <div className="px-2 flex flex-wrap items-start w-1/2">
//                     <div className="flex flex-wrap justify-center items-start w-full mt-2">
//                         <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="vivek next" />
//                         <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="vivek react" />
//                         <img className="m-1" src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white" alt="vivek flutter" />
//                         <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="vivek tailwind css" />
//                         <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="vivek node.js" className="m-1" />
//                         <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="vivek jquery" className="m-1" />
//                         <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="vivek redux" />
//                     </div>
//                 </div>
//             </div>
//             <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
//                 <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
//                     <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="vivek linux" /> <span>!</span>
//                 </li>
//             </ul>
//         </>
//     )
// }

// function Projects() {
//     const project_list = [
//         {
//             name: "UbuntuOS Portfolio",
//             date: "Apr 2021",
//             link: "https://github.com/vivek9patel/vivek9patel.github.io",
//             description: [
//                 "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
//             ],
//             domains: ["javascript", "next.js", "tailwindcss"]
//         },
//         {
//             name: "Chrome Extension React Bolierplate",
//             date: "Dec 2021",
//             link: "https://github.com/vivek9patel/chrome-extension-react-boilerplate",
//             description: [
//                 "A boilerplate code to build a chrome extension with react and webpack",
//             ],
//             domains: ["javascript", "chrome-extension"]
//         },
//         {
//             name: "CodeConnect",
//             date: "Nov 2021",
//             link: "https://github.com/vivek9patel/CodeConnect-frontend",
//             description: [
//                 "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
//             ],
//             domains: ["javascript", "tailwindcss"]
//         },
//         {
//             name: "Ad Free Spotify",
//             date: "Jun 2021",
//             link: "https://github.com/vivek9patel/ad-free-spotify",
//             description: [
//                 "Chrome extension to automatically mute/unmute Spotify tab when Advertisement starts and ends!",
//             ],
//             domains: ["javascript", "chrome-extension"]
//         },
//         {
//             name: "economist.com Unlocked",
//             date: "Mar 2021",
//             link: "https://github.com/vivek9patel/economist.com-unlocked",
//             description: [
//                 "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
//             ],
//             domains: ["javascript", "chrome-extension"]
//         },
//         {
//             name: "Flutter banking app",
//             date: "Jan 2021",
//             link: "https://github.com/vivek9patel/flutter-banking-app",
//             description: [
//                 "A Flutter & Firebase project for creating transactions between different Users and displaying the history of transactions done by all.",
//             ],
//             domains: ["flutter", "firestore", "dart", "firebase auth"]
//         },
//         {
//             name: "CPU scheduling application",
//             date: "Dec 2020",
//             link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
//             description: [
//                 "React Native Application to visualize the CPU Scheduling algorithms with different Processes and Animations with gannt chart.",
//             ],
//             domains: ["react-native", "javascript"]
//         },
//         {
//             name: "Meditech Healthcare WebApp",
//             date: "Nov 2020",
//             link: "https://github.com/vivek9patel/Meditech-Healthcare",
//             description: [
//                 "Developed Web Application to predict and diagnose diseases from x-ray images.",
//             ],
//             domains: ["javascript", "html5", "sass", "firebase", "tensorflow"]
//         },
//         {
//             name: "Problem Recommendation System",
//             date: "Sep 2020",
//             link: "https://github.com/vivek9patel/Improve-Codeforces",
//             description: [
//                 "Django web application to suggest practice problems from the areas in which the user struggles to get pass in code-forces.",
//             ],
//             domains: ["django", "python", "codeforces-api", "javascript"]
//         },
//         {
//             name: "Cleanliness Automation",
//             date: "Dec 2019",
//             link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
//             description: [
//                 "Developed Web Applications to automate Garbage collection and extraction systems for SSIP hackathon",
//             ],
//         }
//     ];

//     const tag_colors = {
//         "javascript": "yellow-300",
//         "firebase": "red-600",
//         "firestore": "red-500",
//         "firebase auth": "red-400",
//         "chrome-extension": "yellow-400",
//         "flutter": "blue-400",
//         "dart": "blue-500",
//         "react-native": "purple-500",
//         "html5": "pink-600",
//         "sass": "pink-400",
//         "tensorflow": "yellow-600",
//         "django": "green-600",
//         "python": "green-200",
//         "codeforces-api": "gray-300",
//         "tailwindcss": "blue-300",
//         "next.js": "purple-600"
//     }

//     return (
//         <>
//             <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
//                 Projects
//                 <div className="absolute pt-px bg-white mt-px top-full w-full">
//                     <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
//                     <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
//                 </div>
//             </div>
//             <iframe src="https://github.com/sponsors/vivek9patel/card" title="Sponsor vivek9patel" className='my-4 w-5/6 md:w-3/4' ></iframe>

//             {
//                 project_list.map((project, index) => {
//                     const projectNameFromLink = project.link.split('/')
//                     const projectName = projectNameFromLink[projectNameFromLink.length - 1]
//                     return (
//                         <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
//                             <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
//                                 <div className="flex flex-wrap justify-between items-center">
//                                     <div className='flex justify-center items-center'>
//                                         <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
//                                         <iframe src={`https://ghbtns.com/github-btn.html?user=vivek9patel&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
//                                     </div>
//                                     <div className="text-gray-300 font-light text-sm">{project.date}</div>
//                                 </div>
//                                 <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
//                                     {
//                                         project.description.map((desc, index) => {
//                                             return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
//                                         })
//                                     }
//                                 </ul>
//                                 <div className="flex flex-wrap items-start justify-start text-xs py-2">
//                                     {
//                                         (project.domains ?
//                                             project.domains.map((domain, index) => {
//                                                 return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
//                                             })

//                                             : null)
//                                     }
//                                 </div>
//                             </div>
//                         </a>
//                     )
//                 })
//             }
//         </>
//     )
// }
// function Resume() {
//     return (
//         <iframe className="h-full w-full" src="./files/Vivek-Patel-Resume.pdf" title="vivek patel resume" frameBorder="0"></iframe>
//     )
// }
import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        if (typeof ReactGA !== 'undefined' && ReactGA.send) {
            ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });
        }

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about srikar" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="srikar education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="srikar skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="srikar projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="srikar resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Srikar Vidya Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Srikar Vidya</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Full Stack Developer & AI Enthusiast!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm pursuing <span className=" font-medium">B.Tech in Artificial Intelligence and Data Science</span> from St. Martin's Engineering College, Hyderabad. I've completed my internship as a <u className=' cursor-pointer '> Full Stack Developer at Vislona</u>, where I worked on AI-powered automation, Gemini API integration, and real-time data processing!</li>
                <li className=" mt-3 list-building"> I love building intelligent, scalable applications that blend data-driven decisions with modern web technologies.</li>
                <li className=" mt-3 list-time"> When I am not coding, I enjoy exploring AI models, improving my problem-solving skills on <a href="https://leetcode.com/" target="_blank" rel="noreferrer">LeetCode (400+ solved)</a>, and continuously learning emerging tools in web and AI development.</li>
                <li className=" mt-3 list-star"> I'm passionate about Full Stack Development, AI/ML, and building solutions that make a real impact!</li>
            </ul>
        </>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        St. Martin's Engineering College
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - 2026</div>
                    <div className=" text-sm md:text-base">B.Tech in Artificial Intelligence and Data Science</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Hyderabad, India</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Sri Chaitanya Junior College(Class 12)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 - 2022</div>
                    <div className=" text-sm md:text-base">MPC (Maths, Physics, Chemistry)</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Victory High School (Class 10)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2019 - 2020</div>
                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages, frameworks, and AI tools.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Full Stack Development, AI Integration & Modern Web Technologies!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used technologies</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="python" />
                        <img className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="HTML" />
                        <img src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat&logo=css3&logoColor=ffffff" alt="CSS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="git" className="m-1" />
                        <img src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=ffffff" alt="mongodb" className="m-1" />
                        <img src="https://img.shields.io/badge/-SQL-4479A1?style=flat&logo=mysql&logoColor=ffffff" alt="sql" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=ffffff" alt="nextjs" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="react" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="redux" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="tailwind" />
                        <img src="https://img.shields.io/badge/-Node.js-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="nodejs" className="m-1" />
                        <img src="https://img.shields.io/badge/-Express-000000?style=flat&logo=express&logoColor=ffffff" alt="express" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/-Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white" alt="supabase" />
                        <img className="m-1" src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="bootstrap" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span>Problem Solving:</span> <strong>400+ problems solved on LeetCode</strong>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-2 leading-tight tracking-tight">
                    <span>Deployment & Tools:</span> Git, GitHub, VS Code, Postman, Vercel, Netlify
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Mystery Message",
            date: "2024",
            link: "https://your-mystery-message-link.vercel.app",
            description: [
                "Built an anonymous messaging platform enabling users to send and receive messages securely.",
                "Integrated Gemini API for AI-generated question suggestions.",
                "Implemented JWT authentication and email verification via Resend API.",
                "Designed a responsive UI using Tailwind CSS and shadcn/ui."
            ],
            domains: ["next.js", "mongodb", "tailwindcss", "gemini-api", "nextauth"]
        },
        {
            name: "Codemate",
            date: "2024",
            link: "https://your-codemate-link.vercel.app",
            description: [
                "Developed a real-time collaborative coding platform with live editing, chat, and AI support.",
                "Integrated WebContainer for in-browser execution and Redis for session persistence.",
                "Added Gemini API for AI-based code reviews and generation."
            ],
            domains: ["react", "node.js", "socket.io", "redis", "gemini-api"]
        },
        {
            name: "AI Code Reviewer",
            date: "2024",
            link: "https://your-code-reviewer-link.vercel.app",
            description: [
                "Created an AI-powered code review system for instant feedback and bug detection.",
                "Used Gemini API for intelligent code analysis.",
                "Implemented syntax highlighting via Prism.js and rendered reviews in Markdown."
            ],
            domains: ["node.js", "express", "react", "gemini-api", "markdown"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "mongodb": "green-600",
        "nextauth": "purple-400",
        "gemini-api": "blue-500",
        "react": "blue-400",
        "node.js": "green-500",
        "socket.io": "gray-300",
        "redis": "red-500",
        "express": "gray-400",
        "markdown": "pink-400",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name}</div>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const color = tag_colors[domain] || "gray-400";
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${color} text-${color} m-1 rounded-full`}>{domain}</span>
                                            })
                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}

// function Resume() {
//     return (
//         <div className="h-full w-full flex flex-col">
//             <iframe 
//                 className="h-full w-full" 
//                 src="https://drive.google.com/file/d/1aCjg9hU3w8U3ktgXxmz69hHGHNsCUrdV/preview" 
//                 title="Srikar Vidya Resume" 
//                 frameBorder="0"
//                 allow="autoplay"
//             ></iframe>
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                 <a 
//                     href="https://drive.google.com/uc?export=download&id=1aCjg9hU3w8U3ktgXxmz69hHGHNsCUrdV" 
//                     className="bg-ub-orange text-white px-4 py-2 rounded hover:bg-opacity-90 shadow-lg"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Download Resume
//                 </a>
//             </div>
//         </div>
//     )
// }
function Resume() {
    return (
        <div className="h-full w-full flex flex-col">
            <iframe 
                className="h-full w-full"
                src="https://drive.google.com/file/d/1RNNhbLDzr-6clu0TQuB10DjFgd4o6o81/preview"
                title="Srikar Vidya Resume"
                frameBorder="0"
                allow="autoplay"
            ></iframe>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <a 
                    href="https://drive.google.com/uc?export=download&id=1RNNhbLDzr-6clu0TQuB10DjFgd4o6o81"
                    className="bg-ub-orange text-white px-4 py-2 rounded hover:bg-opacity-90 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download Resume
                </a>
            </div>
        </div>
    )
}
