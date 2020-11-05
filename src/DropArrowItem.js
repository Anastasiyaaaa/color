import React, {useContext}  from 'react'
import Context from './context'
export default function DropArrowItem(item){
    console.log(item);
    const {activeColor, currentColor} = useContext(Context);
    const backgroundColor = {backgroundColor: `rgb( ${item.rgb[0]},${item.rgb[1]},${item.rgb[2]})`};

    return(
        <li className={currentColor.value === item.value ? 'active' : ''}  onClick={() => {activeColor(item); }}><span>{item.value}</span>   <span style={backgroundColor} /></li>
    )
}