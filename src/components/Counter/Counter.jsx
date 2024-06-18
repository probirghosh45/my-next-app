"use client"
import { useState } from "react";

const Counter = () => {

    const [counter,setCounter] = useState(0)

    return (
        <div className="text-4xl text-center">
        <div>{counter}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCounter(counter+1)}>Increase</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>setCounter(counter-1)}>Decrease</button>
      </div>
    );
};

export default Counter;