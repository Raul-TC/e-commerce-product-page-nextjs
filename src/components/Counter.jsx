import React from 'react'

const Counter = ({ counter, setCounter }) => {
    return (
        <div className='w-full md:w-32  flex items-center justify-between mt-2 bg-slate-100 p-4 rounded-lg'>
            <button className={`${counter === 0 ? 'bg-minusDisabled' : 'bg-minus'} h-4 w-4 bg-no-repeat bg-contain bg-center`} onClick={() => setCounter(counter - 1)} disabled={counter === 0} />
            <span className='font-bold transition-colors duration-500'>{counter}</span>
            <button className='bg-plus  h-4 w-4 bg-no-repeat bg-contain bg-center' onClick={() => setCounter(counter + 1)} />
        </div>
    )
}

export default Counter