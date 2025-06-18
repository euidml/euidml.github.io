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
    const categories = ["All Categories", "Web Development", "Game"]
    let projectImages = []

    function handleClick(value){
        setCurrentCategory(value);
        // console.log(currentCategory)
    }
    const select = (() => {
        console.log("Hi")
        if (currentCategory === "All Categories"){
            projectImages = [circle, noom, simple_python_game]
        }else if(currentCategory === "Web Development"){
            projectImages = [circle, noom]
        }else{
            projectImages = [simple_python_game]
        }
        return(
                projectImages.map((img) => (
                    <div>
                        <img src={img}/>
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