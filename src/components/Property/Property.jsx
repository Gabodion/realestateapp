import React from 'react'
import "./Property.css"
import {estate1} from "../../assets/index.js"
import Button from '../Button'
// import Avatar from '@mui/material/Avatar';
import { propertyData } from './data'

const Property = () => {
    return (
        <>
         <div className='row'>
                        
         { 
            
            propertyData.map(property => {
                 return(
                    <div className='col-lg-4 Property__wrapper'>
                <div className="card " style={{width: "24rem"}}>
                    <img src={property.img} className="card-img-top" alt=""/>
                    <div className="card-body Property__body">
                        <div className='Property__body--top px-4'>
                            <h5><i class="fas fa-map-marker-alt"></i> {property.location}</h5>
                            <div className='d-flex justify-content-between align-items-center Property__body--features mt-3'>
                                <p><i class="fas fa-car-alt"></i> <span>{property.bed} bed</span></p>
                                <p><i class="fas fa-chart-bar"></i> <span>{property.size} m</span></p>
                                <p><i class="fas fa-chart-line"></i> <span>{property.area}m</span></p>
                            </div>   
                        </div>
                        <hr className='mt-0'/>
                        <div className='Property__agent px-4'>
                            <img src={property.img}/>
                            <span className='px-4'>{property.agent}</span>
                        </div>
                    </div>
                    <Button className="px-3 py-2 Property__btn" text="For Sale"/>
                </div>
                </div>
            )}
           )}           
                       
        </div>
          
           </>
    )
}

export default Property