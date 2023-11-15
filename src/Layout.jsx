
// import React from 'react';
// import "./Layout.css"
// import { ReactComponent as Logo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/logos/Logo.svg";
// import { ReactComponent as ContentLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/content.svg";

// import { ReactComponent as CreatorLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/creator.svg";
// import { ReactComponent as CategoriesLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/categories.svg";
// import { ReactComponent as LogoutLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/settings.svg";
// import { ReactComponent as ProfileLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/profile.svg";
// import { ReactComponent as SettingsLogo }  from "/Users/rockykarmakar/projects/cc-cms/src/assets/icons/logout.svg";
// import { Outlet } from 'react-router-dom';
// import Tab from './global/components/Tab';
// import { useState } from 'react';


// function Layout(params) {
//     const[activeTab,setActiveTab]= useState(0);

//     const handleTab =(newTab)=>{
//         console.log(newTab)
//         setActiveTab(newTab);
//     }

//     return <>
//     <div className="body">
//         <nav className="sidebar">
//             <div className='logo-card'>
//                 <Logo className='app-logo' />
//             </div>
//             <ul className='sidebar-menu top'>
//                 <Tab to="/content" name="Content" isActive={activeTab===0}  onClick={()=>{handleTab(0)}}><ContentLogo className='icon'/></Tab>
//                 <Tab to="/creator" name="Creator" isActive={activeTab===1}  onClick={()=>{handleTab(1)}}><CreatorLogo className='icon'/></Tab>
//                 <Tab to="/categories" name="Categories" isActive={activeTab===2} onClick={()=>{handleTab(2)}}><CategoriesLogo className='icon'/></Tab>
//             </ul>
//             <div className="info">
//                 <ul className='sidebar-menu'>
//                     <Tab to="#" name="Setting"   ><SettingsLogo className='icon'/></Tab>
//                     <Tab to="#" name="Profile"  ><ProfileLogo className='icon'/></Tab>
//                     <Tab to="#" name="Logout" ><LogoutLogo className='icon'/></Tab>
//                 </ul>
//             </div>
//         </nav>
//         <Outlet className="content"/>
//     </div>
//     </>
// }

// export default Layout;