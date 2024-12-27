import React, {useState} from 'react'
import Box from './Box'
import './css/layout.css'

const game = {
    scissors : {
        name : "scissors",
        img : './ex05/img/img01.png'
    },
    rock : {
        name : "rock",
        img : './ex05/img/img02.png'
    },
    paper : {
        name : "paper",
        img : './ex05/img/img03.png'
    }
}

function App() {
    const [user, setUser] = useState(null);
    const [com, setCom] = useState(null);
    const [result, setResult] = useState("");

    const play = (choice) => {
        console.log("play", choice);
        setUser(game[choice]);
        let comChoice = randomChoice();
        setCom(comChoice);
        setResult(win(game[choice], comChoice))
    }

    const win = (user, com) => {
        console.log("user:", user , "com:", com);
        if(user.name === com.name) {
            return "무승부"
        } else if(user.name === "rock") {
            return com.name === "scissors" ? "win" : "lose";
        } else if(user.name === "scissors") {
            return com.name === "paper" ? "win" : "lose";
        } else if(user.name === "paper") {
            return com.name === "rock" ? "win" : "lose";
        }
    }

    const randomChoice = () => {
        // object.keys 객체에 키값만 추출해 배열로 만들어주는 함수
        let gameArr = Object.keys(game);
        console.log(gameArr);
        let randomItem = Math.floor(Math.random()*gameArr.length)
        let final = gameArr[randomItem]
        console.log(final)
        return game[final]
    }


  return (
    <div>
        <div className='allbox'>
            <Box name="사용자" item={user} result={result}/>
            <Box name="컴퓨터" item={com} result={result}/>
        </div>
        <div className='btnbox'>
            <button type='button' onClick={()=>play("scissors")}>가위</button>
            <button type='button' onClick={()=>play("rock")}>바위</button>
            <button type='button' onClick={()=>play("paper")}>보</button>
        </div>
    </div>
  )
}
export default App
