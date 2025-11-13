'use client';
import { useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (num) => {
    setDisplay(display === "0" ? String(num) : display + num);
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
          <Button className={`col-span-3 bg-red-600`}>AC</Button>
          <Button className={`bg-green-600`}>/</Button>
          <Button onClick={() => handleNumber(7)}>7</Button>
          <Button onClick={() => handleNumber(8)}>8</Button>
          <Button onClick={() => handleNumber(9)}>9</Button>
          <Button className={`bg-green-600`}>x</Button>
          <Button onClick={() => handleNumber(4)}>4</Button>
          <Button onClick={() => handleNumber(5)}>5</Button>
          <Button onClick={() => handleNumber(6)}>6</Button>
          <Button className={`bg-green-600`}>-</Button>
          <Button onClick={() => handleNumber(1)}>1</Button>
          <Button onClick={() => handleNumber(2)}>2</Button>
          <Button onClick={() => handleNumber(3)}>3</Button>
          <Button className={`bg-green-600`}>+</Button>
          <Button className={`col-span-2`} onClick={() => handleNumber(0)}>0</Button>
          <Button>.</Button>
          <Button className={`bg-green-600`}>=</Button>
        </div>
      </section>
    </main>
  );
}
