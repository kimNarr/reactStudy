import React, {useState} from 'react'

function Content() {
  let menu = [
      {id:1, category:'sal', name: '시그니처 샐러드', price: 15000, src: './ex04/img/item1.jpg', text: '제일 기본 샐러드입니다'},
      {id:2, category:'sal', name: '닭가슴살 샐러드', price: 17000, src: './ex04/img/item2.jpg', text: '닭가슴살 샐러드입니다'},
      {id:3, category:'sal', name: '치즈 샐러드', price: 20000, src: './ex04/img/item3.jpg', text: '치즈 샐러드입니다'},
      {id:4, category:'ham', name: '시그니처 햄버거', price: 13000, src: './ex04/img/item4.jpg', text: '시그니처 햄버거입니다'},
      {id:5, category:'sal', name: '비프 샐러드', price: 16000, src: './ex04/img/item5.jpg', text: '비프 샐러드입니다'},
      {id:6, category:'sta', name: '등심 스테이크', price: 21000, src: './ex04/img/item6.jpg', text: '등심 스테이크입니다'},
      {id:7, category:'sta', name: '안심 스테이크', price: 22000, src: './ex04/img/item7.jpg', text: '안심 스테이크입니다'},
      {id:8, category:'pas', name: '맛폴리 파스타', price: 23000, src: './ex04/img/item8.jpg', text: '맛폴리 파스타입니다'},
      {id:9, category:'pas', name: '일단 파스타', price: 22500, src: './ex04/img/item9.jpg', text: '일단 파스타입니다'},
      {id:10, category:'alc', name: '콜리지프리', price: 42000, src: './ex04/img/item10.jpg', text: '콜키지프리 매장입니다'},
  ];

  const [tab, setTab] = useState("all");
  const menuFilter = menu.filter(m => m.category === tab);

  const [detail, setDetail] =useState("");
  const detailFilter = menu.find(m => m.name === detail);

  if(detail === "") {
    return (
      <section>
        <h2>메뉴</h2>
        <Tab setTab = {setTab}/>
        <div className='menuInfo'>
          <ul className='list'>
            {
              tab === 'all' ? 
              menu.map(m =>(
                <MenuList key={m.id} m={m} setDetail={setDetail}/>
              )) 
              : menuFilter.map(m=>(
                <MenuList key={m.id} m={m} setDetail={setDetail}/>
              ))
            }
          </ul>
        </div>
      </section>
    )
  } else {
    return(
      <section>
        <Detail detailFilter={detailFilter} setDetail={setDetail} />
      </section>
    )
  }
  
}

function Tab({setTab}) {
 return(
  <div className='tab'>

    <button type='button' onClick={()=> setTab('all')}>전체</button>
    <button type='button' onClick={()=> setTab('sal')}>샐러드</button>
    <button type='button' onClick={()=> setTab('ham')}>햄버거</button>
    <button type='button' onClick={()=> setTab('sta')}>스테이크</button>
    <button type='button' onClick={()=> setTab('pas')}>파스타</button>
    <button type='button' onClick={()=> setTab('alc')}>주류</button>
  </div>
 )
}

function MenuList({setDetail, m}) {
  return(
    <li>
      <a href="#" onClick={()=>setDetail(m.name)}>
        <img src={m.src} alt={m.name} />
        <h3>{m.name}</h3>
        <p>{m.price}</p>
        <p>{m.text}</p>
      </a>
    </li>
  )
}

function Detail({detailFilter, setDetail}) {
  return(
    <div className='detail'>
      <button type='button' onClick={()=>{setDetail("")}}>뒤로가기</button>
      <div className='info'>
        <figure>
          <img src={detailFilter.src} alt={detailFilter.name} />
          <h3>{detailFilter.name}</h3>
          <p>{detailFilter.price}</p>
          <p>{detailFilter.text}</p>
        </figure>
      </div>
    </div>
  )
}

export default Content
