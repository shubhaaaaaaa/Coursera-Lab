import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import ChangeColor from "./components/useState";
import UpdateValues from "./components/useEffect";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <UpdateValues />
    <hr></hr> <br></br><br></br><br></br>
    <ChangeColor />
    </div>

);

reportWebVitals();
