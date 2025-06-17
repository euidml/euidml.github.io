import { useEffect, useState } from "react";
import profile from "../images/profile.png";
import './About.css';



function About(){
    return(
        <>
            <div id="about_me">
                <div id="profile_picture">
                    <img src={profile} />
                </div>
                <div id="biography">
                    <h2> About Me 🧑🏻‍💻 </h2>
                </div>
            </div>
        </>
    );
}

export default About;