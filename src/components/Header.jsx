import Image from 'next/image'
import React, { useState } from 'react'
import hamburger from '../assets/icon-menu.svg'
import close_hamburguer from '../assets/icon-close.svg'
import avatar from '../assets/image-avatar.png'
import cart from '../assets/icon-cart.svg'
import logo from '../assets/logo.svg'
import Container from './Container'
const Header = () => {
    const [menuHamburguer, setMenuHamburguer] = useState(false)

    const sections = ['Collections', 'Men', 'Woman', 'About', 'Contact']
    return (
        <header className='flex justify-between items-center h-16'>
            <Container>

                <div className='flex items-center justify-between w-36 h-16'>
                    <Image className='md:hidden transition-all ease-in-out duration-1000 m-0 p-0' onClick={() => setMenuHamburguer(!menuHamburguer)} src={menuHamburguer ? hamburger : close_hamburguer} height={2} width={16} alt={menuHamburguer ? 'hamburger_menu' : 'close_hamburger_menu'} />
                    {/* <h1 className='font-bold'>Sneakers</h1> */}
                    <Image src={logo} height={120} width={120} alt='logo' />
                    <ol className='md:flex ml-4 gap-6 items-center justify-between hidden'>
                        {sections.map(sect => <li className='md:hover:border-b-2 border-b-red-400 cursor-pointer h-16 leading-[4rem]' key={sect}>{sect}</li>)}
                    </ol>
                </div>
                <div className='flex justify-between w-14 items-center'>
                    <div>
                        <Image src={cart} height={20} width={20} alt='cart' />
                        <span></span>
                    </div>
                    <Image src={avatar} height={22} width={22} alt='avatar' />
                </div>
            </Container>
        </header>
    )
}

export default Header