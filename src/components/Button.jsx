/**
 * Button component with yellow styling and hover effects
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button text content
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.className - Additional CSS classes
 */
export const Button = ({ children = "Done", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FFCE22] w-[340px] mt-2.5 h-10 rounded-sm font-montserrat text-[14px] py-2.5 px-5 hover:bg-[#FFD84D] hover:cursor-pointer active:bg-[#FFCE22] active:cursor-default ${className}`}
    >
      {children}
    </button>
  );
};
