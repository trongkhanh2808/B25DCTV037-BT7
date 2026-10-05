import { useState } from "react";

function Button({ text, onClick }) {
  return (
    <button className="calc-button" onClick={onClick}>
      {text}
    </button>
  );
}

function Calculator() {
  const [display, setDisplay] = useState("");

  const clickButton = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "DEL") {
      setDisplay(display.slice(0, -1));
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "C", "DEL", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", ".",
    "0", "="
  ];

  return (
    <div className="calculator">
      <h2>Virtual Calculator</h2>

      <div className="display">{display || "0"}</div>

      <div className="buttons">
        {buttons.map((button, index) => (
          <Button
            key={index}
            text={button}
            onClick={() => clickButton(button)}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;