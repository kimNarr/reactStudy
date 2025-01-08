import React from 'react'

function NewsList({news}) {
  return (
    <ul>
      {
        news.map(item=>(
            <li key={item.article_id}>
                <figure>
                  <img className='img' src={item.image_url === null ? './default.png' : item.image_url} alt={item.title} />
                </figure>
                <h2 className='title'>{item.title}</h2>
                <p className='text'>{item.description}</p>
                <a className='viewMore' href={item.link} target='_blank'>View More</a>
            </li>
        ))
      }
    </ul>
  )
}

export default NewsList
