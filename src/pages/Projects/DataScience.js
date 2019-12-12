import React from 'react';
import { Typography } from '@material-ui/core';

const DataScience = () => (
  <div style={{padding: '1rem'}}>
    <Typography variant={'body1'}>
      In 2017 I was selected by my professors, along with 3 other students, to represent 
      Long Island Univeristy at the Manhatten College Business Analytics Competition. I 
      immediately assumed the lead role in coaching my fellow teammembers on Data Science
      fundamentals. I would go on to lead a different team to the same competition the next year.
    </Typography>
    <br/>
    <Typography variant={'body1'}>
      For the competition we were given spreadsheets containing several million lines of 
      real-world businesses data. Our goal was to analyze the data and use it to provide 
      solutions as how to grow profits. My team used RStudio and Tableau to model our data and 
      several techniques in Python to give our presentation.
    </Typography>
  </div>
)

export default DataScience;