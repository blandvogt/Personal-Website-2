import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const Website = () => (
  <div style={{padding: '1rem'}}>
    <Grid container style={{marginBottom: '1rem'}} spacing={2}>
      <Grid item xs={12} sm={7}> 
        <u><strong>Role: </strong></u>
        <div>Creator</div>
      </Grid>
      <Grid item xs={12} sm={5}> 
      <u><strong>Technologies: </strong></u>
        <div>JavaScript, React, HTML, CSS, jQuery</div>
      </Grid>
      <Grid item xs={12} sm={7}> 
      <u><strong>Result: </strong></u>
        <div>Web Development Experience</div>
      </Grid>
      <Grid item xs={12} sm={5}> 
      <u><strong>Years: </strong></u>
        <div>2018 - 2019</div>
      </Grid>
    </Grid>
    <Typography variant={'body1'}>
      I developed the original verison of this website at the onset of 2018. The goal was to 
      produce a platform to serve as a testing ground for new ideas and technologies
      I learned.
    </Typography>
    <br/>
    <Typography variant={'body1'}>
      The website utilized React (pre-v.16), jQuery, Bootstrap and implemented a class-based 
      architecture. It was my first time using any of these tools. While it didn't win any  
      awards, it did serve as the groundwork for many techniques and ideas I use today.
    </Typography>
  </div>
)

export default Website;