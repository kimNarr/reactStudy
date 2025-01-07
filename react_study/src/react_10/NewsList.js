import React from 'react'

function NewsList({news}) {
  return (
    <ul>
      {
        news.map(item=>(
            <li key={item.article_id}>
                <a href={item.link} target='_blank'>
                    <figure>
                        <img className='img' src={item.image_url} alt="" />
                    </figure>
                </a>
                <h2 className='title'>{item.title}</h2>
                <p className='text'>{item.description}</p>
            </li>
        ))
      }
    </ul>
  )
}

export default NewsList
