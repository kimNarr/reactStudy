import React, {useState, useMemo} from 'react'

// useMemo : 성능 최적화를 위해 사용 되는 훅
// 메모이제이션 : 배열에 지정된 값이 변경 되지 않는 한 이전에 계산된 값을 재사용
// 불필요한 연산을 방지하여 성능을 최적화 하는데 사용

// useMemo(()=> 함수(a, b),[a, b])
// a = 계산할 함수, 의존성 배열 : 배열안의 값이 변경 될 때만 계산 할 함수를 실행

function Umemo() {
    // const [count, setCount] = useState(0);
    // const [value, setValue] = useState(0);

    // const calc = (num) => {
    //     return num * 2
    // }

    // const memo = useMemo(()=>calc(count),[count])
    // console.log(memo)

    const [list, setList] = useState([]);
    const [num, setNum] = useState('')

    const onChange = (e) => {
        setNum(e.target.value)
    }

    const onIn = () => {
        if(!isNaN) {
            const newList = list.concat(parseInt(num))
            setList(newList)
            setNum('')
        } else {
            alert('숫자가 아닙니다')
            setNum('')
        }
    }

    console.log(num)
    console.log(list)

    const avr = (number) => {
        console.log("실행", number)
        let sum = 0;
        if(number.length > 0) {
            number.forEach(val => {
                sum += val
            });
    
            return Math.round(sum / number.length);
        } else {
            return 0;
        }
    }

    const avg = useMemo(()=>avr(list),[list])

  return (
    <div>
      {/* <h1>count : {count}</h1>
      <h1>value  : {vmemo}</h1>
      <button type='button' onClick={()=>setCount(count + 1)}>count</button>
      <button type='button' onClick={()=>setValue(value + 1)}>value</button> */}

      

      <input type="text" value={num} onChange={onChange}/>
      <button type='button' onClick={onIn}>등록</button>
      <ul>
        {list.map((li,idx)=>(
            <li key={idx}>{li}</li>
        ))}
      </ul>
      <h2>평균값 : {avr(list)}</h2>
      <h2>평균값 : {avg}</h2>
    </div>
  )
}

export default Umemo
