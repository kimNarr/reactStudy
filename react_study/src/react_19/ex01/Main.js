import { useProductQuery } from './hooks/RQuery'
import { Link } from 'react-router-dom';

function Main() {

    const {data} = useProductQuery();

    return (
        <div className='inner'>
            <h1 className='logo'>SHOP</h1>
            <div className='search_box'>
                <input type="text" />
                <button type='button'>검색</button>
            </div>
            <div className='item_list'>
                <ul>
                {
                    data?.map(item=>(
                        <li key={item.id}>
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.img} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                            </Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default Main
