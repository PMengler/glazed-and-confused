import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import DonutList from '../components/DonutList';
import '../styles/flavors.css';
import '../styles/app.css';

const Flavors = () => {
    return (
        <div>
            <DonutList />
            <Footer />
        </div>
        
    )
}

export default Flavors;