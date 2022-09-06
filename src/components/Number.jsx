import React from 'react'

const Number = (props) => {

    const paraStyle = { 
        fontSize:"1.5rem",
        fontWeight: "600",
        color: "#000",
        lineHeight: "1"
    }
    const spanStyle = {
        fontSize: "0.9rem",
        color: "grey",
    }

  return (
    <div>
        <p style={paraStyle}>{props.num} + <br/> <span style={spanStyle}>{props.name}</span></p>
    </div>
  )
}

export default Number