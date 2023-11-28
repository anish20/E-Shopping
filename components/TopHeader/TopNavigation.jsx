import React from 'react';
import styles from './TopNavigation.module.scss'
import { Button, Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const TopNavigation = () => {
  return (
    <Grid className={styles.TopNavigationContainer} >
        <Grid className={styles.TopInfoBar}>
        <Container className={styles.TopInfoBarContainer}>
            <Grid className={styles.Logo}>
                <Link href={"#"}>E-<span>Shopping</span></Link>
            </Grid>
            <Grid className={styles.Searchbar}>
                <Grid className={styles.SearchBox}>
                <SearchIcon />
                <input type='text' placeholder='Search for products, brand and more'/>
               <label><input type='file' /> <CameraAltIcon /> <span>Image Search</span></label> 
                </Grid>
               
            </Grid>
            <Grid className={styles.LeftIcons}>
               <Grid className={styles.IconItems}>
                    <PersonIcon />
                    <FavoriteBorderIcon />
                    <ShoppingBagIcon />
                    <WhatsAppIcon />
                    <DarkModeIcon titleAccess='Dark Mode' />
               </Grid>
            </Grid>
        </Container>
        </Grid>
        <Grid className={styles.TopMenubar}>
        <Container className={styles.MenuListContainer}>
           <Grid className={styles.MenuItems}>
            <Link href={"#"}>New</Link>
            <Link href={"#"}>Designers</Link>
            <Link href={"#"}>Women</Link>
            <Link href={"#"}>Jewellery</Link>
            <Link href={"#"}>Accessories</Link>
            <Link href={"#"}>Wedding</Link>
            <Link href={"#"}>Men</Link>
            <Link href={"#"}>Kids</Link>
            <Link href={"#"}>Ready to Ship</Link>
            <Link href={"#"}>Style Bazaar</Link>
            <Link href={"#"}>Magazine</Link>
            <Link href={"#"}>Contemporary</Link>
            <Link href={"#"}>Decor</Link>
            <Link href={"#"}>Gifts</Link>
            <Link href={"#"}>Cyber Monday Sale</Link>
            
           </Grid>
        </Container>
        </Grid>
        
    </Grid>
  )
}

export default TopNavigation
