/* HERE TO IMPORT
 */
import { useEffect, useState } from 'react';
import './Navbar.css'

function Element({value, onElementClick}){
    return(
        <a href={`#${value}`} onClick={onElementClick}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
        </a>
    );
}

function NavBar(){
    const [scrolled, setScrolled] = useState(false);
    const elements = ["about", "experience", "portfolio"]; // Don't need useState for static list

    function handleClick(value){
        // TODO: make the page explorable by navbar
        //pass
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
            {/* {
                elements.map((e) =>{

                })
            } */}
            <Element value={elements[0]} onElementClick={() => {handleClick(elements[0])}}/>
            <Element value={elements[1]} onElementClick={() => {handleClick(elements[1])}}/>
            <Element value={elements[2]} onElementClick={() => {handleClick(elements[2])}}/>
        </div>
    );
}

export default NavBar