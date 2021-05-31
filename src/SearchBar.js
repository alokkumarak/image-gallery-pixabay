import React, { useState } from 'react'
import "./SearchBar.css";


function SearchBar({searchText}) {
    const [text,setText]=useState('');

    const onSubmit=(e)=>{
          e.preventDefault();

          searchText(text);
    }

    return (
        <div className="searchbar">
            <form onSubmit={onSubmit}>
              <input onChange={e=>setText(e.target.value)} type="text" placeholder="search here..." />
              <button type="submit">search</button>
            </form>
        </div>
    )
}

export default SearchBar
