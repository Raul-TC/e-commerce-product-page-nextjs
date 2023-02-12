import Image from 'next/image'
import React, { useState } from 'react'
import hamburger from '../assets/icon-menu.svg'
import close_hamburguer from '../assets/icon-close-burger.svg'
import logo from '../assets/logo.svg'
import Container from './Container'
import Cart from './Cart'
import User from './User'
const Header = ({ quantity, menuCart, setMenuCart }) => {
    const [menuHamburguer, setMenuHamburguer] = useState(true)
    const sections = ['Collections', 'Men', 'Woman', 'About', 'Contact']
    return (
        <Container>
            <header className='flex justify-between items-center h-16 md:h-24 w-full border-b-2 border-gray-200 md:mb-8'>
                <div className='flex items-center justify-between w-auto md:w-[550px] h-16'>
                    <Image className={` md:hidden ${menuHamburguer ? '' : 'hidden'} transition-all ease-in-out duration-1000 m-0 p-0 mr-4`} onClick={() => {
                        setMenuCart(false)
                        setMenuHamburguer(!menuHamburguer)
                    }}
                        src={menuHamburguer ? hamburger : close_hamburguer}
                        height={2}
                        width={16}
                        alt={menuHamburguer ? 'hamburger_menu' : 'close_hamburger_menu'} />
                    <Image
                        src={logo}
                        height={115}
                        width={115}
                        alt='logo'
                        className='md:w-32 h-5' />
                    <ol className='md:flex gap-6 items-center justify-between hidden m-0 p-0 h-24'>
                        {sections.map(sect => <li className='md:hover:border-b-4 border-orange cursor-pointer h-24 leading-[96px]' key={sect}>{sect}</li>)}
                    </ol>
                    <div className={`${menuHamburguer ? '-translate-x-full' : 'translate-x-0'} transition-all ease-linear duration-300 md:hidden fixed w-full top-0 left-0 bottom-0 h-screen bg-black z-40`}>
                        <ol className={`${menuHamburguer ? '-translate-x-full' : 'translate-x-0'} transition-all ease-linear duration-300 w-1/2 bg-white h-screen pt-6 font-bold pl-4 `}>
                            <Image onClick={() => {
                                setMenuCart(false)
                                setMenuHamburguer(!menuHamburguer)
                            }}
                                src={menuHamburguer ? hamburger : close_hamburguer}
                                height={2}
                                width={16}
                                alt={menuHamburguer ? 'hamburger_menu' : 'close_hamburger_menu'} className='mb-12' />
                            {sections.map(sect => <li className='md:hover:border-b-4 border-orange cursor-pointer' key={sect}>{sect}</li>)}
                        </ol>
                    </div>
                </div>
                <div className='flex justify-between w-auto items-center'>
                    <Cart quantity={quantity} menuCart={menuCart} setMenuCart={setMenuCart} />
                    <User />
                </div>
            </header>
        </Container>
    )
}

export default Header