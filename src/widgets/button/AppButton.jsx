import React from 'react'
import './AppButton.css';

export const AppButton = ({icon,name,onClick,active}) => {


  return (
    <div className={active ? "AppButton active": "AppButton"} onClick={onClick}>
        {icon}
        {name}
    </div>
  )
}
