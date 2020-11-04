import React, {useState, useEffect, useContext}  from 'react'
import Context from "./context";

export default function Color() {
    const {color} = useContext(Context);
    const backgroundColor = {backgroundColor: `rgb( ${color.join(',')})`};
    return (
            <div className='color'><span style={backgroundColor} /></div>
    );
}