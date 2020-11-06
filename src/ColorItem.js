import React, {useContext}  from 'react'
import Context from './context'

export default function ColorItem(item){

    const {setActiveColor, currentColor, tempColor} = useContext(Context);
    const backgroundColor = {backgroundColor: `rgb( ${item.rgb[0]},${item.rgb[1]},${item.rgb[2]})`};

    return(
        <li className={currentColor.value === item.value && tempColor === null ? 'active' : ''}  onClick={() => setActiveColor(item)}>
            <span>{item.value}</span>
            <span style={backgroundColor} />
        </li>
    )
}