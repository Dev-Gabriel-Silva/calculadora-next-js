'use client';
import { useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setWaitingForNewValue(false);
    }
  };

  const handleOperation = (op) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculate = (prev, current, op) => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "x":
        return prev * current;
      case "/":
        return prev / current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 gap-8`}
    >
      <section
        className={`flex flex-col items-center justify-center bg-gray-900 p- rounded w-3xl`}
      >
        <div
          className={`bg-white p-4 mt-4 text-4xl text-right text-black rounded w-2xl `}>
          {display}
        </div>
        <div
          className={`grid grid-cols-4 gap-2 m-4 w-2xl text-black`}
        >
          <Button className={`col-span-3 bg-red-600`} onClick={handleClear}>AC</Button>
          <Button className={`bg-green-600`} onClick={() => handleOperation("/")}>​/</Button>
          <Button onClick={() => handleNumber(7)}>7</Button>
          <Button onClick={() => handleNumber(8)}>8</Button>
          <Button onClick={() => handleNumber(9)}>9</Button>
          <Button className={`bg-green-600`} onClick={() => handleOperation("x")}>x</Button>
          <Button onClick={() => handleNumber(4)}>4</Button>
          <Button onClick={() => handleNumber(5)}>5</Button>
          <Button onClick={() => handleNumber(6)}>6</Button>
          <Button className={`bg-green-600`} onClick={() => handleOperation("-")}>-</Button>
          <Button onClick={() => handleNumber(1)}>1</Button>
          <Button onClick={() => handleNumber(2)}>2</Button>
          <Button onClick={() => handleNumber(3)}>3</Button>
          <Button className={`bg-green-600`} onClick={() => handleOperation("+")}>+</Button>
          <Button className={`col-span-2`} onClick={() => handleNumber(0)}>0</Button>
          <Button onClick={handleDecimal}>.</Button>
          <Button className={`bg-green-600`} onClick={handleEquals}>=</Button>
        </div>
      </section>
    </main>
  );
}
