import React, {useContext}  from 'react'
import Context from './context'
import DropArrowItem from './DropArrowItem'

export default function DropDowns() {
    const {colors} = useContext(Context);
    const {showRGB, setShowRGB} = useContext(Context);
    return (
        <div className='dropdown dropdown_arrow'>
            <ul>
                {colors.map((item, index) => <DropArrowItem key={index} {...item} /> )}
            </ul>
        </div>
    )
}
