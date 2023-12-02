import React, { useContext, useState } from 'react'
import TopNavigation from '../TopHeader/TopNavigation'
import SidebarNav from '../TopHeader/SidebarNav';
import { Grid } from '@mui/material';
import styles from './Layout.module.scss'

const Layout = ({children}) => {


  return (
    <>
        <TopNavigation  />
        <SidebarNav />
      <Grid className={styles.ContentBox}>{children}</Grid> 
    </>
  )
}

export default Layout
