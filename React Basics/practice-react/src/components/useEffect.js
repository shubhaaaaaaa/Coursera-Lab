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
                <p style={{fontSize: "30px", textTransform: "uppercase", color: 'blue'}} className='text-3xl font-bold'>Use Effect Hook</p><br />
                <div style={{display:'flex', flexDirection: 'row', gap: '1rem'}} className='text-lg'>
                    <button className='bg-blue-200 rounded px-2 '
                    onClick={() => setNumber((n) => Math.max(0,n-1))}
                    > - </button>
                    <span>{number}</span>
                    <button className='bg-blue-200 rounded px-2 '   
                    onClick={() => setNumber((n) => Math.min(10,n+1))}
                    > + </button> 
                </div>

                <div style={{display:'flex', flexDirection: 'column', gap: '1rem'}}>
                    <br />
                    <p>Double: &nbsp; &nbsp; {double} </p> 
                    <p>Triple: &nbsp; &nbsp; {triple} </p>
                    <p>Quadruple: &nbsp; &nbsp; {quadruple} </p>
                    <p>Quintuple: &nbsp; &nbsp; {quintuple} </p>
                </div>
            </div>
        );
    }

    export { UpdateValues};
