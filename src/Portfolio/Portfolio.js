import { useState } from "react";
import "./Portfolio.css";
import circle from "../images/circle.png"
import noom from "../images/noom.png"
import simple_python_game from "../images/simple_python_game.png"

function Element({value, className}){
    return(
        <div className={className}>
            <a href={`#${value}`} >
            {value}
            </a>
        </div>
        
    );
}



function Portfolio(){
    const [currentCategory, setCurrentCategory] = useState("All Categories")
    const categories = ["All Categories", "Web Development", "Game"]
    const projectImages = [circle, noom, simple_python_game]
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
                            />
                        ))
                    }
                </div>
                <div id="projects">
                    {
                       projectImages.map((img) => (
                            <div>
                                <img src={img}/>
                            </div>
                       ))
                    }
                </div>
            </div>
        </>
    );
}

export default Portfolio;