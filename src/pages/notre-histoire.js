import React from 'react'
import Navbar from '../components/Header/Navbar'
import voley1 from '../assets/images/voley1.jpeg'
import  '../styles/notre-histoire.css'
const Histoire = () => {
    return (
        <div>
            <Navbar/>
            <h1>Notre histoire</h1>   
            <img className="vloey1" src={voley1}/>
        </div>
    );
};

export default Histoire;