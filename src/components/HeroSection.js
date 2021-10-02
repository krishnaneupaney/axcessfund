import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Welcome To Axcess Fund</h1>
            <p>A New Way Of Borrowing Money</p>
            <p>For your Needs, Not wants</p>
            <p>No hidden fees, high-interests or bogus fees</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    But How This Works?
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    WATCH OUR INTRO <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;


