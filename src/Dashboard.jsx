import React from 'react'
import { ReactComponent as Logo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/logos/Logo.svg";
import { ReactComponent as ContentLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/content.svg";
import { ReactComponent as CreatorLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/creator.svg";
import { ReactComponent as CategoriesLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/categories.svg";
import { ReactComponent as LogoutLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/settings.svg";
import { ReactComponent as ProfileLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/profile.svg";
import { ReactComponent as SettingsLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/logout.svg";
import "./Dashboard.css"
import { useState } from 'react';
import {Link, Outlet } from 'react-router-dom';
import CreatorContextProvider from './pages/context/CreatorContextProvider';
const tabs = [
    {
        "name": "Content",
        "route": "/content",
        "icon":<ContentLogo className='tab-icon'/>
    },
    {
        "name": "Creator",
        "route": "/creator",
        "icon":<CreatorLogo  className='tab-icon' />
    },
    {
        "name": "Categories",
        "route": "/categories",
        "icon":<CategoriesLogo className='tab-icon'/>
    },
];

const bottomTabs = [
    {
        "name": "Settings",
        "route": "/settings",
        "icon":<SettingsLogo className='tab-icon'/>
    },
    {
        "name": "Profile",
        "route": "/profile",
        "icon":<ProfileLogo className='tab-icon'/>
    },
    {
        "name": "Logout",
        "route": "/logout",
        "icon":<LogoutLogo className='tab-icon'/>
    },
];

const Dashboard = () => {
const [activeTab,setActiveTab] = useState(0);
const handleTab=(newTab)=>{
    setActiveTab(newTab);
}
  return (
    <div className="dashboard">
        <div className='sidebar'>
            <div className="top-section">
                <Logo className="logo-card"/>
            </div>
            <div className="middle-section">
                {
                    tabs.map((element,index)=>{
                        return (
                        <Link a to={element.route} className={index===activeTab ?'tab-card enbled' :'tab-card'}onClick={()=>{
                            handleTab(index)
                        }}>
                            {element.icon}
                            {element.name}
                        </Link>   
                        );
                    })
                }
            </div>
            <div className="bottom-section">
                {
                    bottomTabs.map((element)=>{
                        return (
                            <Link className="tab-card">
                                {element.icon}
                                {element.name}
                            </Link>
                        );
                    })
                }
            </div>
        </div>
        <CreatorContextProvider>
            <Outlet/>

        </CreatorContextProvider>
    </div>
  )
}

export default Dashboard