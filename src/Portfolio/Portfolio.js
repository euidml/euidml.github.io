import { useState } from "react";
import { port_categories, projectImageAndLink } from "../Data";
import Element from "../Components/Element";
import "./Portfolio.css";

function Portfolio(){
    const [currentCategory, setCurrentCategory] = useState(port_categories[0])
    let projects = []
    const projectKeys = Object.keys(projectImageAndLink);
    const propertyKeys = Object.keys(projectImageAndLink[projectKeys[0]]);

    function handleClick(value){
        setCurrentCategory(value);
    }

    const select = (() => {
        if (currentCategory === port_categories[0]){
            projects = [projectKeys[0],projectKeys[1],projectKeys[2]];
        }else if(currentCategory === port_categories[1]){
            projects = [projectKeys[0],projectKeys[1]];
        }else{
            projects = [projectKeys[2]];
        }
        return(
                projects.map((project) => (
                    <div id={project} className="project">
                        <a href={projectImageAndLink[project][propertyKeys[1]]}>
                            <img src={projectImageAndLink[project][propertyKeys[0]]} alt={projectImageAndLink[project][propertyKeys[2]]}/>
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
                        port_categories.map((el)=>(
                            <Element
                                key={el}
                                value={el}
                                id={el}
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