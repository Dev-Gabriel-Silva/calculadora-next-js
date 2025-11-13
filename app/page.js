'use client';
import { useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const [display, setDisplay] = useState("0");

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
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button className={`bg-green-600`}>x</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button className={`bg-green-600`}>-</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button className={`bg-green-600`}>+</Button>
          <Button className={`col-span-2`}>0</Button>
          <Button>.</Button>
          <Button className={`bg-green-600`}>=</Button>
        </div>
      </section>
    </main>
  );
}
