import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const WiMove = () => (
  <div style={{padding: '1rem'}}>
    <Grid container style={{marginBottom: '1rem'}} spacing={2}>
      <Grid item xs={12} sm={7}> 
        <u><strong>Role: </strong></u>
        <div>Co-Founder, Product Manager, UI Developer</div>
      </Grid>
      <Grid item xs={12} sm={5}> 
      <u><strong>Technologies: </strong></u>
        <div>JavaScript, HTML, CSS</div>
      </Grid>

      <Grid item xs={12} sm={7}> 
      <u><strong>Result: </strong></u>
        <div>1st in Brooklyn BE.INnovative Hackathon</div>
      </Grid>
      <Grid item xs={12} sm={5}> 
      <u><strong>Year: </strong></u>
        <div>2016</div>
      </Grid>
    </Grid>
    <br/>
    <Typography variant={'body1'}>
      Wi-Move was invented by my team as solution for growing population density in the Downtown Brooklyn area. 
      It proposed an open Wifi mesh network that local businesses could contribute to in 
      order to attract new customers. By registering their modem with our app, users  
      connected to the Wifi would recieve notifications regarding discounts and other 
      incentives for that specific business. Research and interviews with potential users 
      suggested a massive increase in internet bandwidth and increased traffic for smaller businesses.
    </Typography>
  </div>
)

export default WiMove;