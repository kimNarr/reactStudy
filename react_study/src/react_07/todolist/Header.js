import React, {useState} from 'react'

function Header({addTodo}) {
    const [inputValue, setInputValue] = useState('');

    const add = () => {
        if(inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    }

  return (
    <header>
      <input type="text" placeholder='할 일을 입력하세요' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <button type='button' onClick={add}>추가</button>
    </header>
  )
}

export default Header