import React from 'react'
import Property from './Property'
import "./Properties.css"



const Properties = () => {
    
const PropertyContainer = {
    backgroundColor: "#141E27", 
}
const PropertyContent = {
    position: "relative",
    bottom: "13rem",
}

const PropertyPara = {
    color: "#000",
    fontWeight: "600"
}
  return (
    <div style={PropertyContainer} className='app__wrapper'>
        <div style={PropertyContent}>
            <div className='d-flex justify-content-between align-items-center mb-3 pe-5'>
                <h2>Our Latest Properties</h2>
                <p style={PropertyPara}>Explore <i class="ms-3 fas fa-arrow-right"></i></p>
            </div>
            <div>
                <Property/>
            </div>
        </div>      
        <div className='d-flex justify-content-between align-items-center'>
            <h5 style={{color: "#fff", lineHeight: "1"}}>Catty Gates <br/><span style={{color:"grey", fontSize: "0.9rem"}}>Founder</span></h5>
            <p style={{width: "28rem", color:"#fff", fontSize: "0.9rem"}}>Our business foundation is based off our clients needs, and also we're glad that we could share luxury 
            and comfy experiences with our clients.</p>
        </div>
        
    </div>
  )
}

export default Properties