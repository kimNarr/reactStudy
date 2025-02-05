import React from 'react'
import { useProductQuery } from './hooks/RQuery';
import { useParams } from 'react-router-dom';


function Detail() {
    const params = useParams();
    const {data} = useProductQuery(params.id);

    return (
        <div className='detail'>
            {
                data?.map(item=>(
                    <div className='detail_item'>
                        <div className='img_box'>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className='_box'></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Detail
