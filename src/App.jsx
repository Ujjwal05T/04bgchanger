import { useState } from "react"
import React from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
    
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2"> 
        <div className="bg-white flex flex-wrap shadow-lg gap-3 rounded-3xl px-5 py-3">
          <button className="outline-none text-white rounded-3xl px-3 py-1 shadow-lg"
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none text-white rounded-3xl px-3 py-1 shadow-lg"
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none text-white rounded-3xl px-3 py-1 shadow-lg"
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none text-black rounded-3xl px-3 py-1"
          style={{backgroundColor:"aqua"}}
          onClick={()=>setColor("aqua")}>Aqua</button>
          <button className="outline-none text-white rounded-3xl px-3 py-1"
          style={{backgroundColor:"black"}}
          onClick={()=>setColor("black")}>Black</button>
          <button className="outline-none text-white rounded-3xl px-3 py-1 shadow-lg"
          style={{backgroundColor:"gray"}}
          onClick={()=>setColor("white")}>White</button>
        </div>
      </div>
    </div>
   
  )
}

export default App
