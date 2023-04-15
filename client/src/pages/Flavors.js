import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/DonutList'
import '../styles/flavors.css';
import '../styles/app.css';
import DonutList from '../components/DonutList';

const Flavors = () => {
    return (
        <div>
            <Header />
            <DonutList/>
            <Footer />
        </div>
        
    )
}

export default Flavors;