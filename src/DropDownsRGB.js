import React, {useContext}  from 'react'
import Context from './context'
import DropArrowRGBItem from './DropArrowRGBItem'
import Buttons from './Buttons'

export default function DropDowns() {
    const {currentColor, setTempColor, tempColor} = useContext(Context);
    if (!tempColor ) {
        setTempColor(currentColor);
    }
    console.log(currentColor.rgb);

    const changeR = (v) => {
        setTempColor({ ...tempColor, rgb: [v, tempColor.rgb[1], tempColor.rgb[2]]});
        console.log(v)
    };
    const changeG = (v) => {
        setTempColor({ ...tempColor, rgb: [tempColor.rgb[0], v, tempColor.rgb[2]]});
        console.log(v)
    };
    const changeB = (v) => {
        setTempColor({ ...tempColor, rgb: [tempColor.rgb[0], tempColor.rgb[1], v]});
        console.log(v)
    };



    return (
        tempColor &&
        <div className='dropdown dropdown_rgb'>
            <ul>
                {/*{tempColor.rgb.map((item, index) => <DropArrowRGBItem key={index} item={item} index={index} />)}*/}
                <DropArrowRGBItem value={tempColor.rgb[0]} onChange={changeR} text='R' />
                <DropArrowRGBItem value={tempColor.rgb[1]} onChange={changeG} text='G' />
                <DropArrowRGBItem value={tempColor.rgb[2]} onChange={changeB} text='B' />
            </ul>
            <Buttons />
        </div>
    )
}
