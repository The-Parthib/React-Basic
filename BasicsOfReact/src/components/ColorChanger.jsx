import { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-400"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-2xl">
          <button
            className="outline-none px-4 py-1 rounded-xl text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => { setColor("red") }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-xl text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => { setColor("Green") }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-xl text-white"
            style={{ backgroundColor: "Violet" }}
            onClick={() => { setColor("Violet") }}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-1 rounded-xl text-white"
            style={{ backgroundColor: "Blue" }}
            onClick={() => { setColor("Blue") }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-xl text-white"
            style={{ backgroundColor: "Orange" }}
            onClick={() => { setColor("Orange") }}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-xl text-white"
            style={{ backgroundColor: "black" }}
            onClick={() => { setColor("black") }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorChanger;
