import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div  style={{backgroundColor:color }}
    className ='backgroundColor'
    
    >
     <div className='buttonContainer'>
      <div>
        <button onClick={()=>setColor("red") } style={{backgroundColor:"red"}} >Red</button>&nbsp;
        <button onClick={()=> setColor("green")} style={{backgroundColor:"green"}}>Green</button>&nbsp;
        <button onClick={()=> setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>&nbsp;
        <button onClick={()=> setColor("yellow")} style={{backgroundColor:"yellow"}}>yellow</button>&nbsp;
        <button onClick={()=> setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>&nbsp;
        <button onClick={()=> setColor("purpal")} style={{backgroundColor:"purpal"}}>Purpul</button>&nbsp;
     
      </div>
     </div>
    </div>
    </>
  
  )
}

export default App
