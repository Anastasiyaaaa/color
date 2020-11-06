import React, {useEffect, useState} from 'react'
import Context from './context'
import Color from './Color';
import Arrow from './Arrow';
import ColorItemsBlock from './ColorItemsBlock';
import RgbSlidersBlock from './RgbSlidersBlock';



export default function ColorPicker() {

    const colors = [
        {value: 'red', rgb: [255,7,3]},
        {value: 'yellow', rgb: [255,255,0]},
        {value: 'green', rgb: [54,160,58]},
        {value: 'blue', rgb: [27,28,255]}
    ];

    const [showColorList, setShowColorList] = useState(false);
    const [showRGBRange, setShowRGBRange] = useState(false);
    const [currentColor, setCurrentColor] = useState(colors[0]);
    const [tempColor, setTempColor] = useState(null);

    const rgbToHex = (arr) =>{
        const r = arr[0];
        const g = arr[1];
        const b = arr[2];
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    };

    const useOutsideAlerter = (ref, set, curr) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    set(!curr);
                    setTempColor(null);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const setActiveColor = (item) => {
       setCurrentColor(item);
       setTempColor(null);
       setShowColorList(!showColorList);
    };

    return (
        <Context.Provider value={{setActiveColor, colors,setCurrentColor, currentColor, setShowColorList, showColorList, tempColor, setTempColor, showRGBRange, setShowRGBRange, useOutsideAlerter}}>
            <div className="colorPicker-wrapper">
                <div className="colorPicker">
                    <div className="hex">
                        <input disabled value={tempColor !== null ? rgbToHex(tempColor.rgb) : rgbToHex(currentColor.rgb)}/>
                    </div>
                    <Color />
                    <Arrow />
                </div>
                {showColorList && <ColorItemsBlock />}
                {showRGBRange && <RgbSlidersBlock />}
            </div>
        </Context.Provider>
    );
}
