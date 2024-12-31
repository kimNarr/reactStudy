import React, {useEffect} from 'react'
import './App.css'

function AddEvent() {
  const resize = () => console.log('화면 리사이즈')
  const scroll = () => console.log('화면 스크롤')

  useEffect(()=>{
    window.addEventListener('resize',resize)
    window.addEventListener('scroll',scroll)
    return()=>{
        window.removeEventListener('resize', resize)
        window.removeEventListener('scroll', scroll)
    } // 메모리 누수 방지
  },[])
  return (
    <div>
      
    </div>
  )
}

export default AddEvent
