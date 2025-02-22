
import bearGift from '../img/bearGift.png'
import WenGabe from '../img/WenGabe.jpeg'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const TestPage = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/question');
    }



    return ( 
        <div className="mainframe">
            <h1>I have a question to ask you!</h1>
            <div className="img">
                <img src={bearGift} alt='bearGift' style={{width: '200px', height: 'auto'}}/>
            </div>
            <div className="buttons" style={{}}>
                <button className='Yes' onClick={handleButtonClick}>Take it</button>
            </div>
            <p className='copyright'>© From whoever send you this.</p>
        </div>
        
     );
}
 
export default TestPage;