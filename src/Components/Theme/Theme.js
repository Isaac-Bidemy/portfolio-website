import React, {useState, useEffect} from "react";
import "./Theme.css";

const Theme = ()=>{

    const [dark, setDark] = useState(false);

    useEffect (()=>{
        if (dark){
            document.documentElement.style.setProperty('--bgColor', '#12100E');
            document.documentElement.style.setProperty('--whiteColor', '#D6CDC6');
        }else{
            document.documentElement.style.setProperty('--bgColor', '#352e26');
            document.documentElement.style.setProperty('--whiteColor', '#CDD5DB');
            
        }

    }, [dark])

    return(
        <div id="theme">
            {
                dark
                ?<i className="fa-solid fa-sun" onClick={()=> setDark(false)}></i>
                : <i className="fa-solid fa-moon" onClick={()=> setDark(true)}> </i>
            } 

        </div>
    )
}
export default Theme;