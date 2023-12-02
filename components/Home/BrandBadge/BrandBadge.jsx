import { Grid } from '@mui/material'
import React from 'react'
import styles from './Brandbadge.module.scss'

const BrandBadge = () => {
  return (
    <Grid className={styles.BrandBadgeWrapper}>
      <Grid container direction={"row"}>
        <Grid item sm={8}md={8} lg={8}>
            <Grid container direction={"row"}>
                <Grid item sm={3}md={3} lg={3}>
                <img alt="/aza-curates/home-furnishings/3266"
                  width="500" height="300"  src="https://static3.azafashions.com/emailer/images/HomeDecor.jpg" />
                </Grid>
                <Grid item sm={3}md={3} lg={3}>
                <img alt="/aza-curates/home-furnishings/3266"
                  width="500" height="300"  src="https://static3.azafashions.com/emailer/images/HomeDecor.jpg" />
                </Grid>
                <Grid item sm={3}md={3} lg={3}>
                <img alt="/aza-curates/home-furnishings/3266"
                  width="500" height="300"  src="https://static3.azafashions.com/emailer/images/HomeDecor.jpg" />
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BrandBadge
