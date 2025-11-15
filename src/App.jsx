import { PageSelector } from "./components/PageSelector";

/**
 * Main App component
 * Entry point for the application
 */
function App() {
  /**
   * Handles the completion of page selection
   * @param {string[]} selectedPages - Array of selected page names
   */
  const handlePageSelectionDone = (selectedPages) => {
    console.log("Selected pages:", selectedPages);
    // Add your logic here for what happens when Done is clicked
  };

  return (
    <div className="flex justify-center items-center pt-[85px]">
      <PageSelector onDone={handlePageSelectionDone} />
    </div>
  );
}

export default App;
