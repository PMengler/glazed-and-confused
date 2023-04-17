import React from 'react';
import rasDonut from '../../assets/new-ras.jpg';
import { Link } from 'react-router-dom';

const WeeklyFlavor = () => {
    return (
        <section className="new-flavor">
            <h1><span>New!</span> Flavor of the Week!</h1>
            <div className="new-flavor-box">
                <img className="new-flavor-pic" src={rasDonut} />
                <div className="new-flavor-info">
                    <h2>Raspberry Rush</h2> 
                        <p className="new-flavor-p">Get your taste buds in a frenzy with our new <br/>
                            Raspberry Rush donut - it's like a party in your <br/>
                            mouth, and everyone's invited!
                        </p>
                        <Link to={'/flavors'}> <button className="btn-lrg btn-white">SEE MORE</button></Link>
                </div>
            </div>
        </section>
    )
}

export default WeeklyFlavor;