import React from 'react'

const Price = ({ price, discount, normalPrice }) => {
    return (
        <div className='md:mb-8'>
            <div className='flex justify-between items-center md:block'>
                <div className=' text-3xl font-bold flex items-center justify-between md:block'>
                    ${price} <span className='text-base ml-3 bg-paleOrange text-orange  px-2 rounded-md'>{discount}%</span>
                </div>
                <p className='font-bold text-gray-300 line-through'>${normalPrice}</p>
            </div>
        </div>
    )
}

export default Price