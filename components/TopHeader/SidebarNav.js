import React, { useContext } from 'react'
import styles from './SidebarNav.module.scss'
import { NavbarContext } from '@/Context/NavbarContext';
import { Grid, Typography } from '@mui/material';

const SidebarNav = () => {
    const {openSideBar,handleOpenSidebar}=useContext(NavbarContext);
  return (
    <>
    <Grid className={styles.Overlay}  style={{width:openSideBar ?'100%' : '0'}} onClick={handleOpenSidebar} ></Grid>
    <Grid id="mySidepanel" style={{width:openSideBar ?'300px' : '0'}} className={styles.Sidepanel}>
        <Grid className={styles.UserDetails}>
            <Typography>
                Guest User
            </Typography>
            <Grid className={styles.Links}>
                <a href='#'>Login</a> 
                <a href='#'>Rgiester</a>

            </Grid>
        </Grid>
    <Grid className={styles.Menulist}>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    </Grid>
   
</Grid>
</>
  )
}

export default SidebarNav
