import React from 'react'

function Box(props) {
    let result;

    if(props.name === "컴퓨터" && props.result !== "tie" && props.result !== "") {
      result = props.result === "win" ? "lose" : "win";
    } else {
      result = props.result
    }
  

  return (
    <div className={`box ${result}`}>
      <h1>{props.name}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img src={props.item && props.item.img} alt="" />
      <h3>{result}</h3>
    </div>
  )
}

export default Box
