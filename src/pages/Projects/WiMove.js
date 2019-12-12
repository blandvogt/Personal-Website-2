import React from 'react';
import { Typography } from '@material-ui/core';

const WiMove = () => (
  <div style={{padding: '1rem'}}>
    <Typography variant={'body1'}>
      Wi-Move was invented by my team for the 2016 BE.INnovative Brooklyn Hackathon as a
      solution for growing population density in the downtown area. I served as the lead product 
      manager and researcher for this project.
    </Typography>
    <br/>
    <Typography variant={'body1'}>
      Wi-Move proposed an open Wifi mesh network that local businesses could contribute to in 
      order to attract new customers. By registering their modem with our app, users  
      connected to the Wifi would recieve notifications regarding discounts and other 
      incentives for that specific business. Research and interviews with potential users 
      suggested a massive increase in internet bandwidth and increased traffic for smaller businesses.
    </Typography>
    <br/>
    <Typography variant={'body1'}>
      Wi-Move won 1st Place, along with a monetary prize.
    </Typography>
  </div>
)

export default WiMove;