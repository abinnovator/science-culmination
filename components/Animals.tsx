import React from 'react'
import { ExpandableCardDemo } from './ui/ExpandableCards'
import { ExpandableCardDemo_reptiles } from './ui/ExpandableCards_reptiles'
import {ExpandableCardDemo_mammals} from './ui/ExpandableCards_mammals'


const Birds = ({type}: {type:'Bird'| 'Mammal' | 'Reptile' | 'Key'}) => {
    return (
        <div className='py-20 pb-20'>
            <h1 className='heading'>
            <span className='text-purple' id={`${type}s`}>{type}s</span>
            </h1>
            { type !== 'Key' ? type=== 'Bird' ? <ExpandableCardDemo /> : type==='Mammal' ? <ExpandableCardDemo_mammals /> :  <ExpandableCardDemo_reptiles /> : null }
        </div>
    )
}

export default Birds