import React from 'react';

import Footer from '../components/Footer';
import DonutList from '../components/DonutList';
import Popup from '../components/Popup';
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