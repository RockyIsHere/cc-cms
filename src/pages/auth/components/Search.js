import { useState } from "react";
import "./Search.css"

function Search(params) {
    const [items , setItem] = useState(["addsdas","adds"]);
    const [newItem,setNewItem] = useState("");
    const handleSubmit = ()=>{
        console.log(newItem);
        setItem([...items, newItem]);
        console.log('first', items.length);
        addNewItem("");
    };

    const addNewItem = (newItem)=>{
        setNewItem(newItem);
    }

    return (<>
    <div className="search-page">
        <div className="search-container">
        <form onSubmit={handleSubmit} className="search-container">
            <input type="name" value={newItem} className="search-container-field" placeholder="Enter text" onChange={(e)=>addNewItem(e.target.value) } >
            </input>
            <div>
                <button className="submit">Submit</button>
            </div>
        </form>

        </div>
        <div className="submitted-box">
        {items.map((element,index)=>{
            <div className="card">
                return (<p className="card-text" key={index}>{element}</p>);
            </div>
        })}

        </div>

    </div>
        </>);
}

export default Search;