import Chat from "./pages/portfolio/Chat.png";
import IEDC from "./pages/portfolio/IEDC.png"
import Gmail from "./pages/portfolio/Gmail.webp"
import KnowDoc from "./pages/portfolio/KnowDoc.png"
import Spotify from "./pages/portfolio/Spotify.jpg"
import Assignmentor from "./pages/portfolio/Assignmentor.png"
const logotext = "Adith";
const meta = {
    title: "Adith Ramdas",
    description: "I’m Adith Ramdas Web Dev Machine Learning Enthusiast _ Full stack devloper,currently a student in India",
};

const introdata = {
    title: "I’m Adith Ramdas",
    animated: {
        first: "I make cool websites",
        second: "I like Neural Networks",
        third: "I hunt bugs",
    },
    description: "I am a Full Stack Dev, a bug hunter and an ML Enthusiast, and am a Comp-Sci Student from India",
    your_img_url: 'Adith.png',
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "I am a sophomore majoring in Comp-Sci at College of Engineering, Trivandrum(India). My interests include Web-Dev, Penetration Testing, and Machine Learning, but am willing to explore other fields in the coming future. So ping me up for any interesting work!",
};
const worktimeline = [{
        jobtitle: "IEDC Web Dev",
        where: "College of Engineering, Trivandrum",
        date: "2022",
    },
    {
        jobtitle: "Cyber Security Admin",
        where: "CSCP Club(College of Engineering, Trivandrum)",
        date: "2022",
    },
    ];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Django",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "Chat-App",
        description: "A web-app which facilitates community message transfer, implemented with rooms (a place with a group of people)",
    },
    {
        title: "Expenditure Calculation",
        description: "A tool which helps to calculate the daily expenses by storing transaction amounts in specific columns of an excel file",
    },
    {
        title: "IEDC CET Website Team",
        description: "Was part of the team building the official website for IEDC CET.",

    },
    {
        title: "KnowDoc",
        description: "A website that facilitates users to look up the schedule of doctors in every hospital in a locality selected by the user, along with the added feature of reserving an appointment",
        
    },
];

const dataportfolio = [{
        "img": Chat,
        desctiption: "Chat App - A web-app which facilitates community message transfer, implemented with rooms (a place with a group of people)",
        link: "https://chat-app-3786b.web.app",
    },
    {
        "img": IEDC,
        desctiption: "IEDC CET Website - Part of the team building the official website for IEDC CET.",
        link: "https://iedc-cet-website.vercel.app/",
    },
    {
        "img": Assignmentor,
        desctiption: "A tool to get instant answers for all your question in a handwriting format",
        link: "https://github.com/aditramdas/Valyamakkal-Hack",
    },
    {
        "img": KnowDoc,
        desctiption: "KnowDoc - A website that facilitates users to look up the schedule of doctors in every hospital in a locality selected by the user, along with the added feature of reserving an appointment",
        link: "https://github.com/aditramdas/OSDHackathon",
    },
    {
        "img": Spotify,
        desctiption: "Spotify Clone(Currently Doing) - React App with functionalities of Spotify, getting songs through the Spotify API",
        link: "https://github.com/aditramdas/spotify-clone",
    },
    {
        "img": Gmail,
        desctiption: "Expenditure Calculation - A tool which helps to calculate the daily expenses by storing transaction amounts in specific columns of an excel file",
        link: "https://github.com/aditramdas/GmailHack2.0",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "Adith Ramdas",
    YOUR_FONE: "+91 9846572858",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/aditramdas",
    facebook: "https://www.facebook.com/adit.ramdas/",
    linkedin: "https://www.linkedin.com/in/adith-ramdas-45a39b187/",
    twitter: "https://twitter.com/aditramdas",
    youtube: "https://www.youtube.com/channel/UCnobFGkDwiT1WE4x0-Zc4sA",
    twitch: "",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
