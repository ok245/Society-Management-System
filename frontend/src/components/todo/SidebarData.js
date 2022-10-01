import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
      title : 'Home',
      path : '/Admin',
      icon : <AiIcons.AiFillHome/>,
      cName : 'nav-text'
    },
      {
        title : 'Visitors',
        path : '/Admin/visitors',
        icon : <GrIcons.GrUserWorker/>,
        cName : 'nav-text'
      },
      {
        title : 'Notices',
        path : '/Admin/Notice',
        icon : <AiIcons.AiFillNotification/>,
        cName : 'nav-text'
      },
      {
        title : 'Complaints',
        path : '/Admin/Complaints',
        icon : <RiIcons.RiBillFill/>,
        cName : 'nav-text'
      },
      {
        title : 'Bills',
        path : '/Admin/Bills',
        icon : <FaIcons.FaMoneyBill/>,
        cName : 'nav-text'
      }
]

export default SidebarData;