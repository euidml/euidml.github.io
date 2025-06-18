import "./Portfolio.css";

function Element({value}){
    return(
        <a href={`#${value}`}>
            {value}
        </a>
    );
}



function Portfolio(){
    const categories = ["All Categories", "Web Development", "Game"]
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

            </div>
        </>
    );
}

export default Portfolio;