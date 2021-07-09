import React,{ Component, useState} from "react";
import {Router, Switch, Link, BrowserRouter} from "react-router-dom";
import './Event.css';
import {event_20} from './event_20';
import {event_21} from './event_21';
import {event_upcoming} from './event_upcoming';

//Item for carousel
const Itemc=({src,title,text,link})=>{
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
  const Item=({src,title,text,link})=>{
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
          <Link to ={link} ><button className="card-button1">Read more</button></Link>
          </div>
      )
    }
  
  /*const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];*/ /*for carousel*/

class EventMain extends React.Component{
    constructor(props) {
        super(props);
  
        this.state = {
          value:'none',
        }
        {/*this.handleChange=this.handleChange(this);*/}
    }

    handleChange=(event)=>{
        this.setState({value: event.target.value});                                                  
    }

    renderElement(){
      if (this.state.value === 'none')
      return(
        <div className="events">
          <div className="up-events-heading"> <h3>Upcoming :</h3> </div>
          <div className="up-events">
            {event_upcoming.map(item => (
            <Itemc 
             src={item.src}
             title={item.title}
             text={item.text}
             link={item.link} /> ))};
           </div>
          <div className="pre-events-heading"> <h3>Previous :</h3> </div>
         <p className="event-year">2020-2021:</p>
         <div className="previous-events"> 
           {event_21.map(item => (<Item {... item} />))};
          </div>
         <p className="event-year">2019-2020:</p>
         <div className="previous-events">
         {event_20.map(item => (<Item {... item} /> ))};
          </div> 
        </div>)

      else return(
        <div >
          <div className="events">
          <div className="up-events-heading"> <h3>Upcoming :</h3> </div>
          <div className="up-events">
            {event_upcoming.filter(items => items.type === this.state.value).map(item => (<Itemc {... item} /> ))}; 
           </div>
          <div className="pre-events-heading"> <h3>Previous :</h3> </div>
         <p className="event-year">2020-2021:</p>
         <div className="previous-events"> 
           {event_21.filter(items => items.type === this.state.value).map(item => (<Item {... item} />))}; 
          </div>
         <p className="event-year">2019-2020:</p>
         <div className="previous-events">
         {event_20.filter(items => items.type === this.state.value).map(item => (<Item {... item} /> ))};
          </div> 
        </div>
        </div>)          
   }
    render(){
        return(
            <div className="search"> 
                <div className="events-heading">
                  <h2>Events</h2>
                </div>
                
                <select id="type" onChange={this.handleChange} value={this.state.value} class="event-dropdown">
                    <option value="none">None</option>
                    <option value="only sae">only sae</option>
                    <option value="everyone" >everyone</option>
                </select>
                <span  className="event-dropdown-text">Type : </span>   
                   {this.renderElement()};
                </div>

        );
    };
}


export default EventMain