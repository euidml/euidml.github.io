import { useEffect, useState } from "react";
import "./Portfolio.css";
import circle from "../images/circle.png"
import noom from "../images/noom.png"
import simple_python_game from "../images/simple_python_game.png"

function Element({value, className, onElementClick}){
    return(
        <div className={className} onClick={onElementClick}>
            <button>
                {value}
            </button>
        </div>
        
    );
}



function Portfolio(){
    const [currentCategory, setCurrentCategory] = useState("All Categories")
    // const [projects, setProjects] = useState(Array())
    const categories = ["All Categories", "Web Development", "Game"]
    let projects = []
    const projectImageAndLink = {
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
    }

    function handleClick(value){
        setCurrentCategory(value);
    }

    const select = (() => {
        console.log("Hi")
        if (currentCategory === "All Categories"){
            projects = ["circle","noom","simple_python_game"]
        }else if(currentCategory === "Web Development"){
            projects = ["circle","noom"]
        }else{
            projects = ["simple_python_game"]
        }
        return(
                projects.map((project) => (
                    <div id={project} className="project">
                        <a href={projectImageAndLink[project]["link"]}>
                            <img src={projectImageAndLink[project]["image"]}/>
                            <h2>
                                View detail
                            </h2>
                        </a>
                    </div>
                ))   
        );
    });


    return(
        <>
            <div id="portfolio">
                <h1>
                    Portfolio💻
                </h1>
                <div id="inner_navbar">
                    {
                        categories.map((el)=>(
                            <Element
                                key={el}
                                value={el}
                                className={currentCategory === el ? "selected" : ""}
                                onElementClick={() => {
                                    handleClick(el)
                                }}
                            />
                        ))
                    }
                </div>
                <div id="projects">
                    {select()}
                </div>
            </div>
        </>
    );
}

export default Portfolio;