//magazines
import React from "react";
import pdf from '../images/magazine.pdf';
import './magazine.css';


function Magazine(){
    return(
    <div className="magazine">
        <div className="mag-heading">
            <h1>Magazine</h1>
        </div>
        <div className="magazine-section">   
          <iframe src={pdf+'#toolbar=0'} width="100%" height="800px"></ iframe>
        </div>
    </div>        
    )
 
}

export default Magazine