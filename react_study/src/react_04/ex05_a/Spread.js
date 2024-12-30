import React, {useState} from 'react'

function App() {

    
const [user, setUser] = useState({name: "KIM", age : 20})
console.log(user)

const [arr, setArr] = useState([1,2,3,4])
console.log(arr)
  
function box() {
    setUser({...user, age:40, iq: 100})
    // ...arr : 기존배열값을 유지(복사)하면서 state update

    setArr([...arr,arr.pop()])
}

  return (
    <div>
      {/* 기존배열의 요소를 새로운 배열로 복사하거나 추가적인 요소를 병합 시 */}
      <button type='button' onClick={box}>클릭</button>
    </div>
  )
}




export default App
// 기존배열의 요소를 새로운 배열로 복사하거나 추가적인 요소를 병합 시