import React from 'react'
import "./Testimonials.css"
import SectionTitle from '../SectionTitle/SectionTitle'
import { estate2, estate5 } from '../../assets'

const Testimonials = () => {
  return (
    <div className='Testimonial__wrapper '>
        <div className='app__wrapper'>
            <SectionTitle para="TESTIMONIALS" heading="Clients Testimonials" className="Testimonial__title"/>
            <div className='Testimonial__container'>
                <div className='row gx-5'>
                    <div className='col-lg-6'>
                    <div className='card bg-transparent border-0' style={{width: "37rem"}}>
                    <div className='d-flex align-items-center'>
                    <img src={estate2} width="220px" height="220"/>
                    <div className='ms-4'>
                            <h6 className='fw-bold fs-6 mb-3'>Tacha Akide</h6>
                            <p className='mb-5 fw-thin text-white-50 Testimonial__quote'>I am  very impressed with the customer service clientele. I would definitely
                            revisit and recommend it to my friends</p>
                            <p className='fw-thin text-white-50 Testimonial__quote'><i className="fas fa-circle text-white me-3"></i>Social Media Influencer</p>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className='col-lg-6'>
                    <div className='card bg-transparent border-0' style={{width: "37rem"}}>
                    <div className='d-flex align-items-center'>
                    <img src={estate5} width="220px" height="220"/>
                    <div className='ms-4'>
                            <h6 className='fw-bold fs-6 mb-3'>Tacha Akide</h6>
                            <p className='mb-5 fw-thin text-white-50 Testimonial__quote'>I am  very impressed with the customer service clientele. I would definitely
                            revisit and recommend it to my friends</p>
                            <p className='fw-thin text-white-50 Testimonial__quote'><i className="fas fa-circle text-white me-3"></i>Lifestyle Influencer</p>
                        </div>
                    </div>
                </div>
                    </div>

                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Testimonials