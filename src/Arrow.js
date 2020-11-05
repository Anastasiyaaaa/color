import React, {useContext}  from 'react'
import Context from './context'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

export default function Arrow() {
    const {setShow, show} = useContext(Context);
    return(
        <div onClick={() => {setShow(!show); }} className='arrow'> <FontAwesomeIcon  icon={faCaretDown} /></div>
    )
}