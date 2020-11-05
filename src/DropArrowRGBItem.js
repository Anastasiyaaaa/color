import React, {useState, useContext}  from 'react'
import Context from './context'
// export default function DropArrowRGBItem(props){
//     const {tempColor} = useContext(Context);
//
// console.log(tempColor);
//     let text;
//     let rangeValue;
//     let backgroundColor;
//     const [rangeVal, setRangeVal] = useState('');
//     setRangeVal(tempColor.rgb)
//     switch (props.index) {
//         case 0:
//             text = "R" ;
//             rangeValue = rangeVal[0];
//             backgroundColor = {backgroundColor: `rgb(  ${tempColor.rgb[0]}, 0, 0)`};
//             break;
//         case 1:
//             text = "G" ;
//             rangeValue = rangeVal[1];
//             backgroundColor = {backgroundColor: `rgb( 0, ${tempColor.rgb[1]}, 0)`};
//             break;
//         default:
//             text = "B" ;
//             rangeValue = rangeVal[2];
//             backgroundColor = {backgroundColor: `rgb( 0, 0, ${tempColor.rgb[2]})`};
//     }
//     const change = (v) => {
//         console.log(v)
//     };
//
//     return(
//         <li><span>{text}</span> <input type="range" style={backgroundColor} onChange={(e) => change(e.target.value) } value={rangeVal} min="0" max="255"  className="range" id="myRange" /> </li>
//     )
// }

export default function DropArrowRGBItem(props){
    const {tempColor} = useContext(Context);

console.log(tempColor);

    let rangeValue;
    let backgroundColor;
    const [rangeVal, setRangeVal] = useState(props.value);


    const change = (v) => {
        setRangeVal(v);
        props.onChange(v);
        console.log(v)
    };

    return(
        <li><span>{props.text}</span> <input type="range" style={backgroundColor} onChange={(e) => change(e.target.value) } value={rangeVal} min="0" max="255"  className="range" id="myRange" /> </li>
    )
}