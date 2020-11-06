import React, {useContext, useRef, useEffect} from 'react'
import Context from './context'
import RgbSlider from './RgbSlider'
import Buttons from './Buttons'

export default function RgbSlidersBlock() {
    const {currentColor, setTempColor, tempColor, setShowRGBRange, showRGBRange, useOutsideAlerter} = useContext(Context);
    const closeDropDown = useRef(null);
    useOutsideAlerter(closeDropDown,  setShowRGBRange, showRGBRange);

    useEffect(() => {
        if (!tempColor ) {
            setTempColor(currentColor);
        }
    }, [!tempColor]);

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
                <RgbSlider value={tempColor.rgb[0]} onChange={changeR} text='R' i='1'/>
                <RgbSlider value={tempColor.rgb[1]} onChange={changeG} text='G' i='2'/>
                <RgbSlider value={tempColor.rgb[2]} onChange={changeB} text='B' i='3'/>
            </ul>
            <Buttons />
        </div>
    )
}
