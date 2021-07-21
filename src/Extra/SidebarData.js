import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    subnavbool: false
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <IoIcons.IoIosPaper />,
    subnavbool: false
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <IoIcons.IoIosPaper />,
    subnavbool: false
  },
  {
    title: 'Members',
    path: '#',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subnavbool: true,
    subNav: [
      {
        title: 'Current Team',
        path: '/club',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      },
      {
        title: 'Alumni',
        path: '/alumni',
        icon: <IoIcons.IoMdPeople />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'PROJECTS',
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subnavbool: true,

    subNav: [
      {
        title: '2019-2020',
        path: '/project1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: '2020-2021',
        path: '/project2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  
  {
    title: 'Events',
    path: '/event',
    icon: <IoIcons.IoIosPaper />,
    subnavbool: false
  },
];