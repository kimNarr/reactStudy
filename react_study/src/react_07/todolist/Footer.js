import React from 'react'

function Footer({filter, setFilter, clear}) {
    
  return (
    <div>
      <button type='button' onClick={()=>setFilter('All')} disabled={filter==='All'}>전체</button>
      <button type='button' onClick={()=>setFilter('active')} disabled={filter==='active'}>할일</button>
      <button type='button' onClick={()=>setFilter('complete')} disabled={filter==='complete'}>완료</button>
      <button type='button' onClick={clear}>완료항목삭제</button>
    </div>
  )
}

export default Footer
