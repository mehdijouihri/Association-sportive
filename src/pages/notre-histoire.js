import React from 'react';
import Navbar from '../components/Header/Navbar';
import voley1 from '../assets/image/voley1.jpeg'
const Histoire = () => {
    return (
        <div>
            <Navbar/>
            <h1>Notre histoire</h1>   
            <div classVoley="photo" src={voley1} alt="image not found"/>
        </div>
    );
};

export default Histoire;