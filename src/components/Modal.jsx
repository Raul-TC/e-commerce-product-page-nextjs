import React, { useState } from 'react'
import Slider from './Slider'

const Modal = ({ modal, setModal, counterImages }) => {
    const [counterImagesTwo, setCounterImagesTwo] = useState(counterImages);

    return (
        <div className='hidden fixed md:flex bg-black w-full h-screen bottom-0 right-0 z-10 '>
            <div className='w-auto h-auto m-auto flex-col'>
                <span onClick={() => setModal(!modal)} className=' bg-closeModal hover:bg-closeModalHover bg-center bg-cover z-20 block w-7 h-7 cursor-pointer ml-auto mb-4 '></span>
                <Slider modal={modal} setModal={setModal} counterImages={counterImagesTwo} setCounterImages={setCounterImagesTwo} />
            </div>

        </div>
    )
}

export default Modal