import React from 'react';
import '../App.css';
import { Button } from './Buttonn';
import './HeroSection.css';

function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
                <h1>Welcome To Axcess Fund</h1>
                <br />
                <br />
                <p>Cannot afford to pay your essential bills? Get funded instantly </p>
                <br />
                <p> And pay us back in your own term </p>
                <br />
                <br />
                <p>No hidden fees, high-interests or bogus fees - simple as that </p>
                <br />
                <br />
                <p>A new way of axcessing fund, for your needs, not wants</p>
                <br />
                <br />
                <br />
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

        </>
    )
}

export default HeroSection;


