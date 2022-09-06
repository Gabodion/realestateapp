import React from 'react'
import { estate2 } from '../../assets'
import Button from '../Button'
import SectionTitle from '../SectionTitle/SectionTitle'
import "./Blog.css"
import {blogData }from "./data";

const Blog = () => {
  return (
    <div className='app__wrapper Blog__wrapper'>
        <SectionTitle para="OUR BLOG" heading="Lastest Information" className="Blog__title"/>
        <p className='Blog__title--para '>Stay up to date with all the Information about our listed properties</p>
        <div className='Blog__container'>
        <div className='row'>
                  
        {
            blogData.map(data => {
                return(
                    <div className='card Blog__content col-lg-4' style={{width: "24rem"}}>
                        <img src={data.img} className='card-img-top'/>
                        <p className='fw-thin mt-4 mb-2  Blog__date'><i className="fas fa-circle text-primary me-3"></i>{data.date}</p>
                        <hr className='w-50 mt-0 mb-2'/>
                        <p className='fw-bold Blog__news'>{data.news}</p>
                        <Button text="See More" className="Blog__btn fw-bold"/>
                    </div>
                )
            })
        }
        </div>
            
        </div>
    </div>
  )
}

export default Blog