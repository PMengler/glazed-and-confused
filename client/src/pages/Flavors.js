import React from 'react';

import Header from '../components/Header';
import DonutItem from '../components/DonutItem';
import '../styles/flavors.css';
import '../styles/app.css';

const Flavors = () => {
    return (
        <div>
            <Header />
            <DonutItem 
                _id='1'
                image='gc-black-white.jpg'
                name='Black & White'
            />
        </div>
        
    )
}

export default Flavors;