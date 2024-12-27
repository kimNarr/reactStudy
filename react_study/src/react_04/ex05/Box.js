const Box = (props) => {
    let result;
    return(
        <div className='box'>
            <h2>{props.title}</h2>
            <p className='name'></p>
            <figure>
                <img src={props.item && props.item.img} alt='' />
            </figure>
            <p className='result'>{props.result}</p>
        </div>
    )
}

export default Box