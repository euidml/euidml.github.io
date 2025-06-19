// import here
import profile_picture from "./images/profile.png";
import cv from "./images/cv.svg";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import octicon from "./images/octicon.svg";
import circle from "./images/circle.png"
import noom from "./images/noom.png"
import simple_python_game from "./images/simple_python_game.png";


// export here
// to Navbar.js
export const nav_categories = ["about", "experience", "portfolio"];

// to About.js
export const profile = profile_picture;
export const imageFiles = {"octicon": [octicon, "https://github.com/euidml"], 
        "linkedin": [linkedin, ""],
        "cv": [cv, ""], 
        "facebook": [facebook, ""],
        "instagram": [instagram, ""]
    };
export const techStacks = {
        "Python":"https://www.python.org/",
        "Java":"https://www.java.com/en/",
        "MySQL":"https://dev.mysql.com/doc/",
        "JavaScript":"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "Node.js":"https://nodejs.org/docs/latest/api/",
        "React.js":"https://react.dev/"
    };
export const description = ["Hi! Welcome to my personal website. My name is Edward, and I’m a software developer from Vancouver, Canada.",
                        "I’ve studied Computer Science at Simon Frasers University, and I’m currently seeking my first software developer co-op position. In my free time, I like to travel, watch movies, play instruments.",
                        "An overview of my past experiences is provided below."];

// to Experience.js
export const workExperience = [
        {
            "name": "Tree House Toys",
            "description": "Customer Service Representitive, 2023"
        },
        {
            "name": "Best Buy",
            "description": "Product Process Specialist, 2022"
        },
        {
            "name": "Starbucks",
            "description": "Barista, 2022"
        },
        {
            "name": "Best Buy",
            "description": "Product Process Specialist, 2021"
        },
    ];
export const education = [
        {
            "name": "Simon Fraser University",
            "description": "2nd year BSc in Computing Science, In Progress"
        },
        {
            "name": "Langara College",
            "description": "Associate Degree of Science in Computer Science"
        },
    ];

// to Portfolio.js
export const port_categories = ["All Categories", "Web Development", "Game"];
export const projectImageAndLink = {
        "circle":{
            "image":circle,
            "link":"https://github.com/euidml",
            "description":"This is one of my project for web develoment with React.js"
        },
        "noom":{
            "image":noom,
            "link":"https://github.com/euidml",
            "description":"This is one of my project for web develoment with WebRTC and Socket.IO"
        },
        "simple_python_game":{
            "image":simple_python_game,
            "link":"https://github.com/euidml",
            "description":"This is one of my project for simple game implementation with Python"
        },
    };