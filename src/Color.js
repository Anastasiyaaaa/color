import React, {useContext}  from 'react'
import Context from "./context";

export default function Color() {
    const {currentColor, tempColor, showRGB, setShowRGB} = useContext(Context);

    const backgroundColor = {backgroundColor: `rgb( ${ !tempColor ? currentColor.rgb.join(',') : tempColor.rgb.join(',')})`};

    return (
            <div className='color' onClick={() => {setShowRGB(!showRGB); }} ><span  style={backgroundColor}/></div>
    );
}