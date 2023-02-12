import React from 'react'

const Description = ({ description }) => {
    return (
        <div className='mb-4'>
            <p className='text-darkGrayishBlue  md:text-lg'>{description}</p>
        </div>)
}

export default Description