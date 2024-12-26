import React from 'react'

function Nav({categories, selectedCategory, onSelectCategory}) {
    // console.log(categories, selectedCategory, onSelectCategory)
  return (
    <div>
        {
        categories.map((menu, idx)=>(
            <button key={idx} onClick={()=>onSelectCategory(menu)}>{menu}</button>
        ))
        }
    </div>
  )
}

export default Nav
