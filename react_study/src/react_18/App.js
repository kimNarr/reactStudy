import React, { useEffect } from 'react'
// import { listAction } from './redux/action/listAction'
import { getProducts } from './redux/reducer/listSlice';
import { useDispatch, useSelector } from 'react-redux'

function App() {

    const dispatch = useDispatch();
    const {list, status} = useSelector(state => state.List)

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    if(status === "loading") return <h3>loading...</h3>
    if(status === "failed") return <h3>error...</h3>

    return (
        <div>
            {
                list.map(item=>(
                    <div key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <h2>{item.title}</h2>
                        <h2>{item.price}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default App
