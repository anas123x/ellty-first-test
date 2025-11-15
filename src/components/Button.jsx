import { useState } from "react";

export const Button = ({ children, onClick, className }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <button className="bg-[#FFCE22] w-[340px] mt-2.5 h-10 rounded-sm font-montserrat text-[14px] py-2.5 px-5 hover:bg-[#FFD84D] hover:cursor-pointer active:bg-[#FFCE22] active:cursor-default">
      Done
    </button>
  );
};
