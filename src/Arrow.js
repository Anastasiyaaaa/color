import React, {useContext}  from 'react'
import Context from './context'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

export default function Arrow() {
    const {setShowColorList, showColorList} = useContext(Context);
    return(
        <div onClick={() => setShowColorList(!showColorList)} className='arrow'> <FontAwesomeIcon  icon={faCaretDown} /></div>
    )
}