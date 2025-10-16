import './App.css'
import{useState } from "react"

function App() {
  const [count,setCount]=useState(0);
  return (
    <>
      <h2>Conter App</h2>
      <h3>count:{count}</h3>
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <button onClick={()=>setCount(count-1)}>Decreament</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
};

export default App;
