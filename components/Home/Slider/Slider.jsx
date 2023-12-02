import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Slider.module.scss'
import { Grid } from '@mui/material';

const Slider = () => {
  return (
    <Grid className={styles.SliderContainer}>
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    navigation={true} modules={[Navigation,Pagination,Autoplay]}
    pagination={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className={styles.SliderWrapper}
  >
    <SwiperSlide>
        <img src='https://static3.azafashions.com/uploads/banner_templates/1-4-ready-to-ship-styles-0201497001701437089.png' />
    </SwiperSlide>
    <SwiperSlide>  <img src='https://static3.azafashions.com/uploads/banner_templates/1-4-velvet-visions-0310929001700816608.jpg' /></SwiperSlide>
    <SwiperSlide>  <img src='https://static3.azafashions.com/uploads/banner_templates/1-5-winter-festive-0123620001701437305.jpg' /></SwiperSlide>
    <SwiperSlide>  <img src='https://static3.azafashions.com/uploads/banner_templates/1-2-the-party-edit-2-0772053001701436883.png' /></SwiperSlide>
  </Swiper>
  </Grid>
  )
  
}

export default Slider
