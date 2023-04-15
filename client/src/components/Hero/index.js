import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="heropic">
            <div className="hero-left">
                <div className="hero-label">
                    <h1>Donut Panic!<br/>
                        There’s plenty for everyone.</h1>
                    <p>Let's find that perfect flavor.</p>
                    <p><button className="btn-lrg btn-black">START YOUR ORDER</button></p>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-shape"></div>
            </div>
       </section> 
    )
}

export default Hero;