import React, {useState, useEffect, useContext}  from 'react'
import Context from './context'
export default function DropArrowItem({value, rgb}){
    const {rgbToHex} = useContext(Context);
    const {chooseArrowItem} = useContext(Context);
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    return(
        <li onClick={() => {chooseArrowItem(hex, rgb)}}><span>{value}</span>   <span>{hex}</span></li>
    )
}