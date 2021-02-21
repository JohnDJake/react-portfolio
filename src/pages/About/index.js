import React from 'react';
import "./styles.css";

export default function About() {
    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <h1>Hi, I'm John Jacobson, and I'm a software developer</h1>
                </div>
            </div>
            <div className="row">
                <div className="col s6 offset-s3 m4 xl3 offset-xl1"><img src="assets/images/headshot.jpg" alt="Picture of John Jacobson" className="responsive-img" id="headshot" /></div>
                <div className="col s12 m8 xl6 offset-xl1 blue-grey darken-4" id="about-text">
                    <p>As a full stack web developer I create clean, dynamic websites, with responsive layouts designed to look good on any size screen.</p>
                    <p>My dad taught me BASIC on his Apple ][+ when I was eight years old. Amazed by what I could do on a then 27 year old computer, I wanted to keep learning, and since then I've picked up a few newer technologies.</p>
                    <p>I bring a passion for problem solving to my software develpment, and always strive for the most elegant and efficient algorithm to solve any problem.</p>
                </div>
            </div>
        </div>
    )
}
