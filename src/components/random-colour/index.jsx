import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

export default function RandomColour() {
  const [typeOfColour, setTypeOfColour] = useState("hex");
  const [colour, setColour] = useState("#000000");

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColour() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColour = "#";

    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }
    console.log(hexColour);
    setColour(hexColour);
  }

  function handleCreateRandomRgbColour() {}

  return (
    <div
      style={{
        width: "100ww",
        height: "100vh",
        background: colour,
      }}
    >
      <button onClick={() => setTypeOfColour("hex")}>Create HEX colour</button>
      <button onClick={() => setTypeOfColour("rgb")}>Create RGB button</button>
      <button
        onClick={
          typeOfColour === "hex"
            ? handleCreateRandomHexColour
            : handleCreateRandomRgbColour
        }
      >
        Generate Random Color
      </button>
    </div>
  );
}
