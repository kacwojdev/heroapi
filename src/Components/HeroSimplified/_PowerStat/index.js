import React from 'react'
import './style.css';

const PowerStat = ({icon, value}) => {
  return (
    <div>
        <img src={icon} alt={value} />
        <p>{value}</p>
    </div>
  )
}

export default PowerStat