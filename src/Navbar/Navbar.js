/* HERE TO IMPORT
 */
import { useEffect, useState } from 'react';
import './Navbar.css'

function Element({value, className, onElementClick}){
    return(
        <div id={"tab_" + value} className={className} onClick={onElementClick}>
            <button>
                {value}
            </button>
        </div>
        
    );
}

function NavBar(){
    const [currentCategory, setCurrentCategory] = useState("about")
    const [scrolled, setScrolled] = useState(false);
    const categories = ["about", "experience", "portfolio"];

    function handleClick(value){
        setCurrentCategory(value);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            const about_location_bottom = document.getElementById("about").getBoundingClientRect().bottom
            const experience_location_bottom = document.getElementById("experience").getBoundingClientRect().bottom
            // const portfolio_location_top = document.getElementById("portfolio").getBoundingClientRect().top
            
            
            if (window.scrollY < about_location_bottom ){
                setCurrentCategory("about")
            } else if( window.scrollY >= about_location_bottom && window.scrollY < experience_location_bottom ){
                 setCurrentCategory("experience")
            }else if(window.scrollY >= experience_location_bottom){
                setCurrentCategory("portfolio")
            }

        };

        // console.log(document.getElementById("portfolio").getBoundingClientRect())
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div id="navbar" className={scrolled ? "scrolled" : ""}>
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
    );
}

export default NavBar