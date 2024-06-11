import React from 'react';
import './components/styles.css';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import ChangeColor from "./components/useState";
import UpdateValues from "./components/useEffect";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    <div className='h-screen flex justify-center items-center flex-col'>
        <h1>useState</h1>
        <div className=' flex flex-row w-fit h-4/5 '>
            <span className='flex items-end p-5 bg-red'>Previous</span>
            <div className='bg-black rounded-lg p-10'>
                <ChangeColor/>
            </div>
            <span className='flex items-end p-5 bg-red'>Next</span>
        </div>
    </div>
</div>

);

reportWebVitals();
