const Product = () => {
    return(
        <section className="product">
            <div className="inner">
                <h2>product</h2>
                <ul className="dItem">
                    <Ditem />
                    <Ditem />
                </ul>
            </div>
        </section>
    )
}

const Ditem = () => {
    return(
        <li>
            <div className="imgBox"></div>
            <h3>title</h3>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis accusamus repellat neque delectus. Alias quasi culpa voluptates eaque nesciunt aperiam accusantium. Aliquid numquam quidem explicabo ab ea et vel.
            </p>
        </li>
    )
}

export default Product;