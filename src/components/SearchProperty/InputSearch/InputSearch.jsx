import React from 'react'
import "./InputSearch.css"
// import PaidIcon from '@mui/icons-material/Paid';


const InputSearch = (props) => {


 
  return (
    <div className='Input__container'>
       <i className={props.className}></i>
      <input  className='input-box'  type="text" placeholder={props.placeholder}/>
      
    </div>
  )
}

export default InputSearch