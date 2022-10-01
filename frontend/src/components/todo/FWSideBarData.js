import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as RiIcons from 'react-icons/ri';

export const FWSideBarData = [
    {
      title : 'Home',
      path : '/flatowner',
      icon : <AiIcons.AiFillHome/>,
      cName : 'nav-text'
    },
      {
        title : 'Visitors',
        path : '/flatowner/visitors',
        icon : <GrIcons.GrUserWorker/>,
        cName : 'nav-text'
      },
      {
        title : 'Notices',
        path : '/flatowner/Notices',
        icon : <AiIcons.AiFillNotification/>,
        cName : 'nav-text'
      },
      {
        title : 'Complaints',
        path : '/flatowner/Complaints/Add',
        icon : <RiIcons.RiBillFill/>,
        cName : 'nav-text'
      },
      {
        title : 'Bills',
        path : '/flatowner/Bills',
        icon : <FaIcons.FaMoneyBill/>,
        cName : 'nav-text'
      }
]

export default FWSideBarData;