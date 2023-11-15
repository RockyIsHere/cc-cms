import React, { useContext, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import CreatorContext from '../../pages/context/CreatorContext';

const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Creator Type',
        selector: row => row.type,
    },
    {
        name: 'Likes',
        selector: row => row.likes,
    },
    {
        name: 'Contents',
        selector: row => row.stories,
    },
    {
        name: 'Social Handles',
        selector: row => row.socials,
    },
];


  const creatorList = [
    {
        id: 1,
        name: 'Rocky',
        type: 'Author',
        likes:12,
        stories:22,
        socials:'facebook',
    },
    {
        id: 2,
        name: 'Beetlejuice',
        type: 'Writer',
        likes:12,
        stories:22,
        socials:'x',
    },
  ]

const CreatorDataTable = () => {

    const {creators,addCreators,updatedRows,onSelectRows} = useContext(CreatorContext)


    const conditionalRowStyles = [
        {
        when: row => updatedRows.some((ele)=> ele.id === row.id),
        style: {
            backgroundColor: "rgba(160, 106, 248, 0.6)",
        }
        }
    ];

    useEffect(()=>{
       console.log('list', creatorList);
       loadCreators();
    },[],);

    const loadCreators= () =>{
        try {
            //TODO: call api that will return list of creators
           addCreators(creatorList);
        } catch (error) {
            console.log(error);
        }
    }

    const handleRowClick= (rows) =>{
        onSelectRows(rows)
    }
  return (
    <DataTable
            columns={columns}
            data={creators}
            pagination={true}
            selectableRowsComponent={Checkbox}
            expandableRows
            selectableRows={true}

            onSelectedRowsChange={({allSelected,selectedCount,selectedRows})=>{
                handleRowClick(selectedRows);
            }}
            sortServer={true}
            
            conditionalRowStyles={conditionalRowStyles}
            customStyles={
                {
                    headCells: {
                        style: {
                            background:'rgba(241, 233, 255, 0.47)',
                            fontWeight: '400',
                            fontSize: '16px',

                        },
                    },
                    
                    rows:{
                        style:{
                            fontWeight: '600',
                            fontSize: '14px'
                        }
                    },
                    selectableRowsComponent:{
                        backgroundColor: 'red',
                    }

                    
                    
                }
            }
        />
  )
}

export default CreatorDataTable