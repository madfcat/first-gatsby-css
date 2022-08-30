import React from 'react'
import './category.css'

const Category = ({ photoUrl, heading, description }) => {
    return (
        <div className='category'>
            <div className='photo'>
                <img src={photoUrl} alt={heading} />
            </div>
            <div className='text'>
                <h4>{heading}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Category