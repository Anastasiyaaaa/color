import React, {useContext, useRef}  from 'react'
import Context from './context'
import DropArrowItem from './DropArrowItem'


export default function DropDowns() {
    const {colors, showColorList, setShowColorList, useOutsideAlerter} = useContext(Context);
    const closeDropDown = useRef(null);
    useOutsideAlerter(closeDropDown, setShowColorList, showColorList);

    return (
        <div className='dropdown dropdown_arrow' ref={closeDropDown}>
            <ul>
                {colors.map((item, index) => <DropArrowItem key={index} {...item} /> )}
            </ul>
        </div>
    )
}
