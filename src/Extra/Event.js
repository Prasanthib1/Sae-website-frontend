import React from "react";
import {Link} from 'react-router-dom';
import './Event.css';

import img1e from './images/Events/webinar-rspant.jpg'; import img2e from './images/Events/gate-webinar2.jpg';
import img3e from './images/Events/gate-webinar.png';
import mind_fiz from './images/Events/mind-fiz.jpg';
import keynote from './images/Events/keynote2.jpg';
import kasting from './images/Events/kasting.jpg';
import otto from './images/Events/otto-quiz.jpg';
import mat_sim from './images/Events/matlab-simulink.jpg';
import autocad from './images/Events/Autocad.jpg';
import cosmol from './images/Events/cosmol.png';
import career from './images/Events/Career-building.jpg';


//Item for carousel
const Itemc=({src,title,text,link,type})=>{
  return(
      <div style={{ width: '32rem' }} className="event-1">
          <div className="card-body">
        <img variant="top"
             src={src}
             height="200px"
             width="100%"/>
      <div className="card-info">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
      </div>
      </div>
      <Link to={link} ><button className="card-button1">Read more</button></Link>
      <button className="card-button2">REGISTER NOW</button>
      </div>
  )
}
const Item=({src,title,text,link,type})=>{
    return(
        <div style={{ width: '32rem' }} className="event-2">
        <div className="card-body">
          <img variant="top"
               src={src}
               height="200px"
               width="100%"/>
        <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        </div>
        </div>
        <Link to={link} ><button className="card-button1">Read more</button></Link>
        </div>
    )
  }

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Event() {
  return (
    <>
      <div className="events">
      <div className="events-heading">
          <h2>EVENTS</h2>
        </div>
        <div className="up-events-heading">
          <h3>Upcoming :</h3>
        </div>
        <div className="up-events">
        {/*<Carousel 
        breakPoints={breakPoints}
        renderArrow={({ type, onClick }) => {
          const pointer = type === consts.PREV ? <AiIcons.AiFillLeftCircle /> : <AiIcons.AiFillRightCircle/>
          return <p className="car-arrow" onClick={onClick}>{pointer}</p>}}>*/}
          <Itemc
          src={img1e}
          title="Magazine Release"
          text="Some text (2-3 lines)"
          link="/event9_21"/>
          <Itemc
          src={img1e}
          title="Website Release"
          text="Some text (2-3 lines)"
          link="/event10_21"/> 
        </div>
        <div className="pre-events-heading">
          <h3>Previous :</h3>
        </div>
        <p className="event-year">2020-2021:</p>
        <div className="previous-events">
        <Item
          src={img1e}
          title="Webinar By RS Pant"
          text="Some text (2-3 lines)"
          link="/event1_21"/>
        <Item
          src={img1e}
          title="MATLAB KEP"
          text="Some text (2-3 lines)"
          link="/event2_21"/>
        <Item
          src={img1e}
          title="Simulink KEP"
          text="Some text (2-3 lines)"
          link="/event3_21"/>
        <Item
          src={img1e}
          title="SolidWorks KEP"
          text="Some text (2-3 lines)"
          link="/event4_21"/>          
        <Item
          src={img1e}
          title="Adobe Photoshop KEP"
          text="Some text (2-3 lines)"
          link="/event5_21"/> 
        <Item
          src={cosmol}
          title="COSMOL KEP"
          text="Some text (2-3 lines)"
          link="/event6_21"/>
        <Item
          src={img1e}
          title="Internship Webinar"
          text="Some text (2-3 lines)"
          link="/event7_21"/>    
        <Item
          src={img2e}
          title="Interactive Session on GATE"
          text="Some text (2-3 lines)"
          link="/event8_21"/> 
                
        </div>
        <p className="event-year">2019-2020:</p>
        <div className="previous-events">
        <Item
          src={autocad}
          title="AutoCAD Workshop"
          text="Some text (2-3 lines)"
          link="/event1_20"/>
        <Item
          src={mind_fiz}
          title="The Mind Fiz"
          text="Some text (2-3 lines)"
          link="/event2_20"/>
        <Item
          src={kasting}
          title="Kasting"
          text="Some text (2-3 lines)"
          link="/event3_20"/>
        <Item
          src={mat_sim}
          title="MATLAB & Simulink Workshop"
          text="Some text (2-3 lines)"
          link="/event4_20"/>
                <Item
          src={otto}
          title="Otto Quiz"
          text="Some text (2-3 lines)"
          link="/event5_20"/>
        <Item
          src={keynote}
          title="Keynote Talk Series"
          text="Some text (2-3 lines)"
          link="/event6_20"/>
        <Item
          src={career}
          title="Career Building KEP"
          text="Some text (2-3 lines)"
          link="/event7_20"/>
        </div>
        </div>

    </>
  );
}

export default Event