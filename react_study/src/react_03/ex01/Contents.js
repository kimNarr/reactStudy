function Contents() {
    let items = [
        {img : "./ex01/img/image-1.jpg", name : "Debossed Multi Loto Nylin Shark Full Zip Down Jaket", price : "1,079,000"},
        {img : "./ex01/img/image-2.jpg", name : "Baby Milo 25th Anniv. Plush Doll Tee", price : "164,000"},
        {img : "./ex01/img/image-3.jpg", name : "Christmas Ape Head Tee", price : "164,000"},
        {img : "./ex01/img/image-4.jpg", name : "Aurora Ape Head Tee", price : "164,000"},
        {img : "./ex01/img/image-5.jpg", name : "Asia Camo Bomber Jacket", price : "1,056,000"},
        {img : "./ex01/img/image-6.jpg", name : "Damage Relaxed Fit Sweater", price : "563,000"},
        {img : "./ex01/img/image-7.jpg", name : "Asia Camo Coach Jacket", price : "557,000"},
        {img : "./ex01/img/image-8.jpg", name : "Gore-Tex Wind Stopper 1st Cami Relaxed Coach Jacket", price : "774,000"},
    ]
    return(
        <section>
            <div className="inner">
                <h2>신상품</h2>
                <article>
                    <ul className="itemList">
                        {/* <Item img="./ex01/img/image-1.jpg" name="Debossed Multi Loto Nylin Shark Full Zip Down Jaket" price="1,079,000" />
                        <Item img="./ex01/img/image-2.jpg" name="Baby Milo 25th Anniv. Plush Doll Tee" price="164,000" />
                        <Item img="./ex01/img/image-3.jpg" name="Christmas Ape Head Tee" price="164,000" />
                        <Item img="./ex01/img/image-4.jpg" name="Aurora Ape Head Tee" price="164,000" />
                        <Item img="./ex01/img/image-5.jpg" name="Asia Camo Bomber Jacket" price="1,056,000" />
                        <Item img="./ex01/img/image-6.jpg" name="Damage Relaxed Fit Sweater" price="563,000" />
                        <Item img="./ex01/img/image-7.jpg" name="Asia Camo Coach Jacket" price="557,000" />
                        <Item img="./ex01/img/image-8.jpg" name="Gore-Tex Wind Stopper 1st Cami Relaxed Coach Jacket" price="774,000" /> */}
                        {items.map((items, idx)=>{
                            //forEach 는 return 안되므로 map 사용
                            //map 함수를 쓸때 key 값을 넣어줘야한다
                            return(
                                <Item key={idx} img={items.img} name={items.name} price={items.price}/>
                            )
                        })}
                    </ul>
                </article>
            </div>
        </section>
    )
}

function Item({img, name, price}) {
    return(
        <li>
            <div className="img">
                <img src={img} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>₩{price}</p>
        </li>
    )
}
export default Contents;