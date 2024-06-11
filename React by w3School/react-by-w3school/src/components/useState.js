//Use state hook - allows to track the state of a component

import React, { useState } from "react";
import './styles.css';

function ChangeColor(){

    const [color, setColor] = useState("red");

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h1 className="text-white">Hover or Click over the text to change color!</h1> <br></br>
            <p
            style= {{cursor: "pointer", color: color, fontSize: "40px", textTransform: "uppercase"}}
            onClick={()=> color==="yellow"? setColor("red"): setColor("yellow")}
            onMouseOver={() => setColor("blue")}
            onMouseOut={() => setColor("red")}

            >{ color }</p>
        </div>
    );

}

export default ChangeColor;