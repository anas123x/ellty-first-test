import hoverCheck from "../assets/icons/hoverCheck.svg";
import clickCheck from "../assets/icons/clickCheck.svg";
import selectedCheck from "../assets/icons/selectedCheck.svg";

/**
 * CheckBox component with interactive states (hover, click, checked)
 * @param {Object} props - Component props
 * @param {boolean} props.isHovering - Whether the checkbox is being hovered
 * @param {boolean} props.isClicking - Whether the checkbox is being clicked
 * @param {boolean} props.isChecked - Whether the checkbox is checked
 */
export const CheckBox = ({ isHovering, isClicking, isChecked }) => {
  /**
   * Determines the background style based on component state
   */
  const getBackgroundStyle = () => {
    if (isChecked && isClicking) {
      return "bg-[#2469F6] shadow-[0_0_0_3px_rgba(36,105,246,0.15)]";
    }
    if (isChecked && isHovering) {
      return "bg-[#5087F8]";
    }
    if (isChecked) {
      return "bg-[#2469F6]";
    }
    if (isClicking) {
      return "bg-white shadow-[0_0_0_3px_rgba(36,105,246,0.15)]";
    }
    return "bg-white";
  };

  /**
   * Determines the border style based on component state
   */
  const getBorderStyle = () => {
    return (isHovering || isClicking) && !isChecked
      ? "border border-[#BDBDBD] "
      : "border border-[#CDCDCD] ";
  };

  /**
   * Renders the appropriate icon based on component state
   */
  const renderIcon = () => {
    if (isChecked) {
      return <img src={selectedCheck} className="w-[17px] h-3" alt="Selected" />;
    }
    if (isClicking) {
      return <img src={clickCheck} className="w-[17px] h-3" alt="Clicking" />;
    }
    if (isHovering) {
      return <img src={hoverCheck} className="w-[17px] h-3" alt="Hover" />;
    }
    return null;
  };

  return (
    <button
      className={`w-[25px] h-[25px] rounded-md flex justify-center items-center hover:cursor-pointer
         transition-all ${getBorderStyle()} ${getBackgroundStyle()}`}
    >
      {renderIcon()}
    </button>
  );
};