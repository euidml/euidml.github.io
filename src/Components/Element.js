// used for elements in navbar
export default function Element({value, id, className, onElementClick}){
    return(
        <div id={id} className={className} onClick={onElementClick}>
            <button>
                {value}
            </button>
        </div>
        
    );
}