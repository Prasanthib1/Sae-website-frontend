import React, {useEffect,useRef} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from 'react-icons/fa';
import AOS from 'aos';
import Video from "../images/video-edited.mp4";

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

export default function Header() {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);

    return (
        <div className="header">
            <div className="header-top">
            <Link to="/">
            <video className="header-video"
        autostart 
        autoPlay 
        muted
        src={Video} 
        type="video/mp4" 
        width="200px"
        height="auto"
        />
                </Link>
                <div className="hp_icons" data-aos="fade-in">
                  <FaIcons.FaFacebookF className="icon_hp_f" onClick={()=> window.open("https://www.facebook.com/saenitk/", "_blank")}/>
                  <FaIcons.FaYoutube className="icon_hp_yt"  onClick={()=> window.open("https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw", "_blank")}/>
                  <FaIcons.FaLinkedin className="icon_hp_li"  onClick={()=> window.open("https://www.linkedin.com/company/saenitk/?originalSubdomain=in", "_blank")}/>
                  <FaIcons.FaInstagram className="icon_hp_ins" onClick={()=> window.open("https://www.instagram.com/sae_nitk/?hl=en", "_blank")}/>
                 </div>
                 </div>
          <ul className="h-navbar">
            <li></li>
            <li className="li6"><Link className="page6" to="/event" style={{ textDecoration: 'none' }}>
            <h3 className="header-text">EVENTS</h3>
            </Link></li>

            <li className="li5">
            <Link to="#" className="page5" style={{ textDecoration: 'none' }} >
                <h3 className="header-text">PROJECTS ▼</h3></Link>
            <div class="project-dd">
                <Link className="link-i" to="/project1" style={{ textDecoration: 'none' }}>
                    <p className="link-item">2019-2020</p></Link>
                <Link className="link-i" to="/project2" style={{ textDecoration: 'none' }}>
                    <p className="link-item">2020-2021</p></Link>
            </div>
            </li>

            <li className="li4">
            <Link to ="#" className="page4" style={{ textDecoration: 'none' }}>
                <h3 className="header-text">MEMBERS ▼</h3></Link>
            <div class="club-dd">
                <Link className="link-i" to="/club" style={{ textDecoration: 'none' }}>
                    <p className="link-item">Current Team</p></Link>
                <Link className="link-i" to="/alumni" style={{ textDecoration: 'none' }}>
                    <p className="link-item">Alumni</p></Link>
            </div>
            </li>

            <li className="li3"><Link className="page3" to="/blog" style={{ textDecoration: 'none' }}>
            <h3 className="header-text">BLOGS</h3>
            </Link></li>

            <li className="li2"><Link to="/about" className="page2" style={{ textDecoration: 'none' }}>
            <h3 className="header-text" >ABOUT US</h3>
            </Link></li>

            <li className="li1"><Link to="/" className="page1" style={{ textDecoration: 'none' }}>
            <h3 className="header-text" >HOME</h3>
            </Link></li>
            </ul> 
            <div className="back-to-top" onClick={scrollToTop}><p>Back to top <FaIcons.FaArrowUp /></p></div>
        </div> 
    )
    }
