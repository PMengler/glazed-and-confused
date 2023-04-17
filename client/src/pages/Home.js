import React from 'react';

import Hero from '../components/Hero/index';
import WeeklyFlavor from '../components/WeeklyFlavor';
import DonutStory from '../components/DonutStory';
import ContactUs from '../components/ContactUs';

import '../styles/app.css';
import '../styles/flavors.css';
import '../styles/footer.css';
import '../styles/header.css';
import '../styles/home.css';
import '../styles/normalize.css';

const Home = () => {
    return (
        <div>
            <Hero />
            <WeeklyFlavor />
            <DonutStory />
            <ContactUs />
        </div>
    )
}

export default Home;