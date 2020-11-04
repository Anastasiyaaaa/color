import React, {useState, useEffect, useContext}  from 'react'
import Context from './context'
import DropArrowItem from './DropArrowItem'

export default function DropDowns() {
    const {colors} = useContext(Context);

    return (
        <div className='dropdown ddRgb'>
            <ul>
                {colors.map((item, index) => <DropArrowItem key={index} {...item} />)}
            </ul>
        </div>
    )
}
