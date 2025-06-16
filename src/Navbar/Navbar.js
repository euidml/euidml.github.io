/* HERE TO IMPORT
 */
import { useState } from 'react';
import './Navbar.css'

function Element({value, onElementClick}){
    return(
        <a href={`#${value}`} onClick={onElementClick}>{value.charAt(0).toUpperCase() + value.slice(1)}</a>
    );
}

function NavBar(){
    const [elements, setElements] = useState(Array("about", "experience", "portfolio"))


    function handleClick(value){
        //pass
    }
    
    return (
        <div className="navbar">
            <Element value={elements[0]} onElementClick={() => {handleClick(elements[0])}}/>
            <Element value={elements[1]} onElementClick={() => {handleClick(elements[1])}}/>
            <Element value={elements[2]} onElementClick={() => {handleClick(elements[2])}}/>
        </div>
    );
}

export default NavBar