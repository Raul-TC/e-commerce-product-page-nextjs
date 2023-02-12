import React from 'react'

const CompanyName = ({ name }) => {
    return (
        <h1 className='text-orange font-bold text-sm uppercase tracking-wider md:mb-2'>{name}</h1>
    )
}

export default CompanyName