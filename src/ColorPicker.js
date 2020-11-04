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
    const [value, setValue] = useState([colors[0].value]);
    const [show, setShow] = useState(false);
    const [color, setColor] = useState([colors[0].rgb]);
    const rgbToHex = (r, g, b) =>{
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    };

    useEffect(() =>{
        console.log(show)
    },[show]);

    const chooseArrowItem = (hex, rgb) => { setValue(hex); setColor(rgb)};
    return (
        <Context.Provider value={{chooseArrowItem, colors, color, rgbToHex, setShow, show}}>
            <div className="colorPicker-wrapper">
                <div className="colorPicker">
                    <div className="hex"><input value={value}/></div>
                    <Color />
                    <Arrow />
                </div>
                {show ?  <DropDowns /> : ""}
                <DropDownsRGB />
            </div>
        </Context.Provider>
    );
}
