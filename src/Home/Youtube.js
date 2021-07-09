import React from 'react';
import './Youtube.css';
import * as AiIcons from 'react-icons/ai';
import ReactPlayer from 'react-player';

//https://youtu.be/_nBlN9yp9R8
//https://www.youtube.com/watch?v=_nBlN9yp9R8
export default function Youtube() {
    return (
            <div className="youtube">
            <div className="head">
              <h1>Youtube Channel</h1>
              <p>Visit Our Channel <AiIcons.AiOutlineArrowRight/> <AiIcons.AiFillYoutube className="hp_you" onClick={()=> window.open("https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw", "_blank")}/></p>
            </div>
              <ReactPlayer className="vid"
                height= '245px'
                width='392px'
                margin-left='45%'
                url='https://www.youtube.com/watch?v=TFW0CMEWVqI&t=1238s' />
            </div>
    )
}
