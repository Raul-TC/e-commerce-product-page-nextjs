import Image from 'next/image'
import React from 'react'
import avatar from '../assets/image-avatar.png'

const User = () => {
    return (
        <Image src={avatar} height={22} width={22} alt='avatar' className='md:w-10 ml-4 md:hover:border-2 rounded-full border-orange cursor-pointer' />
    )
}

export default User