import React from 'react'

function Contents() {
    let stationList = [];
    for(let i=1; i <= 14; i++) {
        stationList.push({img:`./ex02/img/b${i}.png`, alt:`b${i}`})
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
