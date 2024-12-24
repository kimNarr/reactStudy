import React from 'react'

function Contents() {
    let stationList = [
        // {img:"./ex02/img/b1.png", alt:"b1"},
        // {img:"./ex02/img/b2.png", alt:"b2"},
        // {img:"./ex02/img/b3.png", alt:"b3"},
        // {img:"./ex02/img/b4.png", alt:"b4"},
        // {img:"./ex02/img/b5.png", alt:"b5"},
        // {img:"./ex02/img/b6.png", alt:"b6"},
        // {img:"./ex02/img/b7.png", alt:"b7"},
        // {img:"./ex02/img/b8.png", alt:"b8"},
        // {img:"./ex02/img/b9.png", alt:"b9"},
        // {img:"./ex02/img/b10.png", alt:"b10"},
        // {img:"./ex02/img/b11.png", alt:"b11"},
        // {img:"./ex02/img/b12.png", alt:"b12"},
        // {img:"./ex02/img/b13.png", alt:"b13"},
        // {img:"./ex02/img/b14.png", alt:"b14"},
    ]
    for(let i=1; i <= 14; i++) {
        stationList.push({img:`./ex02/img/b${i}`, alt:`b${i}}`})
    }
  return (
    <section className="contents">
        <div className="inner">
            <h2>DJ 스테이션<span><a href="#">테마</a></span></h2>
            <article>
                <h3>느낌별 스테이션</h3>
                <ul className="stationList">
                    {stationList.map((s, idx)=>{
                        return <Station key={idx} img={s.img} alt={s.alt} />
                    })}
                </ul>
            </article>
        </div>
    </section>
  )
}

function Station(props) {
    return(
        <li>
            <img src={props.img} alt={props.alt} />
        </li>
    )
}

export default Contents
