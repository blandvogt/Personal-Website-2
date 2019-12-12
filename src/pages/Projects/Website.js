import React from 'react';
import { Typography } from '@material-ui/core';

const Website = () => (
  <div style={{padding: '1rem'}}>
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