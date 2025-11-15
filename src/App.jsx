import { Button } from "./components/Button";

function App() {
  return (
    <div className="flex justify-center items-center pt-[85px] ">
      <div
        className="w-[370px] h-[326px] rounded-md border border-[#EEEEEE] py-2.5  flex flex-col justify-between items-center "
        style={{
          boxShadow: "0px 8px 15px 0px #1414141F, 0px 0px 4px 0px #1414141A",
        }}
      >
       <Button />
      </div>
    </div>
  );
}

export default App;
