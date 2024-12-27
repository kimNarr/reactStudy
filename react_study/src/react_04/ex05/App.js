import React, {useState} from 'react'
import './css/layout.css'
import Box from './Box'


function App() {
    let choice = {
        scissor : {name:'scissor', img:'./ex05/img/img01.png'},
        rock : {name:'rock', img:'./ex05/img/img02.png'},
        paper : {name:'paper', img:'./ex05/img/img03.png'},
    }
    const [userSelect, setUserSelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const [result, setResult] = useState("");

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let comChoice = randomChoice();
        setComSelect(comChoice);
        jud(choice[userChoice], comChoice)
    }

    const randomChoice = () =>{
        let itemArr = Object.keys(choice);
        let randomItem = Math.floor(Math.random()* itemArr.length);
        let final =itemArr[randomItem];
        return choice[final]
    }

    const jud = (user, com) => {
        if(user.name === com.name) {
            return "Tie"
        } else if(user.name === "rock") return com.name === "scissor" ? "Win" : "Lose";
        else if(user.name === "scissor") return com.name === "paper" ? "Win" : "Lose";
        else if(user.name === "paper") return com.name === "rock" ? "Win" : "Lose";
    }

  return (
    <div className='wrap'>
    {/* 
      박스 2개 (타이틀, 이미지, 결과) > 컴포넌트
      가위 바위 보 버튼
      버튼을 클릭하면 클릭한 값이 박스에 출력
      컴퓨터는 랜덤하게 가위바위보 선택
      결과를 가지고 누가 이겼는지 승패 결과 출력

      승패 결과에따라 테두리 색이 바뀌게 (승/패/무승부)  
    */}
    <Box title='User' item={userSelect} result={result}/>
    <Box title='Computer'item={comSelect} result={result}/>
    {/* <Com/> */}
    <div className='btnWrap'>
            <button type='button' onClick={()=>play('scissor')}>가위</button>
            <button type='button' onClick={()=>play('rock')}>바위</button>
            <button type='button' onClick={()=>play('paper')}>보</button>
        </div>
    </div>
  )
}

export default App
