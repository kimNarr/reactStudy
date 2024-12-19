const Program = () => {
    return(
        <section className="program">
            <div className="inner">
                <h2>program</h2>
                <ul className="pItem">
                    <Pitem />
                    <Pitem />
                    <Pitem />
                    <Pitem />
                    <Pitem />
                    <Pitem />
                    <Pitem />
                    <Pitem />
                </ul>
            </div>
        </section>
    )
}

const Pitem = () => {
    return(
        <li>
            <div className="imgBox"></div>
            <h3>title</h3>
            <p className="name">name</p>
            <p className="date">2024년 M월 DD일 ~ M월 DD일</p>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis accusamus repellat neque delectus. Alias quasi culpa voluptates eaque nesciunt aperiam accusantium. Aliquid numquam quidem explicabo ab ea et vel.
            </p>
        </li>
    )
}

export default Program;