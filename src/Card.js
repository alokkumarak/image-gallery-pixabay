import React from 'react'
import "./Card.css"

function Card({image}) {
    const tags=image.tags.split(",");
    return (
        <div className="card">
            <img src={image.webformatURL} alt="" />
           <div className="title">
              <h3>Image by :</h3><p>&nbsp;{image.user}</p>
           </div>
           <div className="download">
               <h4>Views :</h4> <p>&nbsp;{image.views}</p>
            </div>
            <div className="download">
               <h4>Downloads :</h4> <p>&nbsp;{image.downloads}</p>
            </div>
           <div className="likes">
             <h4>Likes :</h4><p>&nbsp;{image.likes}</p>
           </div>
           <div className="likes">
             <h4>Comments :</h4><p>&nbsp;{image.comments}</p>
           </div>
           <div className="tags">
               {tags.map((tag,index)=>(
                   
                   <b className="tag" key={image.index}>#{tag}  </b>
                  
                
               ))}
                
           </div>
            
        </div>
    )
}

export default Card
