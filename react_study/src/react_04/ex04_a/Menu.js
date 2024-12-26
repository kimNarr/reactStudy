import React, {useState} from 'react'
import Nav from './Nav';
import List from './List'
import Detail from './Detail';

function Menu() {
    let menuData = [
        {id:1, category:'샐러드', name: '시그니처 샐러드', price: 15000, src: '/ex04/img/item1.jpg', text: '제일 기본 샐러드입니다'},
        {id:2, category:'샐러드', name: '닭가슴살 샐러드', price: 17000, src: '/ex04/img/item2.jpg', text: '닭가슴살 샐러드입니다'},
        {id:3, category:'샐러드', name: '치즈 샐러드', price: 20000, src: '/ex04/img/item3.jpg', text: '치즈 샐러드입니다'},
        {id:4, category:'햄버거', name: '시그니처 햄버거', price: 13000, src: '/ex04/img/item4.jpg', text: '시그니처 햄버거입니다'},
        {id:5, category:'샐러드', name: '비프 샐러드', price: 16000, src: '/ex04/img/item5.jpg', text: '비프 샐러드입니다'},
        {id:6, category:'스테이크', name: '등심 스테이크', price: 21000, src: '/ex04/img/item6.jpg', text: '등심 스테이크입니다'},
        {id:7, category:'스테이크', name: '안심 스테이크', price: 22000, src: '/ex04/img/item7.jpg', text: '안심 스테이크입니다'},
        {id:8, category:'파스타', name: '맛폴리 파스타', price: 23000, src: '/ex04/img/item8.jpg', text: '맛폴리 파스타입니다'},
        {id:9, category:'파스타', name: '일단 파스타', price: 22500, src: '/ex04/img/item9.jpg', text: '일단 파스타입니다'},
        {id:10, category:'주류', name: '콜리지프리', price: 42000, src: '/ex04/img/item10.jpg', text: '콜키지프리 매장입니다'},
    ];

    // 상태관리
    const [state, setState] = useState({category : '전체', m_id: null});

    // 선택한 데이터 가져오기
    const selectMenu = menuData.find((menu)=> menu.id === state.m_id);
    console.log(selectMenu)

    // 카테고리 필터링
    const filterMenu = state.category === `전체` ? 
    menuData : menuData.filter((menu)=> menu.category === state.category);

    // 카테고리 중복제거
    const categories = ['전체', ...new Set(menuData.map((menu)=>menu.category))]

    // 상태변경 핸들러
    const setSelectedCategory = (category)=> setState((prev)=>({...prev, category}))

    const setSelectedMenu = (m_id) => setState((prev)=>({...prev, m_id}))
  return (
    <div>
      <h1>위스키 메뉴</h1>
      <div className='nav'>
        <Nav categories={categories} selectedCategory={state.category} onSelectCategory={setSelectedCategory} />
      </div>

      <div>
        {/* <List menuList={filterMenu} onSelectMenu={setSelectedMenu}/> */}
        {
            !state.m_id && (
                <Nav categories={categories} selectedCategory={state.category} onSelectCategory={setSelectedCategory}/>
            )
        }

        {
          !state.m_id ? (
            <List menuList={filterMenu} onSelectMenu={setSelectedMenu}/>
          ) : (
            <Detail menuList={selectMenu} onBack={()=>setSelectedMenu(null)}/>
          )
        }
      </div>
    </div>
  )
}

export default Menu
