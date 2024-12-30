import React, {useEffect, useState} from 'react'

function FunctionTimer() {
    const [count, setCount] = useState(0)
    const [running, setRunning] = useState(false)
    let timer = null;
    
    function start() {
        if(!running) {
            setRunning(true)   
            timer = setInterval(()=>{
                setCount((count) => count + 1)
            },1000)
        } 
    }
    function stop() {
        setRunning(false);
        clearInterval(timer)
        console.log(timer)
    }
    function reset() {
        setCount(0)
        clearInterval(timer)
    }
    
  return (
    <div>
      <h2>count : {count} 초</h2>
      <button type='button' onClick={start}>start</button>
      <button type='button' onClick={stop}>stop</button>
      <button type='button' onClick={reset}>reset</button>
    </div>
  )
}

export default FunctionTimer
