import React, {useContext, useRef} from 'react'
import Context from './context'
import DropArrowRGBItem from './DropArrowRGBItem'
import Buttons from './Buttons'

export default function DropDowns() {
    const {currentColor, setTempColor, tempColor, setShowRGBRange, showRGBRange, useOutsideAlerter} = useContext(Context);
    const closeDropDown = useRef(null);
    useOutsideAlerter(closeDropDown,  setShowRGBRange, showRGBRange);

    if (!tempColor ) {
        setTempColor(currentColor);
    }
    const changeR = (v) => {
        setTempColor({ ...tempColor, rgb: [v, tempColor.rgb[1], tempColor.rgb[2]]});
    };
    const changeG = (v) => {
        setTempColor({...tempColor, rgb: [tempColor.rgb[0], v, tempColor.rgb[2]]});
    };
    const changeB = (v) => {
        setTempColor({ ...tempColor, rgb: [tempColor.rgb[0], tempColor.rgb[1], v]});
    };

    return (
        tempColor &&
        <div className='dropdown dropdown_rgb' ref={closeDropDown}>
            <ul>
                <DropArrowRGBItem value={tempColor.rgb[0]} onChange={changeR} text='R' i='1'/>
                <DropArrowRGBItem value={tempColor.rgb[1]}   onChange={changeG} text='G' i='2'/>
                <DropArrowRGBItem value={tempColor.rgb[2]}   onChange={changeB} text='B' i='3'/>
            </ul>
            <Buttons />
        </div>
    )
}
