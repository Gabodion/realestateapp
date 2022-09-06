import React from 'react';
import "./Services.css"
import { estate2 } from '../../assets';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button'

const Services = () => {
  return (
    <div className='app__wrapper Services__wrapper row'>
        <div className='col-lg-6 mt-5'>
            <div className='card' style={{width: "30rem"}}>
                <div className='row'>
                    <div className='col-7'>
                    <div className='card-one px-4 py-5'>
                        <h5>Villa on Victoria Island,<br/>Lagos</h5>
                        <div className='d-flex align-items-center Property__body--features py-4'>
                            <p><i class="fas fa-car-alt"></i> <span>4 bed</span></p>
                            <p><i class="fas fa-chart-bar"></i> <span>10 x 10 m</span></p>
                            <p><i class="fas fa-chart-line"></i> <span>1600 m</span></p>
                        </div>  
                        <hr/>
                        <div className='Services__agent px-4 py-3'>
                            <img className='rounded-circle' src={estate2} width="50" height="40"/>  
                        </div> 
                    </div>
                    </div>
                    <div className='col-5'>
                    <img src={estate2} className=" card-two"/>
                    </div>
                </div>
                
                
            </div>
        </div>
        <div className='col-lg-5 ms-5'>
            <SectionTitle para="OUR SERVICES" heading="Your Comfort is Our Priority" className="Services__title"/>
            <p className='py-3'>We can help you find the perfect one! We'll show you a variety of homes in your area and help you choose
             the best one for your needs.</p>
             <div className='d-flex align-items-center mb-4'>
                <p className='Services__list fw-bold'><i class="fas fa-circle text-success fs-6 me-3 "></i>Wider Audience</p>
                <p className='Services__list fw-bold'><i class="fas fa-circle text-success fs-6 me-3 "></i>Free Marketing</p>
             </div>
             <div className='d-flex align-items-center mb-4'>
                <p className='Services__list fw-bold'><i class="fas fa-circle text-success fs-6 me-3 "></i>No Valuation</p>
                <p className='Services__list fw-bold'><i class="fas fa-circle text-success fs-6 me-3 ms-4"></i>Managed Viewings</p>
             </div>
             <Button text="See More"/>
        </div>
        
    </div>
  )
}

export default Services