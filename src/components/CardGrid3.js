import React from 'react'

const CardGrid3 = (props) => {

    let { title, description, imageUrl, newsUrl, publishedAt, author } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <img src={`${!imageUrl ? 'https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' : imageUrl}`} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()} </small></p>
                    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default CardGrid3