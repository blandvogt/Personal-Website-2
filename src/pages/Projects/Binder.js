import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const Binder = () => (
  <div style={{padding: '1rem'}}>
    <Grid container style={{marginBottom: '1rem'}} spacing={2}>
      <Grid item xs={12} sm={7}> 
        <u><strong>Role: </strong></u>
        <div>Founder, Product Manager, UI Developer</div>
      </Grid>
      <Grid item xs={12} sm={5}> 
      <u><strong>Technologies: </strong></u>
        <div>JavaScript, HTML, CSS</div>
      </Grid>

      <Grid item xs={12} sm={7}> 
      <u><strong>Result: </strong></u>
        <div>3rd in Regional NY State Business Plan Competition</div>
      </Grid>
      <Grid item xs={12} sm={5}> 
      <u><strong>Year: </strong></u>
        <div>2017</div>
      </Grid>
    </Grid>
    <br/>
    <Typography variant={'body1'}>
      Binder is a concept for a textbook marketplace app developed by myself and 2 other students. 
      Its premise was build upon 2 pillars. The first, is that textbooks represent 
      a significant portion of a student's educational costs. Secondly, that 
      textbooks have a shelf life of about 3 - 5 years and rarely does information change frequent 
      enough to warrent yearly textbook updates. Binder would allow a user to upload their class 
      schedule and connect with students who had taken those classes previously. Within minutes, 
      a student could either unload their old textbooks, or purchase new ones at
      significantly cheaper prices than retail.
    </Typography>
    <br/>
    <Typography variant={'body1'}>
      Binder was awarded 3rd place (Honorable Mention) for the Regional Technology bracket, beating out 
      almost 30 other teams. However, it fell just short of qualifying for one of the top 2 
      spots moving on to the state finals.
    </Typography>
  </div>
)

export default Binder;