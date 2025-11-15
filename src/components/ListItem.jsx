import { useState } from "react";
import { CheckBox } from "./CheckBox";

export const ListItem = ({ text , Checked, onToggle}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    return (
        <div 
            onClick={onToggle} 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseDown={() => setIsClicking(true)}
            onMouseUp={() => setIsClicking(false)}
            className="w-[370px] h-[42px] px-[22px] py-3 flex items-center justify-between hover:cursor-pointer font-montserrat"
        >
            <div className="text-[14px]">{text}</div>
            <CheckBox isChecked={Checked} isHovering={isHovering} isClicking={isClicking} />
        </div>
    );
}