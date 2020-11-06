import React, {useState}  from 'react'

export default function RgbSlider(props){

    const [rangeVal, setRangeVal] = useState(props.value);
    const change = (v) => {
        setRangeVal(+v);
        props.onChange(+v);
    };

    return(
        <li>
            <span>{props.text}</span>
            <input type="range" onChange={(e) => change(e.target.value)} value={rangeVal} min="0" max="255"  className={`range range${props.i}`} />
        </li>
    )
}