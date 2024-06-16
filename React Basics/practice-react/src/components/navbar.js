import './styles.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function Menu(){
    function Homepage(){
        return(
            <p>This is the homepage</p>
        );
    }
    function AboutMe(){
        return(
            <p>I am about section</p>
        );
    }
    function Contact(){
        return(
            <p>+977 9800000000 is my number</p>
        );
    }

    return(
        <div>
            <p style={{fontSize: "30px", textTransform: "uppercase", color: 'blue'}} className='text-3xl font-bold flex items-center justify-center'>Routes</p><br />
            
            <nav className='text-sm flex gap-4 text-blue-700 mb-3'>
                <Link to = "/">Homepage</Link>
                <Link to = "/about-me">About Me</Link>
                <Link to = "/contact">Contact</Link>
            </nav>

            <Routes>    
                <Route path="/" element={< Homepage />} />
                <Route path="/about-me" element={< AboutMe />} />
                <Route path="/contact" element={< Contact />} />
            </Routes>
        </div>

    );
}

export default Menu;