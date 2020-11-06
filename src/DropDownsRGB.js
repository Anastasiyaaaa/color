import React, {useContext}  from 'react'
import Context from './context'
import DropArrowRGBItem from './DropArrowRGBItem'
import Buttons from './Buttons'

export default function DropDowns() {
    const {currentColor, setTempColor, tempColor} = useContext(Context);
    if (!tempColor ) {
        setTempColor(currentColor);
    }
    // console.log(tempColor);

    const changeR = (v) => {
        setTempColor({ ...tempColor, rgb: [v, tempColor.rgb[1], tempColor.rgb[2]]});
        // console.log(v)
    };
    const changeG = (v) => {
        setTempColor({ ...tempColor, rgb: [tempColor.rgb[0], v, tempColor.rgb[2]]});
        // console.log(v)
    };
    const changeB = (v) => {
        setTempColor({ ...tempColor, rgb: [tempColor.rgb[0], tempColor.rgb[1], v]});
        // console.log(v)
    };

const changeMouse = (event) => {
    event.preventDefault();
    let shiftX = event.clientX - event.getBoundingClientRect().left;
};

    return (
        tempColor &&
        <div className='dropdown dropdown_rgb'>
            <ul>
                {/*{tempColor.rgb.map((item, index) => <DropArrowRGBItem key={index} item={item} index={index} />)}*/}
                <DropArrowRGBItem value={tempColor.rgb[0]} onMouse={changeMouse} onChange={changeR} text='R' i='1'/>
                <DropArrowRGBItem value={tempColor.rgb[1]}   onChange={changeG} text='G' i='2'/>
                <DropArrowRGBItem value={tempColor.rgb[2]}   onChange={changeB} text='B' i='3'/>
            </ul>
            <Buttons />
        </div>
    )
}
