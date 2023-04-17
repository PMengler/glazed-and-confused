import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="heropic">
            <div className="hero-left">
                <div className="hero-label">
                    <h1>Donut Panic!<br/>
                        There’s plenty for everyone.</h1>
                    <p>Let's find that perfect flavor.</p>
                    <p><Link to={'/flavors'}><button className="btn-lrg btn-black">START YOUR ORDER</button></Link></p>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-shape"></div>
            </div>
       </section> 
    )
}

export default Hero;