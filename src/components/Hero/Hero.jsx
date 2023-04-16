import React from 'react'
import Header from '../Header/Header'
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<= 768 ? true : false;
  return (
   <div className="hero" id='home'>
    <div className="blur hero-blur"></div>
    <div className="left-h">
        <Header/>
{/* the best ad */}
        <div className="the-best-ad">
            <motion.div
            initial={{left: mobile? "100px": '238px'}}
            whileInView={{left: '8px'}}
            transition= {{...transition, type: 'tween'}}
            ></motion.div>
            <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
            <div>
                <span className='stroke-text'> Shape </span>
                <span> Your </span>
                </div>
                <div>
                    <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                        We help you to shape and build your ideal body 
                        </span>
                    </div>
        </div>
        {/* figures */}
        <div className="figures">
            <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix="+"/></span>
            <span>expert coaches</span>
            </div>
            <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix="+"/></span>
            <span>members joined</span>
            </div>
            <div>
             <span><NumberCounter end={50} start={0} delay='4' preFix="+"/></span>
            <span>fitness programs</span>
            </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
        </div>
    </div>

    {/* RIGHT SIDE HERO SECTION */}
    <div className="right-h">
        <button className='btn'>Join Now</button>

        <div className="heart-rate">
            
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
        </div>

        {/* Hero images of Hero section */}
        <img src={hero_image} alt="hero_image" className='hero-image' />
        <motion.img src={hero_image_back} alt="hero_image" className='hero-image-back'
         initial={{opacity: 0, x: 100}}
         transition= {{...transition, type: 'tween', duration: 0.8}}
         whileInView={{opacity: 1, x: 0}} />

        {/* calories */}
        <div className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span> 220 kcal</span>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Hero