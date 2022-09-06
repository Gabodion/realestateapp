import React from 'react'
import Button from '../Button'

import InputSearch from './InputSearch/InputSearch'
import "./SearchProperty.css"


const SearchProperty = () => {
  return (
    <div className='Search__wrapper'>
        <h2>Search for available properties</h2>
        <div className='Search__input'>
            <InputSearch className="fas fa-map-marker-alt input-icon" placeholder="Location" />
            <InputSearch className="fas fa-bookmark input-icon" placeholder="Property Type" />
            <InputSearch className="fas fa-dollar-sign input-icon" placeholder="Budget" />
            <Button text="Search Now"/>
        </div>
    
    </div>
  )
}

export default SearchProperty