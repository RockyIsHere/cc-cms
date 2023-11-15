import React from 'react';
import "./Home.css";

function Home(params) {
    return <>
        <div className="column2">
            <div className="header">
            </div>
            <div className="content">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,].map((element)=>{
                        return <p>This is line number of - {element}</p>;
                    })
                }
            </div>
        </div>
    </>
}

export default Home;