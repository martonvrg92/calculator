import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import useCalc from "./hooks/useCalc/useCalc";
import "./styles.css"

function App() {

  const {memoryRecall, memorySave, handleClick, clear, del, calculate, result} = useCalc()

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
