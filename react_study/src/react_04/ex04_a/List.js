import React from 'react'

function List({menuList, onSelectMenu}) {
    // console.log(menuList, onSelectMenu)
  return (
    <div>
      {
        menuList.map((menu, idx)=> (
            <div key={idx} onClick={()=> onSelectMenu(menu.id)}>
                <figure><img src={menu.src} alt={menu.name} /></figure>
                <h3>{menu.name}</h3>
                <p>{menu.price}</p>
            </div>
        ))
      }
    </div>
  )
}

export default List
