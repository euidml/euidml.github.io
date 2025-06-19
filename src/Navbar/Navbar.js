/* HERE TO IMPORT
 */
import { useEffect, useState } from 'react';
import {nav_categories} from "../Data"
import Element from '../Components/Element';
import './Navbar.css'

function NavBar(){
    const [currentCategory, setCurrentCategory] = useState(nav_categories[0]);
    const [scrolled, setScrolled] = useState(false);

    // to update destination
    function handleClick(value){
        setCurrentCategory(value);
        if (value === nav_categories[0]){
            document.getElementById(nav_categories[0]).scrollIntoView({behavior:"smooth", block:"center" , inline:"start"})
        }else if (value === nav_categories[1]){
            document.getElementById(nav_categories[1]).scrollIntoView({behavior:"smooth", block:"center" , inline:"start"})
        }else if (value === nav_categories[2]){
            document.getElementById(nav_categories[2]).scrollIntoView({behavior:"smooth", block:"start" , inline:"start"})
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            // to track whether or not attaching shadow on the navbar
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            // to track the current section 
            const about_location_height = document.getElementById(nav_categories[0]).getBoundingClientRect().height;
            const experience_location_height = about_location_height + document.getElementById(nav_categories[1]).getBoundingClientRect().height;
            if (window.scrollY <= about_location_height ){
                setCurrentCategory(nav_categories[0])
            } else if( window.scrollY > about_location_height && window.scrollY <= experience_location_height ){
                setCurrentCategory(nav_categories[1])
            }else if(window.scrollY > experience_location_height){
                setCurrentCategory(nav_categories[2])
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div id="navbar" className={scrolled ? "scrolled" : ""}>
            {
                nav_categories.map((el)=>(
                    <Element
                        key={el}
                        value={el}
                        id={"tab_" + el}
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