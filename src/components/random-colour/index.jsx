import { useState } from "react";
import "./styles.css";

export default function RandomColour() {
  const [typeOfColour, setTypeOfColour] = useState("hex");
  const [baseColour, setBaseColour] = useState("#000000");

  const displayColour =
    typeOfColour === "rgb" ? hexToRgb(baseColour) : baseColour;

  function randomColourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function hexToRgb(hex) {
    hex = hex.replace("#", "");

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
  }

  function rgbToHex(r, g, b) {
    const toHex = (num) => num.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function handleCreateRandomHexColour() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColour = "#";

    for (let i = 0; i < 6; i++) {
      hexColour += hex[randomColourUtility(hex.length)];
    }

    setBaseColour(hexColour);
  }

  function handleCreateRandomRgbColour() {
    const r = randomColourUtility(256);
    const g = randomColourUtility(256);
    const b = randomColourUtility(256);

    const hex = rgbToHex(r, g, b);
    setBaseColour(hex); // still store it in HEX
  }

  return (
    <div
      style={{
        width: "100ww",
        height: "100vh",
        background: baseColour,
        textAlign: "center",
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColour === "rgb" ? "RGB Colour " : "Hex Colour "}</h3>
        <h1>{displayColour}</h1>
      </div>
    </div>
  );
}
