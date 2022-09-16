import { useState } from "react";

const useCalc = () => {
  const [result, setResult] = useState("")
  
  const memorySave = async () => {
    await fetch(process.env.REACT_APP_BACKEND_URL + '/memory/save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data: result})
    })
  }
  
  const memoryRecall = async () => {
    let memory = await fetch(process.env.REACT_APP_BACKEND_URL + '/memory/recall')
    .then(res => res.json())
    .then(body => body.data)
    setResult(memory)
  }

  const handleClick = (val) => {
    if (result === "Error") {
      setResult("")
      return
    }
    if ("+/*-".includes(result[result.length-1]) && "+/*-".includes(val)) {
      setResult(result.slice(0,-1) + val)
      return
    }
    if (result === "0" && val === "0") {
      return
    }
    if (val === "." && result.includes(".")) {
      return
    }
    if(result === "" && "+/*-".includes(val)) {
      return
    }
    if(result === "0" && (!"0.+-*/".includes(val))) {
      setResult(val)
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

  return {memoryRecall, memorySave, handleClick, clear, del, calculate, result}
}

export default useCalc;