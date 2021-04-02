import React from "react";
import "./Phonetics.css";

export default function Phonetic(props){
console.log(props.phonetic);
return (
    <div className="Phonetic">
         {props.phonetic.text}
         <a href = {props.phonetic.audio} target ="_blank">
            Listen ▶
        </a>
        
       
    </div>
);
}