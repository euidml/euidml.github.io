import {profile, imageFiles, techStacks, description } from "../Data";
import './About.css';

// to show the tech stacks
function TechStack({value, link}){
    return(
            <a className="tech_stack" href={link}>
                        {value}
            </a>
    );
}

function About(){
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
                    </div>
                    <div id="external_links">
                        {
                           Object.keys(imageFiles).map((key) => (
                                    <a key={key} href={imageFiles[key][1]}>
                                        <img className="external_link" src={imageFiles[key][0]}/>
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