import hoverCheck from "../assets/icons/hoverCheck.svg";
import clickCheck from "../assets/icons/clickCheck.svg";
import selectedCheck from "../assets/icons/selectedCheck.svg";
import { useEffect } from "react";

export const CheckBox = ({ isHovering, isClicking, isChecked }) => {
  useEffect(() => {
    console.log("CheckBox State:", { isHovering, isClicking, isChecked });
  }, [isHovering, isClicking, isChecked]);
  
  return (
    <button
      className={`w-[25px] h-[25px] border border-[#CDCDCD] rounded-md flex justify-center items-center transition-all
        ${isChecked && isClicking
          ? "bg-[#2469F6] shadow-[0_0_0_3px_rgba(36,105,246,0.15)]" 
          : isChecked && isHovering
            ? "bg-[#5087F8]"
            : isChecked
              ? "bg-[#2469F6]"
              : isClicking 
                ? "bg-white shadow-[0_0_0_3px_rgba(36,105,246,0.15)]"
                : "bg-white"
        }`}
    >
      {isChecked ? (
        <img
          src={selectedCheck}
          className="w-[17px] h-3"
          alt="Selected Check"
        />
      ) : isClicking ? (
        <img src={clickCheck} className="w-[17px] h-3" alt="Click Check" />
      ) : isHovering ? (
        <img src={hoverCheck} className="w-[17px] h-3" alt="Hover Check" />
      ) : null}
    </button>
  );
};