import React from 'react';
import { Typography } from '@material-ui/core';

const Binder = () => (
  <div style={{padding: '1rem'}}>
    <Typography variant={'body1'}>
      Binder is a concept for a textbook marketplace app developed by myself and 2 other students 
      for the 2017 New York State Business Plan Competition. I held the responsibility of team lead, 
      as well as front-end developer and product manager.
    </Typography>
    <br/>
    <Typography variant={'body1'}>
      Its premise was build upon 2 pillars. Firstly, that textbooks represent 
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