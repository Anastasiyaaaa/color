import React, {useContext}  from 'react'
import Context from './context'

export default function Buttons() {
    const {showRGBRange, setShowRGBRange, setTempColor, setCurrentColor, tempColor} = useContext(Context);
    const close = (e) => {
        e.preventDefault();
        setShowRGBRange(!showRGBRange);
        setTempColor(null);
    };
    const apply = (e) => {
        e.preventDefault();
        setShowRGBRange(!showRGBRange);
        setCurrentColor(tempColor);
    };
    return(
        <div className='button-block'>
            <button onClick={(e) => close(e)}>CANCEL</button>
            <button onClick={(e) => apply(e)}>OK</button>
        </div>
    )
}