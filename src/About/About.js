import { useEffect, useState } from "react";
import './About.css';

// Import images
import profile from "../images/profile.png";
import cv from "../images/cv.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import octicon from "../images/octicon.svg";


function TechStack({value, link}){
    return(
            <a className="tech_stack" href={link}>
                        {value}
            </a>
    );
}

function About(){
    // const imageFiles = [octicon, linkedin, cv, facebook, instagram];
    const imageFiles = {"octicon": [octicon, "https://github.com/euidml"], 
        "linkedin": [linkedin, ""],
        "cv": [cv, ""], 
        "facebook": [facebook, ""],
        "instagram": [instagram, ""]
    };
    const techStacks = {
        "Python":"",
        "Java":"",
        "MySQL":"",
        "JavaScript":"",
        "Node.js":"",
        "React.js":""
    };
    const description = ["Hi! Welcome to my personal website. My name is Edward, and I’m a software developer from Vancouver, Canada.",
                        "I’ve studied Computer Science at Simon Frasers University, and I’m currently seeking my first software developer co-op position. In my free time, I like to travel, watch movies, play instruments.",
                        "An overview of my past experiences is provided below."];
    return(
        <>
            <div id="about">
                <div id="profile_picture">
                    <img src={profile} />
                </div>
                <div id="biography">
                    <h1> About Me 🧑🏻‍💻 </h1>
                    {
                        description.map((el) => (
                            <p key={el}>{el}</p>
                        ))
                    }
                    <div id="tech_stacks">
                        {
                            Object.keys(techStacks).map((key)=>(
                                <TechStack
                                    key={key}
                                    value={key}
                                    link={techStacks[key]}
                                />
                            ))
                        }
                        {/* here is for techstacks */}
                    </div>
                    <div id="external_links">
                        {
                           Object.keys(imageFiles).map((key) => (
                                    <a href={imageFiles[key][1]}>
                                    <img className="external_link" key={key} src={imageFiles[key][0]}/>
                                    </a>
                            
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;