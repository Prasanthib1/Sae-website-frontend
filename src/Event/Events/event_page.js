import './event_page.css';

function EventTemplate({title, img ,desc, date, speakers, platform, type}) {
    return(
        <div className="event_page my-5">
            <h1 className="ep-title text-center col-12 my-5">{title}</h1>
            <img className="ep-img text-center center-block mx-auto" src={img}/>
            <div className="ep-about text-center">About the event</div>
            <div className="ep-desc text-center">{desc}</div>
            <div className="ep-info">
             <div className="ep-info-pt my-5">
                 <div className="ep-info-h"><b>Date</b></div>
                 <div className="ep-info-i">{date}</div>
              </div>
              <div className="ep-info-pt my-5">
                 <div className="ep-info-h"><b class="speaker">Speaker(s)/Host</b></div>
                 <div className="ep-info-i">{speakers}</div>
              </div>
              <div className="ep-info-pt my-5">
                 <div className="ep-info-h"><b>Platform</b></div>
                 <div className="ep-info-i">{platform}</div>
              </div>
              <div className="ep-info-pt my-5">
                 <div className="ep-info-h"><b>Type</b></div>
                 <div className="ep-info-i">{type}</div>
              </div>
            </div>
        </div>
    )

}

export default EventTemplate