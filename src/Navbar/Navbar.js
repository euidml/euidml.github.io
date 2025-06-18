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
    const [turnOffTab, setTurnOffTab] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const categories = ["about", "experience", "portfolio"];

    function handleClick(value){
        setCurrentCategory(value);
        if (value === "about"){
            document.getElementById("about").scrollIntoView({behavior:"smooth", block:"center" , inline:"start"})
        }else if (value === "experience"){
            document.getElementById("experience").scrollIntoView({behavior:"smooth", block:"center" , inline:"start"})
        }else if (value === "portfolio"){
            document.getElementById("portfolio").scrollIntoView({behavior:"smooth", block:"start" , inline:"start"})
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            const about_location_height = document.getElementById("about").getBoundingClientRect().height
            const experience_location_height = about_location_height + document.getElementById("experience").getBoundingClientRect().height
            
            if (window.scrollY <= about_location_height ){
                setCurrentCategory("about")
            } else if( window.scrollY > about_location_height && window.scrollY <= experience_location_height ){
                setCurrentCategory("experience")
            }else if(window.scrollY > experience_location_height){
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