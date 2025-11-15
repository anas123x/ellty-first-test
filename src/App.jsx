import { useState } from "react";
import { Button } from "./components/Button";
import { CheckBox } from "./components/CheckBox";
import { ListItem } from "./components/ListItem";

function App() {
  const [pageStates, setPageStates] = useState([
    { name: "Page 1", checked: false },
    { name: "Page 2", checked: false },
    { name: "Page 3", checked: false },
    { name: "Page 4", checked: false },
    { name: "Page 5", checked: false },
    { name: "Page 6", checked: false },
  ]);

  const allChecked = pageStates.every(page => page.checked);

  const handleAllPagesToggle = () => {
    const newState = !allChecked;
    setPageStates(pageStates.map(page => ({ ...page, checked: newState })));
  };

  const handlePageToggle = (index) => {
    setPageStates(pageStates.map((page, i) => 
      i === index ? { ...page, checked: !page.checked } : page
    ));
  };

  return (
    <div className="flex justify-center items-center pt-[85px] ">
      <div
        className="w-[370px] h-[326px] rounded-md border border-[#EEEEEE] py-2.5  flex flex-col items-center "
        style={{
          boxShadow: "0px 8px 15px 0px #1414141F, 0px 0px 4px 0px #1414141A",
        }}
      >
        <ListItem key={"all-pages"} text={"All Pages"} onToggle={handleAllPagesToggle} Checked={allChecked} />
        <div className="border-b pt-2.5 mb-2.5 border-[#CDCDCD] w-[340px]"></div>


        <div className="h-[164px] overflow-y-auto scroll">
          {pageStates.map((page, index) => (
            <ListItem key={index} text={page.name} Checked={page.checked} onToggle={() => handlePageToggle(index)} />
          ))}
        </div>
        <div className="border-b  pt-2.5 mb-2.5 border-[#CDCDCD] w-[340px]"></div>
        <Button />
      </div>
    </div>
  );
}

export default App;
