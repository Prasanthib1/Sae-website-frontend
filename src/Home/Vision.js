import React, {useEffect,  useState} from 'react';
import './Vision.css';
import AOS from 'aos';
import ScrollText from 'react-scroll-text';
import TextScroller from "./textScroll";

export default function Vision() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

    return (
        <div className="vision_news">
        <TextScroller className="text-scroll"
         path1="/project" text1="&#10031; Project Expo 2020 - 2021 &nbsp;"
         path2="/event9_21" text2="&nbsp; &#10031; Magazine Release"/>
         <div className="vision">
            <h1 className="vision_head" data-aos="fade-in">Our Vision</h1>
            <div className="vision_text" data-aos="fade-in">
             <p>Working with strong commitment for technology-
                based solutions and driving the society with new
                ideas and innovations</p>
            </div>
        </div>
        {/*<div className="news">
          <h1 className="news_head" data-aos="fade-in">News Feed</h1>
          <div className="news-text">
            <h4 data-aos="fade-right">&#10031; Project Expo 2020 - 2021</h4>
            <h4 data-aos="fade-right">&#10031; Magazine Release</h4>
    </div>*/}
          </div>

    )
}

