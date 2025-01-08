import React from 'react'

function Category({category, onSelect}) {
    
    const categories = [
        {name: 'all', text: '전체'},
        {name: 'top', text: 'TOP뉴스'},
        {name: 'sports', text: '스포츠'},
        {name: 'technology', text: '테크놀로지'},
        {name: 'business', text: '비즈니스'},
        {name: 'science', text: '사이언스'},
        {name: 'entertainment', text: '엔터'},
        {name: 'health', text: '건강'},
        {name: 'world', text: '국제'},
        {name: 'politics', text: '정치'},
        {name: 'enviroment', text: '환경'},
    ]
    return (
        <div>
            {
                categories.map((item,idx)=>(
                    <button 
                    key={idx} 
                    type='button' 
                    onClick={()=>onSelect(item.name)}
                    className={category === item.name ? 'active' : ''}
                    >{item.text}</button>
                ))
            }
        </div>
    )
}

export default Category
