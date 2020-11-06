import React, {useContext, useEffect}  from 'react'
import Context from './context'

export default function Buttons() {
    const {showRGB, setShowRGB, setTempColor, currentColor, setCurrentColor, tempColor} = useContext(Context);
    const close = (e) => {
        e.preventDefault();
        setShowRGB(!showRGB);
        setTempColor(currentColor);
    };
    const apply = (e) => {
        e.preventDefault();
        setShowRGB(!showRGB);
        setCurrentColor(tempColor);
    };
    return(
        <div>
            <button onClick={(e) =>close(e)}>CANCEL</button> <button onClick={(e) =>apply(e)}>OK</button>
        </div>
    )
}