import { useState } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import "./styles.css"

function App() {
  const [result, setResult] = useState("")
  
  const memorySave = () => {
    fetch('http://localhost:3001/api/memory-save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data: result})
    })
  }
  
  const memoryRecall = async () => {
    let memory = await fetch('http://localhost:3001/api/memory-recall')
    .then(res => res.json())
    .then(body => body.data)
    setResult(memory)
  }

  const handleClick = (val) => {
    if (result === "Error") {
      setResult("")
      return
    }
    if (result === "0" && val === "0") {
      return
    }
    if (val === "." && result.includes(".")) {
      return
    }
    if(result === "0" && (val !== "0" && val !== ".")) {
      setResult(val)
      return
    }
    if((result === "" || result === "0") && "+/*-".includes(val)) {
      return
    }
    setResult(result.concat(val));
  }

  const clear = () => {
    setResult("")
  }

  const del = () =>  {
    setResult(result.slice(0,-1))
  }

  const calculate = () => {
    if (result === "Error" || result === "") {
      setResult("")
      return
    }
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <div className="calculator-grid">
      <Display result={result}/>
      <Button name="Clear" handleClick={clear} className="span-two" />
      <Button name="DEL" handleClick={del} />
      <Button name="/" handleClick={handleClick}/>
      <Button name="M" handleClick={memorySave} className="two-col" />
      <Button name="1" handleClick={handleClick}/>
      <Button name="2" handleClick={handleClick}/>
      <Button name="3" handleClick={handleClick}/>
      <Button name="*" handleClick={handleClick}/>
      <Button name="4" handleClick={handleClick}/>
      <Button name="5" handleClick={handleClick}/>
      <Button name="6" handleClick={handleClick}/>
      <Button name="+" handleClick={handleClick}/>
      <Button name="MR" handleClick={memoryRecall} className="two-col" />
      <Button name="7" handleClick={handleClick}/>
      <Button name="8" handleClick={handleClick}/>
      <Button name="9" handleClick={handleClick}/>
      <Button name="-" handleClick={handleClick}/>
      <Button name="0" handleClick={handleClick}/>
      <Button name="." handleClick={handleClick}/>
      <Button name="=" handleClick={calculate} className="span-three" />
    </div>
  )
}

export default App;
