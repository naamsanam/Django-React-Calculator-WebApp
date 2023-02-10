import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);

  const handleCalculation = (operation) => {
    let newResult = result;

    switch (operation) {
      case "add":
        newResult += 1;
        break;
      case "subtract":
        newResult -= 1;
        break;
      case "multiply":
        newResult *= 2;
        break;
      case "divide":
        newResult /= 2;
        break;
      default:
        break;
    }

    setResult(newResult);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <button onClick={() => handleCalculation("add")}>+</button>
        <button onClick={() => handleCalculation("subtract")}>-</button>
        <button onClick={() => handleCalculation("multiply")}>*</button>
        <button onClick={() => handleCalculation("divide")}>/</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
