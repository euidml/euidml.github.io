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
        "Python":"",
        "Java":"",
        "MySQL":"",
        "JavaScript":"",
        "Node.js":"",
        "React.js":""
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
            "link":"#"
        },
        "noom":{
            "image":noom,
            "link":"#"
        },
        "simple_python_game":{
            "image":simple_python_game,
            "link":"#"
        },
    };