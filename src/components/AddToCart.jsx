import React from 'react'

const AddToCart = ({ counter, setQuantity, setMenuCart }) => {
    return (
        <button
            onClick={() => {
                setQuantity(counter)
                setMenuCart(true)
            }} className={`${counter === 0 ? 'bg-gray-600' : 'bg-orange'} transition-colors duration-500 w-full md:w-[70%] rounded-xl py-4 cursor-pointer mt-2 font-bold text-gray-50 flex justify-center items-center`} disabled={counter === 0}
        >
            <span className='bg-iconCartButton h-6 w-6 bg-no-repeat bg-contain mr-2' />
            <p>Add to Cart</p>

        </button>)
}

export default AddToCart