import React, { useState } from "react";
import CreatorContext from "./CreatorContext";


const CreatorContextProvider = ({children})=>{
    const [updatedRows,setSelectedRows] = useState([]);
    const [creators,setCreators] = useState([]);

    const addCreators = (rows)=>{
        setCreators(rows);   
    }

    const removeCreators = (rows)=>{
        let list = [];
        // for (let index = 0; index < rows.length; index++) {
        //     const element = rows[index];

        //     if(creators.some(ele=> ele.id === element.id)){
        //         list.push(element);
        //     }
        // }
        list = creators.filter(element=> !rows.some(ele=> ele.id === element.id))
        setCreators(list);
    }

    const onSelectRows = (rows)=>{
        setSelectedRows([...rows]);
    }

    const onRemoveRows = (rows)=>{
        let list = [];
        rows.forEach( ele =>{
           list = creators.filter(row => row.id !== ele.id);
        });
        setCreators([...list]);
        console.log('updatedRows', updatedRows);
    }

    return (
        <CreatorContext.Provider value={{creators,addCreators, updatedRows,removeCreators, onSelectRows,onRemoveRows}}>
            {children}
        </CreatorContext.Provider>
    )
}


export default CreatorContextProvider