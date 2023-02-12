import Image from 'next/image'
import React from 'react'
import img01 from '../assets/image-product-1.jpg'
import img02 from '../assets/image-product-2.jpg'
import img03 from '../assets/image-product-3.jpg'
import img04 from '../assets/image-product-4.jpg'

import thumb01 from '../assets/image-product-1-thumbnail.jpg'
import thumb02 from '../assets/image-product-2-thumbnail.jpg'
import thumb03 from '../assets/image-product-3-thumbnail.jpg'
import thumb04 from '../assets/image-product-4-thumbnail.jpg'

const Slider = ({ modal, setModal, counterImages, setCounterImages }) => {
    const images = [img01, img02, img03, img04]
    const thumbs = [thumb01, thumb02, thumb03, thumb04]

    const handleCounter = (action) => {
        if (action === 'next') {
            if (counterImages >= images.length - 1) {
                setCounterImages(0)
            }
        }

        if (action === 'previous') {
            if (counterImages <= 0) {
                setCounterImages(images.length - 1)
            }
        }
    }

    return (
        <div className='flex flex-col items-center justify-between h-auto w-full md:w-auto'>
            <div className={`${modal ? 'w-[50%] md:w-[35rem]' : 'h-auto w-full md:w-auto'}  relative m-auto h-auto `}>
                <div
                    onClick={() => {
                        setCounterImages(counterImages - 1)
                        handleCounter('previous')
                    }} className={`bg-white ${modal ? 'md:flex  z-20' : 'md:hidden'} bg-cover h-10 w-10 absolute rounded-full flex items-center justify-center top-1/2 -mt-4 ml-6 cursor-pointer`}
                >
                    <span className='bg-previous  hover:bg-previousHover h-10 w-10 absolute bg-no-repeat bg-center mr-1' />
                </div>
                <Image onClick={() => { modal ? null : setModal(true) }} className='h-full w-full md:w- object-cover md:rounded-xl md:cursor-pointer' src={images[counterImages]} alt='' />
                <div
                    onClick={() => {
                        setCounterImages(counterImages + 1)
                        handleCounter('next')
                    }} className={`bg-white ${modal ? 'md:flex  z-20' : 'md:hidden'}  h-10 w-10 absolute rounded-full flex items-center justify-center top-1/2 right-0 -mt-4 mr-6 cursor-pointer`}
                >
                    <span className='bg-next h-7 w-7 hover:bg-nextHover  absolute bg-no-repeat bg-center ml-1 ' />
                </div>

            </div>

            <div className={`hidden md:flex ${modal ? 'md:w-[35rem]' : 'h-auto w-full md:w-auto'} m-auto mt-8 justify-between`}>
                {thumbs.map((thumb, index) =>
                    <div key={index + thumb} onClick={() => {
                        setCounterImages(index)
                        console.info(index)
                    }} className={`${counterImages === index ? 'border-2 border-orange' : ''}  block w-[23%] rounded-xl cursor-pointer relative`}>
                        <Image src={thumbs[index]} alt={`image_shoes_${index}`} className='rounded-xl' />
                        <div className={`${counterImages === index ? 'bg-[#e6e3e370]' : ''} absolute rounded-xl left-0 right-0 bottom-0 top-0 hover:bg-[#e6e3e370]`} />
                    </div>)}
            </div>
        </div>
    )
}

export default Slider