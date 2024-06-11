//useEffect hook - allows you to perform side effects in your component

import React, { useState, useEffect } from 'react';
import './styles.css';

function UpdateValues(){
    
    const [number, setNumber] = useState(0);
    const [double, setDouble] = useState(0);
    const [triple, setTriple] = useState(0);
    const [quadruple, setQuadruple] = useState(0);
    const [quintuple, setQuintuple] = useState(0);

    useEffect(()=>{
        setDouble( number*2);
        setTriple( number*3);
        setQuadruple( number*4);
        setQuintuple( number*5);
    }, [number]);

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <p style={{fontSize: "30px", textTransform: "uppercase", color: 'blue'}} className='text-3xl font-bold underline'>Use Effect Hook</p>
            <p> Number: {number} </p>

            <div style={{display:'flex', flexDirection: 'row', gap: '1rem'}}>
                <button
                onClick={() => setNumber((n) => n+1)}
                > + </button> 
                <button
                onClick={() => setNumber((n) => n-1)}
                > - </button>
            </div>

            <div style={{display:'flex', flexDirection: 'row', gap: '1rem'}}>
                <p>Double: {double} </p>
                <p>Triple: {triple} </p>
                <p>Quadruple: {quadruple} </p>
                <p>Quintuple: {quintuple} </p>
            </div>
        </div>
    );
}

export default UpdateValues;