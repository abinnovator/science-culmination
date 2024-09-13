import React from 'react'
import { ExpandableCardDemo } from './ui/ExpandableCards'

const Birds = ({type}: {type:'Bird'| 'Mammal' | 'Reptile'}) => {
    return (
        <div className='py-20'>
            <h1 className='heading'>
            <span className='text-purple'>{type}s</span>
            </h1>
            <ExpandableCardDemo />
        </div>
    )
}

export default Birds