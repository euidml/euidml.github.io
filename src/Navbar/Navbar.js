/* HERE TO IMPORT
 */
import { useEffect, useState } from 'react';
import './Navbar.css'

function Element({value, className, onElementClick}){
    return(
        <div className={className} onClick={onElementClick}>
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
        };

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