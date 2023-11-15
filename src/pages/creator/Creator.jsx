import React from 'react'
import './Creator.css'
import { AppButton } from '../../widgets/button/AppButton';
import { ReactComponent as FilterLogo }  from "../../assets/icons/filter.svg";
import { ReactComponent as EditLogo }  from "../../assets/icons/edit.svg";

const Creator = () => {
  return (
    <div className="creator">
      <div className="creator-header">
        top
      </div>
          {/* <div className="header">
                    <div className="left-section">
                        <AppButton name={'Filter'} icon={ <FilterLogo className='icon'/>} />
                    </div>
                    <div className="right-section">
                      <div>
                      <AppButton name={'Mass Update'} icon={ <EditLogo className='icon'/> } />

                      </div>
                      <div>
                      <AppButton name={'Delete'} icon={ <EditLogo className='icon'/> } />
                        
                      </div>
                    </div>
          </div> */}
      <div className="creator-body">
        {
          [1,2,3,4,5,6,7,8,9,10,11,12].map((element)=>{
            return (<div className="box-1">sadsds</div>);
          })
        }
      </div>
    </div>
  )
}

export default Creator