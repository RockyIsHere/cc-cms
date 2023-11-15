import React from 'react'
import { Link } from 'react-router-dom'
import './Tab.css'


function Tab(params) {
  return (
    <><li className={params.isActive ? "active":''} onClick={params.onClick}>
        <Link to={params.to} className='tab'>
            {params.children}
            <p>{params.name}</p>
        </Link>
    </li>
    </>
  )
}

export default Tab;