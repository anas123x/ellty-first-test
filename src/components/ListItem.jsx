import { useState } from "react";
import { CheckBox } from "./CheckBox";

/**
 * ListItem component representing a selectable list row with checkbox
 * @param {Object} props - Component props
 * @param {string} props.text - Display text for the list item
 * @param {boolean} props.isChecked - Whether the item is checked
 * @param {Function} props.onToggle - Callback function when item is clicked
 */
export const ListItem = ({ text, isChecked, onToggle }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  /**
   * Handles mouse down event to set clicking state
   */
  const handleMouseDown = () => setIsClicking(true);

  /**
   * Handles mouse up event to reset clicking state
   */
  const handleMouseUp = () => setIsClicking(false);

  /**
   * Handles mouse enter event to set hovering state
   */
  const handleMouseEnter = () => setIsHovering(true);

  /**
   * Handles mouse leave event to reset hovering state
   */
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      onClick={onToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="w-[370px] h-[42px] px-[22px] py-3 flex items-center justify-between hover:cursor-pointer font-montserrat"
    >
      <div className="text-[14px]">{text}</div>
      <CheckBox
        isChecked={isChecked}
        isHovering={isHovering}
        isClicking={isClicking}
      />
    </div>
  );
};