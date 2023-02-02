import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='w-[90%] m-auto flex justify-between items-center'>{children}</div>
    )
}

export default Container