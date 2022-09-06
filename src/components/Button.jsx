import React from 'react';

const Button = (props) => {
    
    const style = {
        padding: "12px 36px",
    }
  return (
    <div>
        <button style={style} className={`btn btn-lng btn-dark ${props.className}`}>{props.text}</button>
    </div>
  )
}

export default Button