import React, { useState } from 'react';
import styled from 'styled-components';
import {BrowserRouter , Link } from 'react-router-dom';
import * as Fa from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './sidebar.css';
import Video from "../images/video-edited.mp4";

const SidebarNav = styled.nav`
  background: #204095;
  width: 60%;
  height: 100%;
  justify-content: center;
  position: fixed;
  overflow:auto;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 700ms;
  z-index: 10;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(true);
    const hideSidebar = () => setSidebar(false);  
    return (
        <>      
            <div className="nav">
              <div><Link to="/" onClick={hideSidebar}>
                <video className="header-video"
                   autostart 
                   autoPlay 
                   muted
                   src={Video} 
                   type="video/mp4" 
                   width="150px"
                   height="auto"/>
               </Link></div>
              <div className="bars">
               <Link to='#'>
                <Fa.FaBars onClick={showSidebar} color="#204095"/>
               </Link></div>
            </div>
            <SidebarNav sidebar={sidebar}>
              <div className="sidebar-wrap">
                <Link to='#' className="nav-close-icon" onClick={hideSidebar}>
                  <AiIcons.AiOutlineClose color="white"/>
                </Link>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} state={hideSidebar}/>;
                })}
              </div>
              <div className="iconsSideNav">
              <div className="icon_sidenav_outer">
                <Fa.FaFacebookF  className="icon_sidenav" onClick={()=> window.open("https://www.facebook.com/saenitk/", "_blank")} />
               </div> 
               <div className="icon_sidenav_outer">
                 <Fa.FaLinkedinIn className="icon_sidenav"  onClick={()=> window.open("https://www.linkedin.com/company/saenitk/?originalSubdomain=in", "_blank")}/>
               </div>
               <div className="icon_sidenav_outer">
                <Fa.FaInstagram className="icon_sidenav" onClick={()=> window.open("https://www.instagram.com/sae_nitk/?hl=en", "_blank")} />
               </div>
               <div className="icon_sidenav_outer">
                <Fa.FaYoutube className="icon_sidenav" onClick={()=> window.open("https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw", "_blank")}/>
               </div>  
               <div className="icon_sidenav_outer">
                 <Fa.FaWordpressSimple className="icon_sidenav" onClick={()=> window.open("https://saenitk.wordpress.com/", "_blank")}/>
                </div>  
             </div>
            </SidebarNav>
            
        </>
      );
}

export default Sidebar;