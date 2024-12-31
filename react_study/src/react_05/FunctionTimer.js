import React, {useEffect, useState} from 'react'

function FunctionTimer() {
    // const [count, setCount] = useState(0)
    // const [running, setRunning] = useState(false)
    // let timer = null;
    
    // useEffect(()=>{

    // },[]) 

    // function start() {
    //     if(!running) {
    //         setRunning(true)   
    //         timer = setInterval(()=>{
    //             setCount((count) => count + 1)
    //         },1000)
    //     } 
    // }
    // function stop() {
    //     setRunning(false);
    //     clearInterval(timer)
    //     console.log(timer)
    // }
    // function reset() {
    //     setCount(0)
    //     clearInterval(timer)
    // }

    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    console.log(count, running);

    useEffect(()=>{
      console.log(running, count);
      let timer;
      if(running) {
        timer = setInterval(() => {
          setCount((time)=> time + 1)
        }, 1000);
      }
      return()=> clearInterval(timer);
    },[running, count])

    const reset = () => {
      setRunning(false);
      setCount(0)
    }
    
  return (
    <div>
      <h2>count : {count} 초</h2>
      <button type='button' onClick={()=>setRunning(true)}>start</button>
      <button type='button' onClick={()=>setRunning(false)}>stop</button>
      <button type='button' onClick={reset}>reset</button>
    </div>
  )
}

export default FunctionTimer
