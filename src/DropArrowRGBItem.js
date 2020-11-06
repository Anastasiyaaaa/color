import React, {useState, useContext}  from 'react'
import Context from './context'

export default function DropArrowRGBItem(props){
    const {tempColor} = useContext(Context);

    const [rangeVal, setRangeVal] = useState(props.value);
    setRangeVal(tempColor.rgb)

    const change = (v, i) => {
        setRangeVal(+v);
        props.onChange(+v, i);
    };

    return(
        <li>
            <span>{props.letter}</span>
            <input type="range" onChange={(e) => change(e.target.value, props.index)} value={rangeVal} min="0" max="255" className={`range range${props.index}`} />
        </li>
    )
}

// export default function DropArrowRGBItem(props){
//
//     const [rangeVal, setRangeVal] = useState(props.value);
//
//
//     const change = (v) => {
//         setRangeVal(+v);
//         props.onChange(+v);
//     };
//
//
//     return(
//         <li>
//         <span>{props.text}</span>
//         <input type="range" onChange={(e) => change(e.target.value)} value={rangeVal} min="0" max="255"  className={`range range${props.i}`} />
//         </li>
//     )
// }