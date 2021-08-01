import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './sidebar.css'

const SubMenu = ({ item, state}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav)

   
  return (
    <>
      <Link className="SidebarLink" 
      to={item.path} 
      onClick={item.subNav && showSubnav} 
      style={{ textDecoration: 'none' }}>
        <div>
          {item.icon}
          <span className="SidebarLabel" onClick={state}>{item.title}</span>
          <span className="SidebarLabel2">{item.title2}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link className="dropdown-link" to={item.path} key={index} onClick={state} style={{ textDecoration: 'none' }}>
              {item.icon}
              <span className="SidebarLabel">{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;