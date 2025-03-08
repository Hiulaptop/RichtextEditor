"use client";
import React, { useEffect, useRef, useState } from "react";
import { PhotoshopPicker, SketchPicker } from 'react-color';


export default function ColorPicker() {
    const [color, setColor] = useState("#fff");
    return (
        // <div ref={ref} className={`relative w-10 h-10`}>
        //     {/* <button
        //         onClick={() => setIsOpen(!isOpen)}
        //         className={`w-10 h-10 rounded-xl ${isOpen && "bg-gray-300"} hover:bg-gray-300 disabled:cursor-not-allowed`}
        //     >
        //         {Icon}
        //     </button>
        //     {true &&
        //         <SketchPicker
        //             color={color}
        //             onChangeComplete={(color) => onChange(color.hex)}
        //             className="absolute top-8 z-10 select-none"
        //         />
        //     } */}
        // </div>
        <SketchPicker color={color} onChange={(c)=> setColor(c.hex)
        }/>
    );
}
