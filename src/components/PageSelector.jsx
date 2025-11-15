import { useState } from "react";
import { Button } from "./Button";
import { ListItem } from "./ListItem";

/**
 * Initial page data structure
 */
const INITIAL_PAGES = [
  { name: "Page 1", checked: false },
  { name: "Page 2", checked: false },
  { name: "Page 3", checked: false },
  { name: "Page 4", checked: false },
  { name: "Page 5", checked: false },
  { name: "Page 6", checked: false },
];

/**
 * PageSelector component - Page selector with checkboxes
 * Allows users to select all pages or individual pages
 * @param {Object} props - Component props
 * @param {Function} props.onDone - Optional callback when Done button is clicked
 */
export const PageSelector = ({ onDone }) => {
  const [pageStates, setPageStates] = useState(INITIAL_PAGES);

  // Check if all pages are selected
  const allChecked = pageStates.every((page) => page.checked);

  /**
   * Toggles all pages on or off
   */
  const handleAllPagesToggle = () => {
    const newState = !allChecked;
    setPageStates(pageStates.map((page) => ({ ...page, checked: newState })));
  };

  /**
   * Toggles a specific page by index
   * @param {number} index - Index of the page to toggle
   */
  const handlePageToggle = (index) => {
    setPageStates(
      pageStates.map((page, i) =>
        i === index ? { ...page, checked: !page.checked } : page
      )
    );
  };

  /**
   * Handles Done button click
   */
  const handleDone = () => {
    const selectedPages = pageStates
      .filter((page) => page.checked)
      .map((page) => page.name);
    
    if (onDone) {
      onDone(selectedPages);
    }
  };

  return (
    <div
      className="w-[370px] h-[326px] rounded-md border border-[#EEEEEE] py-2.5 flex flex-col items-center"
      style={{
        boxShadow: "0px 8px 15px 0px #1414141F, 0px 0px 4px 0px #1414141A",
      }}
    >
      {/* All Pages Toggle */}
      <ListItem
        key="all-pages"
        text="All Pages"
        onToggle={handleAllPagesToggle}
        isChecked={allChecked}
      />

      {/* Divider */}
      <div className="border-b pt-2.5 mb-2.5 border-[#CDCDCD] w-[340px]"></div>

      {/* Individual Pages List */}
      <div className="h-[164px] overflow-y-auto scroll">
        {pageStates.map((page, index) => (
          <ListItem
            key={index}
            text={page.name}
            isChecked={page.checked}
            onToggle={() => handlePageToggle(index)}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="border-b pt-2.5 mb-2.5 border-[#CDCDCD] w-[340px]"></div>

      {/* Done Button */}
      <Button onClick={handleDone} />
    </div>
  );
};
