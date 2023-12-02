import React, { useContext, useState } from 'react';
import styles from './TopNavigation.module.scss'
import { Button, Container } from 'react-bootstrap';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SidebarNav from './SidebarNav';
import { NavbarContext } from '@/Context/NavbarContext';

const TopNavigation = () => {
  const {openSideBar,handleOpenSidebar}=useContext(NavbarContext);
  return (
    <header className={styles.Header}>
    <Grid className={styles.TopNavigationContainer}>
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
                    <ShoppingBagOutlinedIcon />
                    <WhatsAppIcon />
                    <DarkModeIcon titleAccess='Dark Mode' />
               </Grid>
            </Grid>
        </Container>
        </Grid>
        <Grid className={styles.TopMenubar}>
        <Container className={styles.MenuListContainer}>
           {/* <Grid className={styles.MenuItems}>
            <Link className={styles.DropdownMegamenu} href={"#"}>New</Link>
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
            
           </Grid> */}
          <Grid className={styles.MenuItems}>
            <Grid className={styles.DropdownItem}>
            <a className={styles.DropdownLink} href={"#"}>New</a>
            <a className={styles.DropdownLink} href={"#"}>Designers</a>
            <a className={styles.DropdownLink} href={"#"}>Women</a>
            <a className={styles.DropdownLink} href={"#"}>Jewellery</a>
            <a className={styles.DropdownLink} href={"#"}>Accessories</a>
            <a className={styles.DropdownLink} href={"#"}>Wedding</a>
            <a className={styles.DropdownLink} href={"#"}>Men</a>
            <a className={styles.DropdownLink} href={"#"}>Kids</a>
            <a className={styles.DropdownLink} href={"#"}>Ready to Ship</a>
            <a className={styles.DropdownLink} href={"#"}>Style Bazaar</a>
            <a className={styles.DropdownLink} href={"#"}>Magazine</a>
            <a className={styles.DropdownLink+" "+styles.DropdownLinkNot} href={"#"}>Contemporary</a>
            <a className={styles.DropdownLink} href={"#"}>Decor</a>
            <a className={styles.DropdownLink} href={"#"}>Gifts</a>
            <a className={styles.DropdownLink} href={"#"}>Sale</a>
          <Grid className={styles.DropdownContent}>
              <Container>
                    <Grid className={styles.MegaContentBox}>
                      <Grid container className={styles.MegaRow} direction={"row"}>
                        <Grid className={styles.Col1} item sm={2} md={2} lg={2}>
                        <h2>One Sale</h2>
                          <Grid className={styles.subMenuItemLink}>
                              <a href='#'>Gulabo Jaipur</a>
                              <a href='#'>Shyam Narayan Prasad</a>
                              <a href='#'> Rishi & Vibhuti</a>
                              <a href='#'> Kalista</a>
                              <a href='#'>Vvani by Vani Vats</a>
                              <a href='#'>Pomcha Jaipur</a>
                              <a href='#'>Soniya G</a>
                              <a href='#'> Swabhimann Jewellery</a>
                              <a href='#'>Dusala Shawls</a>
                              <a href='#'>Suruchi Parakh</a>
                              <a href='#'>VIEW ALL</a>
                          </Grid>
                        </Grid>
                        <Grid  className={styles.Col2} item sm={2} md={2} lg={2}>
                        <h2>Featured</h2>
                          <Grid className={styles.subMenuItemLink}>
                              <a href='#'> Charkhee</a>
                              <a href='#'> Nautanky</a>
                              <a href='#'> Pankaj & Nidhi</a>
                              <a href='#'> Sabyasachi</a>
                              <a href='#'>Seema Thukral</a>
                              <a href='#'> Surabhi Arya</a>
                              <a href='#'>Soniya G</a>
                              <a href='#'>  Terra Luna</a>
                              <a href='#'>  The Royaleum</a>
                              <a href='#'>Two Sisters By Gyans</a>
                              <a href='#'> Zariaah</a>
                              <a href='#'>VIEW ALL</a>
                          
                          </Grid>
                        </Grid>
                        <Grid  className={styles.Col3} item sm={2} md={2} lg={2}>
                        <h2>Tranding</h2>
                          <Grid className={styles.subMenuItemLink}>
                              <a href='#'>Gulabo Jaipur</a>
                              <a href='#'>Shyam Narayan Prasad</a>
                              <a href='#'> Rishi & Vibhuti</a>
                              <a href='#'> Kalista</a>
                              <a href='#'>Vvani by Vani Vats</a>
                              <a href='#'>Pomcha Jaipur</a>
                              <a href='#'>Soniya G</a>
                              <a href='#'> Swabhimann Jewellery</a>
                              <a href='#'>Dusala Shawls</a>
                              <a href='#'>Suruchi Parakh</a>
                              <a href='#'>VIEW ALL</a>
                          </Grid>
                        </Grid>
                        <Grid  className={styles.Col4} item sm={3} md={3} lg={3}>
                          <Grid className={styles.ImageShow}>
                            <img src='https://static3.azafashions.com/tr:w-575.0,dpr-2/uploads/product_gallery/1699878845224_1.jpg' />
                            <Typography>Kurta & Pyjama</Typography>
                            <a href='#'>Shop Now</a>
                          </Grid>
                        </Grid>
                        <Grid  className={styles.Col5} item sm={3} md={3} lg={3}>
                        <Grid className={styles.ImageShow}>
                            <img src='https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                            <Typography>Kurta & Pyjama</Typography>
                            <a href='#'>Shop Now</a>
                          </Grid>
                        </Grid>
                       

                      </Grid>
                    </Grid>
              </Container>
          </Grid>
  </Grid> 
</Grid>
    
        </Container>
        </Grid>
        
    </Grid>
    <Grid className={styles.ResponsiveTopNavigation}>
           <Grid className={styles.NavCantainer}>
           <Grid className={styles.LeftItem}>
              <MenuIcon onClick={handleOpenSidebar}  />
              <Grid className={styles.Logo}>
                <Link href={"#"}>E-<span>Shopping</span></Link>
            </Grid>
           </Grid>
           <Grid className={styles.RightItem}>
           <Grid className={styles.IconItems}>
                    <WhatsAppIcon />
                    <FavoriteBorderIcon />
                    <ShoppingBagOutlinedIcon />
                    <DarkModeIcon />
            </Grid>
           </Grid>
      
      </Grid>
      <Grid className={styles.SearchBoxContainer}>
        <SearchIcon />
        <input type='text' placeholder='Search here..' />
        <section>
          <label>
            <input type='file'></input>
            <CameraAltIcon />
          </label>
        </section>
      </Grid>
    </Grid>
  
    </header>
  )
}

export default TopNavigation
