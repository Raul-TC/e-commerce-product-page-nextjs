import React from 'react'

const MenuCart = ({ menuCart, counter, setCounter, setQuantity, setMenuCart }) => {
    return (
        <div className={` ${menuCart ? 'translate-y-20 md:translate-y-0 ' : '-translate-y-[200%]'} md:absolute  transition-all ease-linear duration-700 fixed z-10 bg-lightGrayishBlue w-[95%] h-auto top-0 left-0 right-0 m-auto  rounded-lg flex flex-col items-center justify-center md:w-96 md:right-0 md:top-0 md:left-auto md:-mr-20`}>
            <h2 className='py-5 pl-6 w-full border-b-2 font-bold'>Cart</h2>
            <div className={`${counter === 0 && 'flex items-center justify-center'} h-44 bg-inherit w-[90%]`}>
                {counter === 0
                    ? <p>Your cart is empty.</p>
                    : (
                        <>
                            <div className='flex justify-between items-center mt-3 mb-4'>
                                <span className='bg-product w-[54px] h-[54px] block bg-cover rounded-lg' />
                                <div>
                                    <p>Autum Limited Edition...</p>
                                    <p>$125.00 x {counter}
                                        <span className='font-bold'>{` $${125 * counter}.00`}</span>
                                    </p>
                                </div>
                                <span
                                    onClick={() => {
                                        setQuantity(0)
                                        setCounter(0)
                                        setMenuCart(false)
                                    }} className='bg-delete w-5 h-5 bg-no-repeat bg-contain cursor-pointer'
                                />
                            </div>
                            <button className='bg-orange rounded-xl w-full py-4 cursor-pointer mt-2 font-bold text-lightGrayishBlue'>Checkout</button>
                        </>
                    )}
            </div>
        </div>
    )
}

export default MenuCart