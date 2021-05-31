import React, { useState,useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Card from "./Card";

function App() {
 const [images,setImages]=useState([]);
 const [loading,setLoading]=useState(true);
 const [term,setTerm]=useState("");


 useEffect(() => {
     fetch(`https://pixabay.com/api/?key=21871176-6b12a118a240135d8d0f42b15&q=${term}&image_type=photo&pretty=true`)
     .then(res=>res.json())
     .then(data=>{
       setImages(data.hits);
       setLoading(false);
     })
     .catch(err=>console.log(err));
 }, [term]);

  return (
    <div className="app">
        <SearchBar searchText={(text)=>setTerm(text)} />
           {!loading && images.length ===0 && <h1 className="text">Object Not found</h1>}
        {loading?<h1 className="text">Loading........</h1>:<div className="cardDisplay">
          {images.map((image)=>(
            <Card key={image.id} image={image}/>
          ))}
            
        </div> }
        
        
    </div>
  );
}

export default App;
