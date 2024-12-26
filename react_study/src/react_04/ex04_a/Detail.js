import React from 'react'

function Detail({menuList, onBack}) {
  return (
    <div>
      <button type='button' onClick={onBack}>뒤로가기</button>
      <figure>
        <img src={menuList.src} alt={menuList.name} />
      </figure>
      <h3>{menuList.name}</h3>
      <p>{menuList.price}</p>
      <p>{menuList.text}</p>
    </div>
  )
}

export default Detail
