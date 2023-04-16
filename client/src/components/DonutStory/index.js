import React from 'react';

const DonutStory = () => {
    return (
        <section id="ourstory" className="our-story">
            <div className="story-block">
                <h1><span>Our</span> Donut Story</h1>
                <p className="story-p">
                    Once upon a time, there were five developer students who were tired of
                    writing code all day long and decided to take on a new challenge: starting
                    their own donut company. They thought, "Why not mix technology with sugar and create the
                    ultimate donut experience?" <br/><br/>
                    After countless hours of research, trial, and error (and, of course, consuming lots of
                    donuts), the team finally came up with their perfect recipe. They created a delicious line up of amazingly unique donuts, and even developed a donut-shaped drone for deliveries. The team even joked that their office was now filled
                    with more sugar than lines of code!
                </p>
                <div className="story-swirl">
                    <img src={'/images/swirlBlue.svg'} alt="icon" />
                </div>
            </div>
        </section>
    )
}

export default DonutStory;