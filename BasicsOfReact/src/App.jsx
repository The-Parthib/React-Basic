
import { useState } from 'react';
import Card from './components/Card';
import ColorChanger from './components/ColorChanger';

const obj = {
  name: "parthib",
  roll : "145",
}
const arr = [1,2,3,4]

function App() {

  const [counter, setCounter] = useState(0);
  const addValue = () => { 
    console.log("value added",Math.random());
    // counter += 1;
    setCounter(counter+1);
   }
   const reduceVlue = () => { 
    if (counter == 0) {
      console.log()
    }
    else setCounter(counter-1)
    }

  return (
    <>
    <div>
      <h1>Chai and React | counter : {counter}</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceVlue}>Remove Value</button>

      {/* <Card username="Riju"  btnText="click me"/> 
      <Card username="Rupsa" />  */}
      <footer>Footer : {counter} </footer>
      <ColorChanger />
      </div>
    </>
  )
}

export default App
