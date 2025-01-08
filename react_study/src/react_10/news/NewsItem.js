import React from 'react'

function NewsItem({article}) {
    const {image_url, title, description, link} = article;
    return (
        <div>
            {
                <img src={image_url} alt={title} /> && (
                    <div className='thumb'>
                        <a href={link} target='_blank'>
                            <img src={image_url} alt={title} />
                        </a>
                    </div>
                )
            }
            <div className='contents'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NewsItem
