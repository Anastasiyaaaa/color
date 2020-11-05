import React, {useState, useEffect, useContext}  from 'react'
import Context from './context'
import Color from './Color';
import Arrow from './Arrow';
import DropDowns from './DropDowns';
import DropDownsRGB from './DropDownsRGB';



export default function ColorPicker() {

    const colors = [
        {value: 'red', rgb: [255,7,3]},
        {value: 'yellow', rgb: [255,255,0]},
        {value: 'green', rgb: [54,160,58]},
        {value: 'blue', rgb: [27,28,255]}
    ];

    const [show, setShow] = useState(false);
    const [currentColor, setCurrentColor] = useState(colors[0]);
    const [tempColor, setTempColor] = useState(null);
    const rgbToHex = (arr) =>{
        const r = arr[0];
        const g = arr[1];
        const b = arr[2];
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    };

    // const [value, setValue] = useState(rgbToHex(color[0].rgb));
    useEffect(() =>{
        // setActive(document.querySelector('.active').id);

        // setShow(!show);
    },[currentColor]);
    // rgbToHex(color.rgb)
    const activeColor = (item) => { setCurrentColor(item); setShow(!show);};
    return (
        <Context.Provider value={{activeColor, colors, currentColor, setShow, show, tempColor, setTempColor}}>
            <div className="colorPicker-wrapper">
                <div className="colorPicker">
                    <div className="hex"><input disabled value={rgbToHex(currentColor.rgb)}/></div>
                    <Color />
                    <Arrow />
                </div>
                {show ?  <DropDowns /> : ''}
                <DropDownsRGB />
            </div>
        </Context.Provider>
    );
}
