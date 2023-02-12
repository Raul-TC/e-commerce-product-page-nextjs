import Image from 'next/image'
import React from 'react'
import cart from '../assets/icon-cart.svg'


const Cart = ({ quantity, menuCart, setMenuCart }) => {

    return (
        <div className='relative z-0'>
            <Image onClick={() => setMenuCart(!menuCart)} src={cart} height={20} width={20} alt='cart' className=' relative md:w-6 cursor-pointer' />
            <span className='absolute block -top-3 -right-2 bg-orange text-white w-4 text-center rounded-full text-sm'>{quantity}</span>
        </div>
    )
}

export default Cart