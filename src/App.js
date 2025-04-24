import "./App.css";
import { useState } from "react";

function App() {
  const [typeOfColour, setTypeOfColour] = useState("hex");
  const [colour, setColour] = useState("#000000");
  return (
    <div className="App">
      <button>Create HEX colour</button>
      <button>Create RGB button</button>
      <button>Generate Random Color</button>
    </div>
  );
}

export default App;
