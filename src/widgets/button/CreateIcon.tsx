import React from 'react'
import './CreateIcon.css'
// import {AddIcon} from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import Dialog, { DialogProps  } from '@mui/material/Dialog';
import { useState } from 'react';
import { Box, DialogContent, DialogActions,Button,DialogTitle, SxProps, TextField, InputBase, styled, alpha } from '@mui/material';
import { Modal, ModalDialog } from '@mui/joy';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CreateIcon = ({onClick}) => {

  const [open,setOpen] = useState(false)

  const handleDialogOpen =()=>{
    setOpen(true);
  }
  const handleDialogClose =()=>{
    setOpen(false);
  }
  let sx :SxProps ={
    maxWidth: '100%',
    
  }
  let titleStyle: SxProps = {
    backgroundColor: 'rgba(160, 106, 248, 1)',
    padding: '8px 10px',
    color: 'white',
    fontSize: '18px',
    borderTopLeftRadius:'6px',
    borderTopRightRadius:'6px',
    fontWeight: '400'
  }

  return (
    <>
      <div className="create" onClick={()=>{
        handleDialogOpen();
        onClick();
      }}>
        <Add className='add-icon' fontSize='large' />
      </div>
      <Modal  open={open} onClose={handleDialogClose}  color='white'>

            <ModalDialog sx={{
              margin:'0px',
              padding: '0px'
            }}>
            <DialogTitle sx={titleStyle}>
              Dialog Title
            </DialogTitle>
                <DialogContent>
                  {/* <TextField variant='outlined' label='Creator Name' sx={{width:'200px'}}/> */}
                  <BootstrapInput defaultValue="First Name" id="bootstrap-input" />
                  <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
                </DialogContent>
                <DialogActions>
            </DialogActions>     
              </ModalDialog>     
      </Modal>
    </>

  )
}

export default CreateIcon