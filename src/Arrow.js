import React, {useState, useEffect, useContext}  from 'react'
import Context from './context'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

export default function Arrow() {
    const {setShow, show} = useContext(Context);
    console.log(show + "     Arrow1" )
    return(
        <div onClick={() => {setShow(!show); console.log(show + "     Arrow2")}} className='arrow'> <FontAwesomeIcon  icon={faCaretDown} /></div>
    )
}