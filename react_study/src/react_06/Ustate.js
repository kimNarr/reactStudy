import React, {useState} from 'react'

function Ustate() {
    const [list, setList] = useState([
        {id: 1, text: '김밥'},
        {id: 2, text: '라면'},
        {id: 3, text: '우동'},
    ]);

    const [inputText, setInputText] = useState('');
    const [next, setNext] = useState(4); // 새로운 항목 추가시 id값

    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const onClick = () => {
        // concat : 배열이나 문자열을 결합시 사용
        // 기존 배열이나 문자열을 변경하지 않고 새로운 배열이나 문자열 반환
        const addList = list.concat({id: next, text : inputText})
        setNext(next + 1) // next 값에 1을 더해준다
        setList(addList) // list 업데이트
        setInputText(''); // input창 초기화
    }

    // const remove = (e) => {
    //     const dbId = e.target.dataset.id;

    //     const newList = list.filter(li => {
    //         if(li.id != dbId) {
    //             return li
    //         }
    //     })
    //     setList(newList)
    // }

    // const newList = list.map(li => (
    //     <li key={li.id} data-id={li.id} onDoubleClick={remove}>{li.text}</li>
    // ))

    const remove = (id) => {
        console.log(id);
        const removes = list.filter(list => list.id !== id)
        setList(removes)
    }

    const newList = list.map(li => (
        <li key={li.id} onDoubleClick={()=>remove(li.id)}>{li.text}</li>
    ))

    console.log(inputText)

    // console.log(list);
    return (
        <div>
            {/* li 더블클릭시 해당 리스트 사라지게 */}
        <input type="text" value={inputText} onChange={onChange}/>
        <button type='button' onClick={onClick}>추가</button>
        <ul>
            {newList}
        </ul>
        </div>
    )
}

export default Ustate
