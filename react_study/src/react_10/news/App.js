import React, {useState, useCallback} from 'react'
import Category from './Category'
import NewsList from './NewsList';
import './News.css'

function App() {
    const [category, setCategory] = useState('all');

    // 카테고리가 변경될 때 실행되는 함수
    const onSelect = useCallback((category)=>setCategory(category),[])

    return (
        <div>
            <Category category={category} onSelect={onSelect}/>
            <NewsList category={category}/>
        </div>
    )
}

export default App
