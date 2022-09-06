import React from 'react'
import "./Hero.css"
import Navbar from '../Navbar/Navbar'
import Button from '../Button'
import Number from '../Number'
import heroImg from "../../assets/hero1.png"
import SearchProperty from '../SearchProperty/SearchProperty'


const Hero = () => {
    return (
        <header className='app__wrapper Hero__container'>
            <Navbar />
            <div className='row'>
                <div className='col-lg-5'>
                    <h1 className='Hero__heading'>Find your Future <br /> Dream Home</h1>
                    <p className='Hero__heading--par'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</p>
                    <Button text="Get Started"/>
                    <div className='d-flex Hero__num'>
                        <Number num="1000" name="Listed Properties"/>
                        <Number num="5200" name="Happy Customers"/>
                        <Number num="200" name="Awards"/>
                    </div>
               
                </div>
                <div className='col-lg-7'>
                    <img src={heroImg} width="110%"/>
                </div>
            </div>
            

        </header>
    )
}

export default Hero