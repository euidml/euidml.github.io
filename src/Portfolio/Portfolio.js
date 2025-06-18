import "./Portfolio.css";
import circle from "../images/circle.png"
import noom from "../images/noom.png"
import simple_python_game from "../images/simple_python_game.png"

function Element({value}){
    return(
        <a href={`#${value}`}>
            {value}
        </a>
    );
}



function Portfolio(){
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