import { useState,useEffect } from "react";
import { CheckBox } from "./CheckBox";

export const ListItem = ({ text }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
      
    }, []);
    return (
        <div 
            onClick={()=>{setIsChecked(!isChecked)}} 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseDown={() => setIsClicking(true)}
            onMouseUp={() => setIsClicking(false)}
            className="w-[340px] h-10 flex items-center gap-3 px-3 border border-[#E0E0E0] rounded-sm hover:cursor-pointer"
        >
            <CheckBox isChecked={isChecked} isHovering={isHovering} isClicking={isClicking} />
        </div>
    );
}