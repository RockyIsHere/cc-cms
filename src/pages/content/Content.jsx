import React, { useState } from 'react'
import './Content.css';
import { AppButton } from '../../widgets/button/AppButton';
import { ReactComponent as FilterLogo }  from "../../assets/icons/filter.svg";
import { ReactComponent as EditLogo }  from "../../assets/icons/edit.svg";
import CreatorDataTable from '../../widgets/table/CreatorDataTable';
import CreatorContext from '../context/CreatorContext';
// import CreateIcon from '../../widgets/button/CreateIcon';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import CreateIcon from '../../widgets/button/CreateIcon.tsx';

const CustomDialog =()=>{
  return (
    <>
    <Dialog>

    </Dialog>
    </>
  )
}

const Content = () => {
  const {updatedRows,removeCreators,onSelectRows} = React.useContext(CreatorContext)


  return (

        <div className='content-page'>
            <div className="content-header">
                  <div className="header-left">
                    <AppButton name={'Filter'} icon={<FilterLogo/>}/>
                  </div>
              <div className="header-right">
                  <AppButton name={'Mass Update'} icon={<EditLogo/>}/>
                  <AppButton name={'Delete'} active={updatedRows.length>0} icon={<FilterLogo/>} onClick={()=>{
                    removeCreators(updatedRows);
                    onSelectRows([]);
                  }}/>
                
              </div>
            </div>
            <div className="content-body">
               <CreatorDataTable />
               <CreateIcon onClick={()=>{
                console.log('first', "click")
               }}></CreateIcon>
            </div>

          </div>

  )
}

export default Content