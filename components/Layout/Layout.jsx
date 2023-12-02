import React, { useContext, useState } from 'react'
import TopNavigation from '../TopHeader/TopNavigation'
import { NavbarContext } from '@/Context/NavbarContext';
import SidebarNav from '../TopHeader/SidebarNav';


const Layout = ({children}) => {


  return (
    <>
        <TopNavigation  />
        <SidebarNav />
       {children}
    </>
  )
}

export default Layout
