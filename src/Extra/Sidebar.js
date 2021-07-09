import React, { useState } from 'react';
import styled from 'styled-components';
import {BrowserRouter , Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './sidebar.css';

const SidebarNav = styled.nav`
  background: #07070783;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
          <BrowserRouter>
            <div className="nav">
              <Link to='#' className="nav-icon">
                <FaIcons.FaBars onClick={showSidebar} className="bars"/>
              </Link>
            </div>
            <SidebarNav sidebar={sidebar}>
              <div className="sidebar-wrap">
                <Link to='#' className="nav-icon">
                  <AiIcons.AiOutlineClose onClick={showSidebar} />
                </Link>
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </div>
            </SidebarNav>
            </BrowserRouter>
        </>
      );
}

export default Sidebar;